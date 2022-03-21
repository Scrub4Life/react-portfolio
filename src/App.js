import React from "react";

// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App(data) {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
