const ETICHETE_ZONA = {
  grill: "Grill",
  cuptor: "Cuptor",
  desert: "Desert"
};

export default function ComandaCard({ comanda }) {
  return (
    <li className={comanda.gata ? "order-card done" : "order-card"}>
      <div className="order-info">
        <h3>{comanda.titlu}</h3>
        <span className={`badge badge-${comanda.zona}`}>
          {ETICHETE_ZONA[comanda.zona] || comanda.zona}
        </span>
      </div>
      <span className="status">{comanda.gata ? "Gata" : "În preparare"}</span>
    </li>
  );
}