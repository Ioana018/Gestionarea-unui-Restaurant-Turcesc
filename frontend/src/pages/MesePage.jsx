import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MesePage.module.css";

const MESE_INITIALE = [
  {
    id: 1,
    ocupata: false,
    istoric: [
      "14:00 - 15:30: Elena Ionescu (2 pers.)",
      "12:00 - 13:30: Radu Vasile (4 pers.)",
    ],
  },
  {
    id: 2,
    ocupata: false,
    istoric: ["17:00 - 18:30: Dan Georgescu (3 pers.)"],
  },
  { id: 3, ocupata: false, istoric: [] },
  {
    id: 4,
    ocupata: false,
    istoric: ["13:00 - 14:00: Liviu M. (2 pers.)"],
  },
  { id: 5, ocupata: false, istoric: [] },
  {
    id: 6,
    ocupata: true,
    istoric: [
      "Activă acum: Fam. Barbu (4 pers.)",
      "16:00 - 18:00: Alin Popa (2 pers.)",
    ],
  },
  { id: 7, ocupata: false, istoric: [] },
];

export default function MesePage() {
  const [mese, setMese] = useState(MESE_INITIALE);
  const [masaSelectata, setMasaSelectata] = useState(null);
  const [nume, setNume] = useState("");
  const [telefon, setTelefon] = useState("");
  const [persoane, setPersoane] = useState(2);
  const [ora, setOra] = useState("19:00");

  function deschideMasa(masa) {
    setMasaSelectata(masa);
    setNume("");
    setTelefon("");
    setPersoane(2);
    setOra("19:00");
  }

  function handleRezervare(e) {
    e.preventDefault();
    if (!nume.trim() || !masaSelectata) return;

    const intrareNoua = `${ora}: ${nume.trim()} (${persoane} pers.)`;
    setMese((prev) =>
      prev.map((m) =>
        m.id === masaSelectata.id
          ? { ...m, ocupata: true, istoric: [intrareNoua, ...m.istoric] }
          : m
      )
    );
    setMasaSelectata(null);
  }

  const randSus = mese.slice(0, 4);
  const randJos = mese.slice(4, 7);

  return (
    <div className={styles.hartaContainer}>
      <header className={styles.hartaHeader}>
        <Link to="/acasa" className={styles.btnInapoi}>
          &larr; Înapoi
        </Link>
        <h1>Selectează o masă pentru rezervare</h1>
      </header>

      <div className={styles.meseLayout}>
        <div className={styles.randMese}>
          {randSus.map((masa) => (
            <button
              key={masa.id}
              type="button"
              onClick={() => deschideMasa(masa)}
              className={
                masa.ocupata
                  ? `${styles.masaItem} ${styles.ocupata}`
                  : styles.masaItem
              }
            >
              <img src="/mese.png" alt={`Masa ${masa.id}`} />
              <span className={styles.numarMasa}>{masa.id}</span>
            </button>
          ))}
        </div>

        <div className={styles.randMese}>
          {randJos.map((masa) => (
            <button
              key={masa.id}
              type="button"
              onClick={() => deschideMasa(masa)}
              className={
                masa.ocupata
                  ? `${styles.masaItem} ${styles.ocupata}`
                  : styles.masaItem
              }
            >
              <img src="/mese.png" alt={`Masa ${masa.id}`} />
              <span className={styles.numarMasa}>{masa.id}</span>
            </button>
          ))}
        </div>
      </div>

      {masaSelectata && (
        <div
          className={styles.modalOverlay}
          onClick={() => setMasaSelectata(null)}
        >
          <div
            className={styles.modalCard}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalInchide}
              onClick={() => setMasaSelectata(null)}
              aria-label="Închide"
            >
              &times;
            </button>
            <h2>
              Rezervare Masa {masaSelectata.id}{" "}
              {masaSelectata.ocupata ? "(În curs)" : ""}
            </h2>

            <form className={styles.rezervareForm} onSubmit={handleRezervare}>
              <label>
                Nume client
                <input
                  type="text"
                  value={nume}
                  onChange={(e) => setNume(e.target.value)}
                  placeholder="Ex: Popescu Andrei"
                  required
                />
              </label>

              <label>
                Număr de telefon
                <input
                  type="tel"
                  value={telefon}
                  onChange={(e) => setTelefon(e.target.value)}
                  placeholder="Ex: 0721 000 000"
                  required
                />
              </label>

              <div className={styles.randDublu}>
                <label>
                  Număr persoane
                  <input
                    type="number"
                    min="1"
                    max="8"
                    value={persoane}
                    onChange={(e) => setPersoane(Number(e.target.value))}
                    required
                  />
                </label>

                <label>
                  Ora rezervării
                  <input
                    type="time"
                    value={ora}
                    onChange={(e) => setOra(e.target.value)}
                    required
                  />
                </label>
              </div>

              <button type="submit" className={styles.btnTrimite}>
                Confirmă Rezervarea
              </button>
            </form>

            <div className={styles.istoricZona}>
              <h3>Istoric Rezervări</h3>
              {masaSelectata.istoric.length === 0 ? (
                <p className={styles.faraIstoric}>
                  Nu există rezervări anterioare pentru astăzi.
                </p>
              ) : (
                <ul className={styles.istoricLista}>
                  {masaSelectata.istoric.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}