const ETICHETE_ZONA = {
  grill: "Grill",
  cuptor: "Cuptor",
  desert: "Desert",
};

export default function ComandaCard({ comanda, onToggle, onDelete }) {
  return (
    <li
      className={comanda.gata ? "task-card done" : "task-card"}
      data-testid="item"
      data-id={comanda.id}
    >
      <label className="task-main">
        <input
          type="checkbox"
          checked={comanda.gata}
          onChange={() => onToggle(comanda.id)}
          data-testid="item-toggle"
        />
        <div>
          <h3 data-testid="item-title">{comanda.titlu}</h3>
          <span className={`badge badge-${comanda.zona}`}>
            {ETICHETE_ZONA[comanda.zona] ?? comanda.zona}
          </span>
        </div>
      </label>
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