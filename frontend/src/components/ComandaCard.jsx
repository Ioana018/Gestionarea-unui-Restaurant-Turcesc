import { Link } from "react-router-dom";
import { ETICHETE_ZONA } from "../constants.js";
import styles from "./ComandaCard.module.css";

export default function ComandaCard({ comanda, onToggle, onDelete }) {
  return (
    <li
      className={
        comanda.gata ? `${styles.card} ${styles.done}` : styles.card
      }
      data-testid="item"
      data-id={comanda.id}
    >
      <div className={styles.main}>
        <input
          type="checkbox"
          checked={comanda.gata}
          onChange={() => onToggle(comanda.id)}
          aria-label={`Marchează ${comanda.titlu}`}
          data-testid="item-toggle"
        />
        <div>
          <Link
            to={`/comenzi/${comanda.id}`}
            className={styles.title}
            data-testid="item-link"
          >
            {comanda.titlu}
          </Link>
          <span className={`badge badge-${comanda.zona}`}>
            {ETICHETE_ZONA[comanda.zona] ?? comanda.zona}
          </span>
        </div>
      </div>

      <button
        type="button"
        className="btn-danger"
        onClick={() => onDelete(comanda.id)}
        aria-label={`Șterge ${comanda.titlu}`}
        data-testid="item-delete"
      >
        Șterge
      </button>
    </li>
  );
}