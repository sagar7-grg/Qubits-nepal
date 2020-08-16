import React from "react";

import "./App.css";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

import Services from "./pages/Services";
import Team from "./pages/Team";
import Portfolio from "./pages/Portfolio";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import GlobalProvider from "./context/GlobalProvider";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <GlobalProvider>
        <Navbar />

        <Element name="Home">
          <Home />
        </Element>
        <Element name="About">
          <About />
        </Element>
        <Element name="Services">
          <Services />
        </Element>
        <Element name="Team">
          <Team />
        </Element>
        <Element name="Blog">
          <Blog />
        </Element>
        <Projects />
        <Element name="Portfolio">
          <Portfolio />
        </Element>

        <Element name="Contact">
          <Contact />
        </Element>
      </GlobalProvider>
    </>
  );
}

export default App;
