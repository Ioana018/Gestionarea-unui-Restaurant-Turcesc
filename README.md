# Turkish Kebab - Dashboard Monitorizare Comenzi

Aplicație web pentru gestionarea și monitorizarea în timp real a preparatelor și a fluxului de lucru dintr-un restaurant turcesc.

---

## 🚀 Despre Proiect
Această aplicație este dezvoltată în cadrul parcurgerii etapelor de laborator/proiect. Interfața permite vizualizarea comenzilor active și finalizate, marcarea preparatelor ca fiind gata, ștergerea comenzilor și schimbarea temei vizuale (Light/Dark mode). Datele sunt încărcate asincron dintr-un server API mock (`json-server`).

---

## 🛠️ Tehnologii Utilizate
- **React 19** (Vite, JSX)
- **CSS3** (Variabile CSS, Responsive Design, Dark/Light Theme)
- **JSON-Server** (Mock REST API pe portul `3001`)
- **Git & GitHub** (Versionare și jurnale AI)

---

## 📦 Instalare și Rulare Locală

### 1. Clonarea repozitoriului și instalarea dependențelor
```powershell
git clone <link-repo-github>
cd "Restaurant turcesc/frontend"
npm install
### Stage 7: form and validation
Orders can be added directly from the page. The form is controlled and validated, and every change (add, toggle, delete) goes to the API before updating the list.

## Checklist
- [x] Stage 1: Setup & Initialization
- [x] Stage 2: Component Architecture
- [x] Stage 3: State & Interactivity
- [x] Stage 4: Advanced Styling & Dark Mode
- [x] Stage 5: Theme Toggle & Persistence
- [x] Stage 6: Async Data Fetching (Mock API)
- [x] Stage 7: Form and validation