import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./Index/Index";
import Criacao from "./Criacao/Criacao";
import Backup from "./Backup/Backup";

function RoutesApp() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/criacao-de-aplicativos" element={<Criacao />} />
        <Route path="/backup-em-nuvem" element={<Backup />} />
      </Routes>
    </HashRouter>
  );
}

export default RoutesApp;
