import React from "react";
import Header from '../src/components/header/Header'
import Nav from '../src/components/nav/Nav'
import About from '../src/components/about/About'
import Experience from '../src/components/experience/Experience'
import Projects from '../src/components/projects/Projects'
import Contact from '../src/components/contact/Contact'
import Footer from '../src/components/footer/Footer'
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Nav />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </>
    </div>
  );
}

export default App;
