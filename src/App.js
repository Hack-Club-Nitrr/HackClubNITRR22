// import "./App.scss";
import { About } from "./components/about/About";
import { Hero } from "./components/hero/Hero";
import { Projects } from "./components/project UI/Projects";
import Sponsers from "./components/pastSponsers/Sponsers";
function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Sponsers />
    </>
  );
}

export default App;
