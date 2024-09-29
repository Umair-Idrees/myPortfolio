import React from "react";
import Navbar from "./components/Navbar";
import { IntroSection } from "./components/Intro/IntroSection";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";

import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
