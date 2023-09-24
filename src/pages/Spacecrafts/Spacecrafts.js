import {useState, useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import styles from "./Spacecrafts.module.css";
import {LoadingContext} from "../../context/LoadingProvider";
import SpaceTravelApi from "../../services/SpaceTravelApi";

function Spacecrafts ()
{
  const [spacecrafts, setSpacecrafts] = useState([]);
  const {enableLoading, disableLoading} = useContext(LoadingContext);

  async function getSpacecrafts ()
  {
    const {data: spacecrafts, isError} = await SpaceTravelApi.getSpacecrafts();
    if (!isError)
    {
      setSpacecrafts(spacecrafts);
    }
  }
  useEffect(() =>
            {
              async function runGetSpacecrafts ()
              {
                enableLoading();
                await getSpacecrafts();
                disableLoading();
              }
              runGetSpacecrafts();
            },
            [enableLoading, disableLoading]
  );

  const navigate = useNavigate();

  function handleClickOfBuild ()
  {
    navigate("/spacecraft/build")
  }

  function handleClickOfImageContainer (event, id)
  {
    navigate(`/spacecraft/${id}`);
  }

  async function handleClickOfDestroy (event, id)
  {
    enableLoading();
    const {isError} = await SpaceTravelApi.destroySpacecraftById({id});
    if (!isError)
    {
      await getSpacecrafts();
    }
    disableLoading();
  }

  return (
    <div>
      <button onClick={handleClickOfBuild}>
       ⚒️ Build it up Scotty 🛠️
      </button>
      <div>
        {
          spacecrafts.map(
            (spacecraft, index) =>
              <div
                key={spacecraft.id}
                className={styles["spacecraft"]}
              >
                <div
                  className={styles["spacecraft__imageContainer"]}
                  onClick={(event) => handleClickOfImageContainer(event, spacecraft.id)}
                >
                  {
                    spacecraft.pictureUrl
                    ?
                    <img
                      src={spacecraft.pictureUrl}
                      alt={`The spacecraft ${spacecraft.name}`}
                      className={styles["spacecraft__image"]}
                    />
                    :
                    <span className={styles["spacecraft__image--default"]}>🚀</span>
                  }
                </div>

                <div className={styles["spacecraft__infoContainer"]}>
                  <div className={styles["spacecraft__info"]}>
                    <span>Name:</span>
                    <span>{spacecraft.name}</span>
                  </div>

                  <div className={styles["spacecraft__info"]}>
                    <span>Capacity:</span>
                    <span>{spacecraft.capacity}</span>
                  </div>
                </div>

                <div>
                  <button onClick={(event) => handleClickOfDestroy(event, spacecraft.id)}>♻️Recycle♻️</button>
                </div>
              </div>
          )
        }
      </div>
    </div>
  );
}

export default Spacecrafts;
