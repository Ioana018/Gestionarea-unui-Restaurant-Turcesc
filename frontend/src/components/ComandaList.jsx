import ComandaCard from "./ComandaCard.jsx";

export default function ComandaList({ comenzi, onToggle, onDelete }) {
  if (!comenzi || comenzi.length === 0) {
    return <p className="empty">Nu există nicio comandă înregistrată.</p>;
  }

  return (
    <ul className="order-list">
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