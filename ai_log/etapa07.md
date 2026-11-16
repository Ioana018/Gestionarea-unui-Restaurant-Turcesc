# Stage 7: AI log

## Tools
- Gemini

## Conversations
- Implementing a controlled form component (ComandaForm) with client-side validation (required title, max 100 characters) and double-submit protection. Moving add, toggle, and delete operations to the mock REST API (POST, PATCH, DELETE) via a shared request helper in api.js, and adding data-testid attributes plus tw.json for automated testing.

## Key requests
### 1. Shared API Request Helper & CRUD Functions
- Asked: Extinderea `src/api.js` cu o funcție comună `request()` și metodele `createComanda`, `updateComanda` și `deleteComanda`.
- Got: Implementarea `request()` cu gestionarea antetului JSON, verificarea `res.ok` și tratarea răspunsurilor `204 No Content`.
- Changed or rejected: Adaptarea rutelor pe resursa `/comenzi`.

### 2. Controlled Form & Server-First Mutations
- Asked: Crearea `ComandaForm.jsx` și legarea operațiilor POST, PATCH și DELETE în `App.jsx`.
- Got: Formular controlat cu validare locală, dezactivarea butonului în timpul trimiterii (`trimite`), păstrarea datelor la eroare și actualizarea listei doar cu răspunsul serverului.
- Changed or rejected: Păstrarea funcționalității de comutare a temei (Light/Dark Mode) și actualizarea stilurilor din `App.css` pentru layout-ul pe două coloane.

### 3. Automated Testing Setup (`tw.json` & `data-testid`)
- Asked: Configurarea reperelelor pentru verificarea automată.
- Got: Crearea fișierului `tw.json` în rădăcina repository-ului și adăugarea atributelor `data-testid` pe formular, câmpuri, butoane și carduri.
- Changed or rejected: Nicio modificare; atributele au fost aplicate exact conform tabelului de specificații.

## What I learned / what did not work
- Am învățat să construiesc un formular controlat în React folosind `value` și `onChange`, oprind reîncărcarea paginii cu `e.preventDefault()`.
- Am înțeles principiul „întâi serverul, apoi state-ul” astfel încât elementele noi să primească ID-ul generat de backend și să persiste la reîncărcarea paginii.
- Am rezolvat eroarea de import lipsă (`export default`) la crearea componentei noi și am refăcut regulile CSS pentru layout-ul pe două coloane.