import {useState, useEffect} from "react";

import styles from "./Loading.module.css";

function Loading ()
{
  const [dots, setDots] = useState([]);

  useEffect(() =>
            {
              setTimeout(() =>
                         {
                           if (dots.length < 5)
                           {
                             setDots(prevDots => [...prevDots, "🥔"]);
                           }
                         },
                         200
              );
            },
            [dots]
  );

  return (
    <div className={styles["loading"]}>
      <span>🥔Relocating Stars🥔</span>
      {dots.map((dot, index) => <span key={index}>{dot}</span>)}
    </div>
  );
}

export default Loading;
