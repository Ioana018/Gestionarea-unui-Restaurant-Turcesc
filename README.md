# Turkish Kebab

Turkish Kebab is a kitchen management web application designed to monitor food orders and dish preparation workflows across different kitchen stations.

## Data model

| Field | Type | Notes |
| --- | --- | --- |
| titlu | text | required, dish name, max 100 characters |
| gata | boolean | toggled via checkbox, default false (in preparation) |
| zona | fixed values | grill, cuptor, desert |
| categorie | relation | Kebab, Pide, Meze, Deserturi |
| ospatar | relation | waiter assigned to the order (from week 11) |

Sample records:
1. Adana Kebab cu ardei copt, false (in preparation), grill
2. Pide cu vită și cașcaval (Kashar), true (ready), cuptor
3. Künefe cu fistic de Antep, false (in preparation), desert

## AI usage

| Tool | Used for |
| --- | --- |
| Gemini | Semantic HTML/CSS structure, responsive grid layout, JavaScript business logic, React component decomposition (ComandaCard, ComandaList), local state management with useState, and light/dark theme switching |

AI session logs for each stage are tracked in the `ai_log/` directory.

## How to run

### Stage 1 & Stage 2 (Static mockup)
Open the HTML files inside the `mockup/` directory directly in a browser or serve them using the VS Code Live Server extension.

### Stage 3, Stage 4 & Stage 5 (React + Vite SPA)
Ensure Node.js is installed on your machine, then run in terminal:
```bash
cd frontend
npm install
npm run dev