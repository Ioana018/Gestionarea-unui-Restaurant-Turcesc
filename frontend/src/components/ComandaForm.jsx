import { useState } from "react";

const ZONE = [
  { value: "grill", label: "Grill" },
  { value: "cuptor", label: "Cuptor" },
  { value: "desert", label: "Desert" },
];

const TITLU_MAX = 100;

export default function ComandaForm({ onAdd }) {
  const [titlu, setTitlu] = useState("");
  const [zona, setZona] = useState("grill");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const t = titlu.trim();
    if (t === "") return "Denumirea preparatului este obligatorie.";
    if (t.length > TITLU_MAX) {
      return `Denumirea are maximum ${TITLU_MAX} de caractere.`;
    }
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const mesaj = valideaza();
    if (mesaj) {
      setEroare(mesaj);
      return;
    }

    setEroare("");
    setTrimite(true);
    try {
      await onAdd({ titlu: titlu.trim(), zona, gata: false });
      setTitlu("");
      setZona("grill");
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form
      className="task-form"
      onSubmit={handleSubmit}
      noValidate
      data-testid="form"
    >
      <label>
        Preparat
        <input
          type="text"
          value={titlu}
          onChange={(e) => setTitlu(e.target.value)}
          placeholder="Ex: Adana Kebab cu ardei copt"
          maxLength={TITLU_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>

      <label>
        Zonă bucătărie
        <select
          value={zona}
          onChange={(e) => setZona(e.target.value)}
          data-testid="form-zona"
        >
          {ZONE.map((z) => (
            <option key={z.value} value={z.value}>
              {z.label}
            </option>
          ))}
        </select>
      </label>

      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}

      <button type="submit" disabled={trimite} data-testid="form-submit">
        {trimite ? "Se salvează..." : "Adaugă comanda"}
      </button>
    </form>
  );
}