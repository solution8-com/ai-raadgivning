import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Ydelser from "./pages/Ydelser";
import Afdelinger from "./pages/Afdelinger";
import Afdeling from "./pages/Afdeling";
import Cases from "./pages/Cases";
import OmOs from "./pages/OmOs";
import Artikler from "./pages/Artikler";
import Book from "./pages/Book";
import Kontakt from "./pages/Kontakt";
import Tilgaengelighed from "./pages/Tilgaengelighed";
import Privatliv from "./pages/Privatliv";
import Handelsbetingelser from "./pages/Handelsbetingelser";
import NotFound from "./pages/NotFound";

const App = () => (
  <>
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/ydelser" element={<Ydelser />} />
        <Route path="/afdelinger" element={<Afdelinger />} />
        <Route path="/afdelinger/:slug" element={<Afdeling />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/om-os" element={<OmOs />} />
        <Route path="/artikler" element={<Artikler />} />
        <Route path="/book" element={<Book />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/tilgaengelighed" element={<Tilgaengelighed />} />
        <Route path="/privatlivspolitik" element={<Privatliv />} />
        <Route path="/handelsbetingelser" element={<Handelsbetingelser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
