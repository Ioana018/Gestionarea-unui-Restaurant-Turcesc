import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AngajatiPage.module.css";

const ANGAJATI_INITIALI = [
  {
    id: 1,
    nume: "Mehmet Kaya",
    rol: "grill",
    rolLabel: "Grill Master",
    telefon: "0721 123 456",
    activ: true,
  },
  {
    id: 2,
    nume: "Aylin Yilmaz",
    rol: "ospatar",
    rolLabel: "Ospătar",
    telefon: "0732 987 654",
    activ: true,
  },
  {
    id: 3,
    nume: "Emre Demir",
    rol: "firin",
    rolLabel: "Pitar (Cuptor)",
    telefon: "0744 555 111",
    activ: false,
  },
];

const ETICHETE_ROL = {
  grill: "Grill Master",
  firin: "Pitar (Cuptor)",
  ospatar: "Ospătar",
  manager: "Manager de sală",
};

function getInitiale(nume) {
  return nume
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

export default function AngajatiPage() {
  const [angajati, setAngajati] = useState(ANGAJATI_INITIALI);
  const [nume, setNume] = useState("");
  const [rol, setRol] = useState("");

  function handleAdauga(e) {
    e.preventDefault();
    if (!nume.trim() || !rol) return;

    const nou = {
      id: Date.now(),
      nume: nume.trim(),
      rol,
      rolLabel: ETICHETE_ROL[rol] ?? rol,
      telefon: "0720 000 000",
      activ: true,
    };
    setAngajati((prev) => [...prev, nou]);
    setNume("");
    setRol("");
  }

  function toggleTura(id) {
    setAngajati((prev) =>
      prev.map((a) => (a.id === id ? { ...a, activ: !a.activ } : a))
    );
  }

  const activiCount = angajati.filter((a) => a.activ).length;

  function clasaRol(r) {
    if (r === "grill") return `${styles.rol} ${styles.rolGrill}`;
    if (r === "ospatar") return `${styles.rol} ${styles.rolOspatar}`;
    return `${styles.rol} ${styles.rolFirin}`;
  }

  return (
    <div className={styles.pageContainer}>
      <header className={styles.headerAngajati}>
        <Link to="/acasa" className={styles.btnInapoi}>
          &larr; Înapoi
        </Link>
        <h1>Echipa Turkish Kebab</h1>
        <p className={styles.subtitlu}>
          {angajati.length} membri înregistrați &bull; {activiCount} activi pe
          tură
        </p>
      </header>

      <section className={styles.baraAdaugare}>
        <form className={styles.formRapid} onSubmit={handleAdauga}>
          <input
            type="text"
            value={nume}
            onChange={(e) => setNume(e.target.value)}
            placeholder="Nume și prenume angajat"
            required
          />
          <select value={rol} onChange={(e) => setRol(e.target.value)} required>
            <option value="" disabled>
              Selectează rolul
            </option>
            <option value="grill">Ocakbaşı (Grill Master)</option>
            <option value="firin">Pitar (Cuptor / Pide)</option>
            <option value="ospatar">Ospătar / Servire</option>
            <option value="manager">Manager de sală</option>
          </select>
          <button type="submit">+ Înregistrează</button>
        </form>
      </section>

      <div className={styles.gridAngajati}>
        {angajati.map((a) => (
          <article
            key={a.id}
            className={
              a.activ
                ? styles.cardAngajat
                : `${styles.cardAngajat} ${styles.cardLiber}`
            }
          >
            <div className={styles.avatar}>{getInitiale(a.nume)}</div>
            <div className={styles.detalii}>
              <h3>{a.nume}</h3>
              <span className={clasaRol(a.rol)}>{a.rolLabel}</span>
              <p className={styles.telefon}>&#128222; {a.telefon}</p>
            </div>
            <button
              type="button"
              onClick={() => toggleTura(a.id)}
              className={
                a.activ
                  ? `${styles.statusBadge} ${styles.statusActiv}`
                  : `${styles.statusBadge} ${styles.statusLiber}`
              }
            >
              {a.activ ? "În tură" : "Liber"}
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}