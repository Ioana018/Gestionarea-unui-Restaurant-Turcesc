# Stage 4: AI log

## Tools
- Gemini

## Conversations
- Decomposing the UI into reusable React components (ComandaCard, ComandaList), passing data via props, rendering arrays with map and key, and handling conditional rendering.

## Key requests
### 1. Components & Props
- Asked: Implementarea Etapei 4 conform ghidului universitar pentru tema Turkish Kebab.
- Got: Structura folderului components/, componentele ComandaCard și ComandaList, înlocuirea blocului JSON în App.jsx și stilizarea listei.
- Changed or rejected: Păstrat denumirile specifice temei (ComandaCard, ComandaList, comenzi, zona grill/cuptor/desert) conform tabelului de adaptare.

## What I learned / what did not work
Am învățat modul de transmitere a datelor prin props de la părinte la copil, necesitatea cheii unice `key` derivate din id-ul stabil al elementului și tehnica de randare timpurie pentru cazul de listă goală.