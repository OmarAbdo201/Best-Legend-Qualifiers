import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tournament from "./pages/Tournament";
import TournamentProvider from "./context/TournamentContext";

function App() {
  return (
    <TournamentProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tournament" element={<Tournament />} />
      </Routes>
    </TournamentProvider>
  );
}

export default App;
