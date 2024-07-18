import "./styles.css";
import Create from "./Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./Read";
import Update from "./Update";

function App() {
  return (
    <>
      <h1 className="tags">Crud Operations </h1>
      <br />
      <br />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/read" element={<Read />}></Route>
          <Route exact path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
