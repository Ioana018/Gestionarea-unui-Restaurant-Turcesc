import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function navClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

export default function Layout() {
  const [tema, setTema] = useState(temaInitiala);

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <span className={styles.logo}>Turkish Kebab</span>
          <nav className={styles.nav} data-testid="nav">
            <NavLink to="/" end className={navClass}>
              Bucătărie
            </NavLink>
            <NavLink to="/acasa" className={navClass}>
              Acasă
            </NavLink>
            <NavLink to="/mese" className={navClass}>
              Mese Rezervate
            </NavLink>
            <NavLink to="/angajati" className={navClass}>
              Angajați
            </NavLink>
            <NavLink to="/despre" className={navClass}>
              Despre
            </NavLink>
            <button
              type="button"
              className={styles.themeBtn}
              onClick={handleTema}
              aria-pressed={tema === "dark"}
            >
              {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
            </button>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        Proiect Tehnologii Web &bull; Turkish Kebab
      </footer>
    </>
  );
}