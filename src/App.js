// import "./App.scss";
import React from 'react';
import { About } from "./components/about/About";
import { Hero } from "./components/hero/Hero";
import { Projects } from "./components/project UI/Projects";
function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects/>
    </>
  );
}

export default App;
