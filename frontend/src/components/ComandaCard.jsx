const ETICHETE_ZONA = {
  grill: "Grill",
  cuptor: "Cuptor",
  desert: "Desert"
};

export default function ComandaCard({ comanda, onToggle, onDelete }) {
  return (
    <li className={comanda.gata ? "order-card done" : "order-card"}>
      <label className="order-main">
        <input
          type="checkbox"
          checked={comanda.gata}
          onChange={() => onToggle(comanda.id)}
        />
        <div className="order-info">
          <h3>{comanda.titlu}</h3>
          <span className={`badge badge-${comanda.zona}`}>
            {ETICHETE_ZONA[comanda.zona] || comanda.zona}
          </span>
        </div>
      </label>
      <div className="order-actions">
        <span className="status">{comanda.gata ? "Gata" : "În preparare"}</span>
        <button
          type="button"
          className="btn-danger"
          onClick={() => onDelete(comanda.id)}
          aria-label={`Șterge comanda ${comanda.titlu}`}
        >
          Șterge
        </button>
      </div>
    </li>
  );
}