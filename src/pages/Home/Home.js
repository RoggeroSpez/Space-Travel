import styles from "./Home.module.css";
function Home ()
{
  return (
    <>
      <section className={styles["section__container"]}>
        <h1>The new Frontier is ahead!🥔</h1>
      </section>
      <section className={styles["section__container"]}>
        <h2>🌌 Journey into the Unknown</h2>
        <p>As you Travel through the stars we encourage you to be curious while being safe, the Universe is vast and full of so many Wonders</p>
      </section>
      <section className={styles["section__container"]}>
        <h2>🌍 Never Neglect to be Creative and  Innovative</h2>
        <p>We are humans and we love to create and explore it is part of our instincts to adapt and create.</p>
      </section>
      <section className={styles["section__container"]}>
        <h2>🚀 Enter Space Travel: Where Dreams Take Flight</h2>
        <p>When you Embark on this extraordinary journey with our technology, we have named "Space Potatoes United Develpoment" or "S.p.u.d.", We hope that your journey is safe and a great success in the endvours of exploration in the wide cosmos.  </p>
      </section>
      <section className={styles["section__container"]}>
        <h2>🔧 Engineer, Explorer, Leader</h2>
        <p>Build and Create while leading the way to a better tomorrow! In the vastness of the Space adaptability is a key we of Surviving and Success in your endvours.</p>
      </section>
      <section className={styles["section__container"]}>
        <h2>🌠 A Universe of Possibilities Awaits🍟</h2>
        <p>All ways look from multiple views so that you can see all the Possibilities that might be just out of sight.🥔</p>
      </section>
    </>
  );
}
export default Home;