import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";
import CharaDetails from "./components/CharaDetails";
import { Routes, Route } from "react-router-dom";

import "./assets/styles.css";
import "./assets/item.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Details" element={<Details />}>
        <Route path=":charaId" element={<CharaDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
