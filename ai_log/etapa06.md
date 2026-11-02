# Stage 6: AI log

## Tools
- Gemini

## Conversations
- Transitioning local application state to a mock REST API using json-server. Setting up asynchronous data fetching with useEffect, async/await, and fetch in an isolated api.js module using environment variables (VITE_API_URL). Handling loading, success, and explicit error states in React.

## Key requests
### 1. Mock API & Infrastructure Setup
- Asked: Configurararea json-server v0.17.4, scriptul npm run api pe portul 3001, fișierul db.json cu datele specifice restaurantului turcesc și variabila de mediu VITE_API_URL.
- Got: Structura corectă pentru package.json, db.json (5 comenzi specifice), .env.example și api.js.
- Changed or rejected: Păstrarea numelui resursei `comenzi` și a metodei `fetchComenzi()` pentru alinierea la domeniul Turkish Kebab.

### 2. React State & Fetching Logic
- Asked: Integrarea stărilor de loading și error în App.jsx cu un efect curățat (ignore flag).
- Got: Codul actualizat pentru App.jsx cu stări de useState, bloc try-catch-finally în useEffect și afișarea condiționată a mesajelor pe interfață.
- Changed or rejected: Păstrarea funcției de schimbare a temei (light/dark mode) implementată la Etapa 5.

## What I learned / what did not work
- Am învățat cum se gestionează stările asincrone (loading, success, error) la montarea unei componente în React folosind useEffect.
- Am înțeles rolul fanionului `ignore` în funcția de curățare a efectului pentru a preveni actualizarea stării după demontarea componentei.
- Am rezolvat eroarea de conectare (`ERR_CONNECTION_REFUSED` / `Failed to fetch`) prin rularea celor două servere în paralel în terminale separate (`npm run api` și `npm run dev`).