import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import DSA from "./pages/DSA";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Home />
      <About />
      <Skills />
      <Projects />
      <DSA />
      <Contact />
    </>
  );
}

export default App;
