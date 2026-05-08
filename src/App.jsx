import React from "react";
import "./styles/global.css";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Work from "./components/sections/Work";
import Experience from "./components/sections/Experience";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Services />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}

export default App;
