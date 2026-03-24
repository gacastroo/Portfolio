import React from "react";
import "./styles/global.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Work from "./components/sections/Work";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Work />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
