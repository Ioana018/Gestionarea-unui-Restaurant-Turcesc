import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heroContainer}>
        <h1 className={styles.brandTitle}>Turkish Kebab</h1>
        <p className={styles.brandSubtitle}>
          Gustul autentic al Anatoliei, direct din jar.
        </p>

        <div className={styles.imageWrapper}>
          <img
            src="/kebab-hero.png"
            alt="Mâncare tradițională turcească"
            className={styles.heroImage}
          />

          <nav className={styles.navButtons}>
            <Link to="/mese" className={styles.heroBtn}>
              MESE REZERVATE
            </Link>
            <Link to="/" className={styles.heroBtn}>
              BUCĂTĂRIE
            </Link>
            <Link to="/angajati" className={styles.heroBtn}>
              ANGAJAȚI
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}