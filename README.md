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

## Verification Table

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | README.md | read |
| S1-R2 | AI usage section | README.md | read |
| S1-R3 | AI log for stage 1 | ai-log/etapa-01.md | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html#L11-L71](URL_CATRE_COMMIT_GITHUB) | open the page |
| S1-R5 | finished card looks different | [style.css#L162-L165](URL_CATRE_COMMIT_GITHUB) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css#L178-L182](URL_CATRE_COMMIT_GITHUB) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css#L22-L33](URL_CATRE_COMMIT_GITHUB) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [Commit Link](URL_CATRE_COMMIT) | commit history |