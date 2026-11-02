# Stage 2: AI log

## Tools
- Gemini

## Conversations
- Decomposing the monolithic UI into modular React components (Header, OrderList/ComandaList, OrderCard/ComandaCard, StatusBadge). Passing data down via props and mapping arrays of mock domain data into dynamic component trees.

## Key requests
### 1. Component Architecture & Props
- Asked: Structurarea aplicației în componente modulare Reutilizabile și transmiterea datelor despre comenzile din restaurant prin props.
- Got: Crearea folderului `src/components/` și definirea componentelor `ComandaList.jsx`, `ComandaCard.jsx` și `StatusBadge.jsx`.
- Changed or rejected: Păstrarea numelor de props explicite (`comanda`, `onToggle`, `onDelete`) pentru o lizibilitate mai bună a fluxului de date.

### 2. Static Mock Data Mapping
- Asked: Afișarea listei de preparate (Adana Kebab, Pide, Künefe etc.) folosind un tablou estatic de obiecte și metoda `.map()`.
- Got: Exemplul de date mock din starea inițială și randarea dinamică a cardurilor de comenzi cu chei unice (`key={comanda.id}`).
- Changed or rejected: Utilizarea badge-urilor colorate specifice zonelor de preparare (grill, cuptor, desert) directe în interfață.

## What I learned / what did not work
- Am învățat cum se descompune o interfață în componente mici, reutilizabile, cu responsabilități unice (Single Responsibility Principle).
- Am înțeles modul de transmitere a datelor de la componenta părinte (`App`) către componentele fiice prin `props`.
- Am rezolvat avertismentele de React privind lipsa proprietății `key` la randarea listelor prin adăugarea ID-ului unic pentru fiecare element din tablou.