import { useEffect, useState } from "react";
import ComandaList from "./components/ComandaList.jsx";
import { fetchComenzi } from "./api.js";

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
        if (!ignore) {
          setComenzi(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, []);

  function handleToggle(id) {
    setComenzi((prev) =>
      prev.map((c) => (c.id === id ? { ...c, gata: !c.gata } : c))
    );
  }

  function handleDelete(id) {
    setComenzi((prev) => prev.filter((c) => c.id !== id));
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
          <h2>Comenzile mele</h2>

          {loading && <p className="info">Se încarcă lista de comenzi...</p>}

          {error && (
            <p className="error">
              Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
            </p>
          )}

          {!loading && !error && (
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