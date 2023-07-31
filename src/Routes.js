import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./Index/Index";
import Criacao from "./Criacao/Criacao";
import Backup from "./Backup/Backup";

function RoutesApp() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/criacao-de-aplicativos" element={<Criacao />} />
        <Route exact path="/backup-em-nuvem" element={<Backup />} />
      </Routes>
    </HashRouter>
  );
}

export default RoutesApp;
