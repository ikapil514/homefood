import React from "react";
import Herobox from "./components/navi";
import { Route, Routes } from "react-router-dom";
import Breakfast from "./components/breakfast";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Herobox />}></Route>
      <Route path="/breakfast" element={<Breakfast />}></Route>
    </Routes>
  );
}

export default App;
