const comenzi = [
  { id: 1, titlu: "Adana Kebab cu ardei copt", gata: false, zona: "grill" },
  { id: 2, titlu: "Pide cu vită și cașcaval (Kashar)", gata: true, zona: "cuptor" },
  { id: 3, titlu: "Künefe cu fistic de Antep", gata: false, zona: "desert" }
];

export default function App() {
  const active = comenzi.filter((item) => !item.gata).length;

  return (
    <>
      <header className="app-header">
        <h1>Turkish Kebab</h1>
        <p>Monitorizarea preparatelor și a comenzilor din bucătărie.</p>
        <p className="app-count">
          {comenzi.length} comenzi înregistrate, dintre care {active} active
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Comenzile mele</h2>
          <pre>{JSON.stringify(comenzi, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}