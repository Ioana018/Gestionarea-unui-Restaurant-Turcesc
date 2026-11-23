import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchComanda } from "../api.js";
import { ETICHETE_ZONA } from "../constants.js";
import styles from "./ComandaDetaliuPage.module.css";

export default function ComandaDetaliuPage() {
  const { id } = useParams();
  const [comanda, setComanda] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    fetchComanda(id)
      .then((data) => {
        if (!ignore) {
          setComanda(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Se încarcă...
      </p>
    );
  }

  if (error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          Comanda nu a putut fi încărcată: {error}
        </p>
        <Link to="/">Înapoi la comenzi</Link>
      </section>
    );
  }

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>
        Înapoi la comenzi
      </Link>
      <h2
        className={comanda.gata ? styles.done : undefined}
        data-testid="detail-title"
      >
        {comanda.titlu}
      </h2>
      <dl className={styles.fields}>
        <dt>Zonă bucătărie</dt>
        <dd>
          <span className={`badge badge-${comanda.zona}`}>
            {ETICHETE_ZONA[comanda.zona] ?? comanda.zona}
          </span>
        </dd>
        <dt>Status</dt>
        <dd>{comanda.gata ? "Gata de servire" : "În preparare"}</dd>
        <dt>ID comandă</dt>
        <dd>{comanda.id}</dd>
      </dl>
    </section>
  );
}