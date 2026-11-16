import "./App.css";
import { useEffect, useState } from "react";
import ComandaList from "./components/ComandaList.jsx";
import ComandaForm from "./components/ComandaForm.jsx";
import {
  createComanda,
  deleteComanda,
  fetchComenzi,
  updateComanda,
} from "./api.js";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [comenzi, setComenzi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tema, setTema] = useState(temaInitiala);

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

  // Întâi serverul, apoi state-ul
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

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const activeCount = comenzi.filter((c) => !c.gata).length;

  return (
    <>
      <header className="app-header">
        <button
          type="button"
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        <h1>Turkish Kebab</h1>
        <p>Monitorizarea preparatelor și a fluxului de lucru din restaurant.</p>
        <p className="app-count">
          {comenzi.length} comenzi înregistrate, dintre care {activeCount} active
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Adaugă comandă</h2>
          <ComandaForm onAdd={handleAdd} />
        </section>

        <section className="panel">
          <h2>Comenzile mele</h2>

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
      </main>
    </>
  );
}