import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/HomeFolder/Home.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
