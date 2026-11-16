import ComandaCard from "./ComandaCard.jsx";

export default function ComandaList({ comenzi, onToggle, onDelete }) {
  if (comenzi.length === 0) {
    return (
      <p className="empty" data-testid="empty">
        Nu există nicio comandă înregistrată.
      </p>
    );
  }

  return (
    <ul className="task-list">
      {comenzi.map((comanda) => (
        <ComandaCard
          key={comanda.id}
          comanda={comanda}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}