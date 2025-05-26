import { Routes, Route, BrowserRouter } from "react-router";
import PageButtons from "./pages/PageButtons";
import PageTables from "./pages/PageTables";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/buttons" element={<PageButtons />} />
        <Route path="/tables" element={<PageTables />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
