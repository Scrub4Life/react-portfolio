import React from "react";
// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

function App(data) {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
