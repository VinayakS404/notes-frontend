import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/HomeFolder/Home.jsx";
import AddNewNote from "./components/AddNewNote.jsx"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/edit" element={<AddNewNote />}></Route>
    </Routes>
  );
}

export default App;
