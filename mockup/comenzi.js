// --- Datele de test și constantele temei (Turkish Kebab) ---
const ZONE = ["grill", "cuptor", "desert"];

const comenzi = [
  { id: 1, titlu: "Adana Kebab cu ardei copt", gata: false, zona: "grill" },
  { id: 2, titlu: "Pide cu vită și cașcaval (Kashar)", gata: true, zona: "cuptor" },
  { id: 3, titlu: "Künefe cu fistic de Antep", gata: false, zona: "desert" }
];

// --- Funcții de manipulare a datelor (imutabile) ---

// Pasul 3: Listarea titlurilor (folosind map)
function listeazaTitluri(lista) {
  return lista.map((item) => item.titlu);
}

// Pasul 4: Numărarea comenzilor active/nefinalizate (folosind filter)
function numaraActive(lista) {
  return lista.filter((item) => !item.gata).length;
}

// Pasul 5: Căutarea după titlu, case-insensitive (folosind filter și includes)
function cautaDupaTitlu(lista, text) {
  const textCautat = text.toLowerCase();
  return lista.filter((item) => item.titlu.toLowerCase().includes(textCautat));
}

// Pasul 6: Generarea id-ului unic următor (folosind reduce)
function nextId(lista) {
  return lista.reduce((max, item) => Math.max(max, item.id), 0) + 1;
}

// Pasul 6: Adăugarea unui preparat/comandă, cu validare strictă
function adaugaComanda(lista, titlu, zona = "grill") {
  const titluCurat = titlu ? titlu.trim() : "";

  // Validare 1: titlu necompletat
  if (!titluCurat) {
    console.error("Eroare validare: Denumirea preparatului nu poate fi goală!");
    return lista;
  }

  // Validare 2: zona nu există în lista predefinită
  if (!ZONE.includes(zona)) {
    console.error(`Eroare validare: Zona '${zona}' este invalidă! Zone permise: ${ZONE.join(", ")}`);
    return lista;
  }

  const comandaNoua = {
    id: nextId(lista),
    titlu: titluCurat,
    gata: false,
    zona: zona
  };

  // Returnează un array nou, fără a altera array-ul original (imutabilitate)
  return [...lista, comandaNoua];
}

// Pasul 7: Comutarea stării preparatului (folosind map)
function comutaStare(lista, id) {
  return lista.map((item) =>
    item.id === id ? { ...item, gata: !item.gata } : item
  );
}

// Pasul 7: Ștergerea unei comenzi după id (folosind filter)
function stergeComanda(lista, id) {
  return lista.filter((item) => item.id !== id);
}

// --- Pasul 8: Rularea testelor în consolă (grupate pe secțiuni) ---

console.log("--- Citire ---");
console.log("Titluri comenzi:", listeazaTitluri(comenzi).join(", "));
console.log("Comenzi active în bucătărie:", numaraActive(comenzi));
console.log(
  "Căutare 'kebab':",
  listeazaTitluri(cautaDupaTitlu(comenzi, "kebab")).join(", ")
);

console.log("--- Adăugare ---");
let listaNoua = adaugaComanda(comenzi, "Urfa Kebab la lipie", "grill");
console.log("Lista nouă are:", listaNoua.length, "comenzi");
console.log("Originalul a rămas cu:", comenzi.length, "comenzi"); // Demonstrează imutabilitatea

console.log("--- Modificare și ștergere ---");
listaNoua = comutaStare(listaNoua, 1);
console.log("După bifarea id 1 ca gata, active rămase:", numaraActive(listaNoua));

listaNoua = stergeComanda(listaNoua, 3);
console.log("După ștergerea id 3:", listeazaTitluri(listaNoua).join(", "));

console.log("--- Validare ---");
adaugaComanda(listaNoua, "   "); // Test respingere titlu gol
adaugaComanda(listaNoua, "Ayran rece", "bauturi"); // Test respingere categorie inexistentă