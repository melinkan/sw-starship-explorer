import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Particles } from "./components";
import { StarshipsProvider } from "./contexts/StarshipsContext";
import { Home } from "./routes/Home";
import { Detail } from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <StarshipsProvider>
        <Particles />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="starships/:name" element={<Detail key={"detail"} />} />
        </Routes>
      </StarshipsProvider>
    </BrowserRouter>
  );
}

export default App;
