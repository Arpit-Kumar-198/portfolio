import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import DSA from "./pages/DSA";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function SectionDivider() {
  return (
    <div className="mx-auto flex max-w-7xl items-center px-6 lg:px-8">
      <div className="h-px flex-1 bg-white/5" />
      <div className="mx-4 h-1 w-1 rounded-full bg-[#F5B82E]" />
      <div className="h-px flex-1 bg-white/5" />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#101114] text-white">
      <Navbar />
      <hr className="text-white"/>

      <main>
        <section id="home">
          <Home />
        </section>

        <SectionDivider />

        <section id="about">
          <About />
        </section>

        <SectionDivider />

        <section id="skills">
          <Skills />
        </section>

        <SectionDivider />

        <section id="projects">
          <Projects />
        </section>

        <SectionDivider />

        <section id="dsa">
          <DSA />
        </section>

        <SectionDivider />

        <section id="contact">
          <Contact />
        </section>
      </main>

      <hr className="text-white"/>
      <Footer />
    </div>
  );
}

export default App;