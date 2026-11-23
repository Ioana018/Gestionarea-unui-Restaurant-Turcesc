# Stage 8: AI log

## Tools
- Gemini

## Conversations
- Implementing client-side routing with React Router (`BrowserRouter`, `Routes`, `Route`, `Outlet`, `NavLink`, `Link`, `useParams`), creating the detail page (`/comenzi/:id`), about page (`/despre`), and 404 page (`*`), refactoring component styles into CSS Modules (`.module.css`), and integrating the original mockup pages (`HomePage`, `MesePage`, `AngajatiPage`) and visual palette.

## Key requests
### 1. Client-Side Routing & Shared Layout
- Asked: Configurarea `BrowserRouter` în `main.jsx`, crearea componentei `Layout.jsx` cu `NavLink` și `Outlet`, și definirea rutelor în `App.jsx`.
- Got: Implementarea navigării fără reîncărcarea paginii, marcarea automată a linkului activ prin `NavLink` (cu atributul `end` pe ruta `/`) și păstrarea comutatorului de temă (Light/Dark Mode) în antet.
- Changed or rejected: Extinderea meniului din antet cu paginile din mockup (`/acasa`, `/mese`, `/angajati`), păstrând lista de comenzi pe ruta `/` și detaliul pe `/comenzi/:id` pentru conformitatea cu `tw.json`.

### 2. Detail Page & Error Handling
- Asked: Implementarea paginii `ComandaDetaliuPage.jsx` folosind `useParams()` și `fetchComanda(id)`.
- Got: Încărcarea datelor unei singure comenzi de la server, afișarea detaliilor (zonă bucătărie, status, ID) și tratarea cazului în care ID-ul nu există (`404`).
- Changed or rejected: Omiterea apelurilor `setLoading(true)` / `setError(null)` la începutul `useEffect` pentru a respecta regula ESLint `react-hooks/set-state-in-effect`.

### 3. Refactoring Styles to CSS Modules & Mockup Integration
- Asked: Mutarea stilurilor pe componente în fișiere `.module.css`, păstrarea stilurilor comune în `index.css` și integrarea designului din mockup-ul inițial (culori crem/roșu/galben Canva și paginile pentru Acasă, Mese și Angajați).
- Got: Crearea modulelor CSS pentru toate componentele și paginile (`Layout`, `ComandaCard`, `ComandaList`, `ComandaForm`, `ComenziPage`, `ComandaDetaliuPage`, `HomePage`, `MesePage`, `AngajatiPage`), mutarea imaginilor `kebab-hero.png` și `mese.png` în `public/` și ajustarea grilei meselor (4 sus, 3 jos).
- Changed or rejected: Păstrarea tuturor atributelor `data-testid` din Etapa 7 și adăugarea celor noi din Etapa 8 (`nav`, `item-link`, `detail`, `detail-title`, `not-found`).

## What I learned / what did not work
- Am înțeles diferența dintre navigarea clasică prin `<a href>` și navigarea client-side prin `<Link to>` și `<NavLink to>`, fără pierderea stării aplicației.
- Am învățat să folosesc `useParams()` pentru a citi parametri dinamici din adresă și să tratez răspunsurile `404` pentru resurse inexistente.
- Am organizat stilurile izolat pe componente cu CSS Modules (`styles.numeClasa`) și am transformat modalele statice `:target` din mockup în stare reactivă (`useState`) în React.