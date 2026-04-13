import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./components/HomePage";
import Note from "./components/Note";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/note" element={<Note />}></Route>
    </Routes>
  );
}

export default App;
