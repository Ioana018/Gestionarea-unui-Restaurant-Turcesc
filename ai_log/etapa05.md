# Stage 5: AI log

## Tools
- Gemini

## Conversations
- Managing local state in React using useState, immutable array updates (map and filter), controlled form components, accessible buttons, and switching light/dark themes via data-theme on html.

## Key requests
### 1. Local State & Events
- Asked: Implementarea completă a Etapei 5 conform ghidului universitar pentru Turkish Kebab.
- Got: Codul adaptat pentru App.jsx, ComandaList.jsx, ComandaCard.jsx și App.css, respectând cerințele de imutabilitate și accesibilitate.
- Changed or rejected: Păstrat denumirile specifice temei (comenzi, handleToggle, handleDelete, ComandaCard, ComandaList).

## What I learned / what did not work
Am învățat că valorile derivate nu trebuie ținute în state separat, că acțiunile pe butoane necesită funcții inline pentru a evita apelul la randare, și că tema se comută curat prin atributul data-theme pe elementul rădăcină.