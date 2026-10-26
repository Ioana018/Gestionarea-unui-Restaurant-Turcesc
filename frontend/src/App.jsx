import { useState } from "react";
import ComandaList from "./components/ComandaList.jsx";

const COMENZI_INITIALE = [
  {
    id: 1,
    titlu: "Adana Kebab cu ardei copt",
    gata: false,
    zona: "grill"
  },
  {
    id: 2,
    titlu: "Pide cu vită și cașcaval (Kashar)",
    gata: true,
    zona: "cuptor"
  },
  {
    id: 3,
    titlu: "Künefe cu fistic de Antep",
    gata: false,
    zona: "desert"
  }
];

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [comenzi, setComenzi] = useState(COMENZI_INITIALE);
  const [tema, setTema] = useState(temaInitiala);

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
        <p>Monitorizarea preparatelor și a comenzilor din bucătărie.</p>
        <p className="app-count">
          {comenzi.length} comenzi înregistrate, dintre care {activeCount} active
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Comenzile mele</h2>
          <ComandaList
            comenzi={comenzi}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </>
  );
}