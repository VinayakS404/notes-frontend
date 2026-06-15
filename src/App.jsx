import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/HomeFolder/Home.jsx";
import AddNewNote from "./components/AddNewNote.jsx"
import Setting from "./components/Setting.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/add" element={<AddNewNote />}></Route>
      <Route path="/setting" element={<Setting />} ></Route>
    </Routes>
  );
}

export default App;
