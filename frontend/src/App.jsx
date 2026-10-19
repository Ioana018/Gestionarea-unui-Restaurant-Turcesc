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

export default function App() {
  const comenzi = COMENZI_INITIALE;
  const activeCount = comenzi.filter((c) => !c.gata).length;

  return (
    <div>
      <header className="app-header">
        <h1>Turkish Kebab</h1>
        <p>Monitorizarea preparatelor și a comenzilor din bucătărie.</p>
        <p className="app-count">
          {comenzi.length} comenzi înregistrate, dintre care {activeCount} active
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Comenzile mele</h2>
          <ComandaList comenzi={comenzi} />
        </section>
      </main>
    </div>
  );
}