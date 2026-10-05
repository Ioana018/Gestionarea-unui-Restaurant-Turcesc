# Turkish Kebab

Turkish Kebab is a kitchen management web application designed to track food orders and dishes across restaurant preparation stations.

## Data model

| Field | Type | Notes |
| --- | --- | --- |
| dish_name | text | required, max 100 chars |
| is_ready | boolean | toggled from the list, default false (in preparation) |
| station | fixed values | grill, cuptor, desert |
| category | relation | Kebab, Pide, Meze, Deserturi |
| waiter | relation | the employee who took the order (from week 11) |

Sample data used across all stages:
1. Adana Kebab cu ardei copt, active, grill
2. Pide cu vită și cașcaval (Kashar), done, cuptor
3. Künefe cu fistic de Antep, active, desert

## AI usage

| Tool | Used for |
| --- | --- |
| Gemini | Semantic HTML structuring, responsive 2-column Grid layout, Turkish kebab thematic styling and color palette |

Details per stage: see the `ai-log/` folder.

## How to run
Open `index.html` in a browser. No build step, no server.

## Status
- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript

