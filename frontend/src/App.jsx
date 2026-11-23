import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ComenziPage from "./pages/ComenziPage.jsx";
import ComandaDetaliuPage from "./pages/ComandaDetaliuPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import MesePage from "./pages/MesePage.jsx";
import AngajatiPage from "./pages/AngajatiPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ComenziPage />} />
        <Route path="/acasa" element={<HomePage />} />
        <Route path="/mese" element={<MesePage />} />
        <Route path="/angajati" element={<AngajatiPage />} />
        <Route path="/comenzi/:id" element={<ComandaDetaliuPage />} />
        <Route path="/despre" element={<DesprePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}