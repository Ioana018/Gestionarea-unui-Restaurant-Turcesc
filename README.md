## Stage 8: routing and detail page
Multi-page Single Page Application behind React Router: the kitchen orders list (`/`), a detail page at `/comenzi/:id`, the presentation home page (`/acasa`), table reservations (`/mese`), staff management (`/angajati`), an about page (`/despre`), and a 404 page (`*`). Component styles are isolated in CSS Modules (`.module.css`), while shared theme variables and utility classes remain in `index.css`.

## Status
- [x] Stage 1: Setup & Initialization
- [x] Stage 2: Component Architecture
- [x] Stage 3: State & Interactivity
- [x] Stage 4: Advanced Styling & Dark Mode
- [x] Stage 5: Theme Toggle & Persistence
- [x] Stage 6: data from a mock API
- [x] Stage 7: form and validation
- [x] Stage 8: routing and detail page
- [ ] Stage 9: own backend with Express

## Stage 8 Verification Table

| ID | Requirement | Where | How to check |
| :--- | :--- | :--- | :--- |
| **S8-R1** | header navigation changes page without reload | `frontend/src/App.jsx`, `frontend/src/components/Layout.jsx` | click links, watch Network[cite: 14] |
| **S8-R2** | click on an item opens its detail page | `frontend/src/components/ComandaCard.jsx`, `frontend/src/pages/ComandaDetaliuPage.jsx` | click a title[cite: 14] |
| **S8-R3** | refresh on the detail URL works; missing id shows an error | `frontend/src/pages/ComandaDetaliuPage.jsx` | refresh `/comenzi/1`, open `/comenzi/999`[cite: 14] |
| **S8-R4** | unknown URL shows the app 404 page | `frontend/src/App.jsx` (`path="*"`), `frontend/src/pages/NotFoundPage.jsx` | open `/ceva`[cite: 14] |
| **S8-R5** | each component has its `.module.css`; `index.css` only shared styles | `frontend/src/components`, `frontend/src/pages`, `frontend/src/index.css` | read[cite: 14] |
| **S8-R6** | `data-testid` attributes from tables 7.3 and 8.2; detail route `/<resource>/:id` | `Layout.jsx`, `ComandaCard.jsx`, `ComandaDetaliuPage.jsx`, `NotFoundPage.jsx` | `querySelector` in the console[cite: 14] |
| **S8-R7** | README Stage 8 section + AI log | `README.md`, `ai_log/etapa08.md` | read[cite: 14] |
| **S8-R8** | commit "Stage 8" pushed | commit history | commit history[cite: 14] |