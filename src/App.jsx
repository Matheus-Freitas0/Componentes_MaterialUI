import { Routes, Route, BrowserRouter } from "react-router";
import PageButtons from "./pages/PageButtons";
import PageTables from "./pages/PageTables";
import PageHome from "./pages/PageHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/buttons" element={<PageButtons />} />
        <Route path="/tables" element={<PageTables />} />
        <Route path="*" element={<PageHome/>} />
        <Route path="/" element={<PageHome/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
