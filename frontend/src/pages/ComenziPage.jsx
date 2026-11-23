import { useEffect, useState } from "react";
import ComandaList from "../components/ComandaList.jsx";
import ComandaForm from "../components/ComandaForm.jsx";
import {
  createComanda,
  deleteComanda,
  fetchComenzi,
  updateComanda,
} from "../api.js";
import styles from "./ComenziPage.module.css";

export default function ComenziPage() {
  const [comenzi, setComenzi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await fetchComenzi();
        if (!ignore) setComenzi(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, []);

  async function handleAdd(comanda) {
    const creata = await createComanda(comanda);
    setComenzi((prev) => [...prev, creata]);
  }

  async function handleToggle(id) {
    const comanda = comenzi.find((c) => c.id === id);
    try {
      const actualizata = await updateComanda(id, { gata: !comanda.gata });
      setComenzi((prev) =>
        prev.map((c) => (c.id === id ? actualizata : c))
      );
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteComanda(id);
      setComenzi((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  const activeCount = comenzi.filter((c) => !c.gata).length;

  return (
    <div className={styles.grid}>
      <section className="panel">
        <h2>Adaugă comandă</h2>
        <ComandaForm onAdd={handleAdd} />
      </section>

      <section className="panel">
        <h2>Comenzile mele</h2>
        <p className={styles.summary}>
          {comenzi.length} comenzi, dintre care {activeCount} active
        </p>

        {loading && (
          <p className="info" data-testid="loading">
            Se încarcă...
          </p>
        )}

        {error && (
          <p className="error" data-testid="error">
            {error}
          </p>
        )}

        {!loading && (
          <ComandaList
            comenzi={comenzi}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        )}
      </section>
    </div>
  );
}