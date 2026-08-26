import { useState } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-[#101114] text-white">
      {/* Navbar */}
      <header className="border-b border-white/5">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          {/* Logo */}
          <a href="#home" className="text-3xl font-bold text-[#F5B82E]">
            AK
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 md:flex">
            <a href="#home" className="transition-colors hover:text-[#F5B82E]">
              Home
            </a>
            <a href="#about" className="transition-colors hover:text-[#F5B82E]">
              About
            </a>

            <a
              href="#skills"
              className="transition-colors hover:text-[#F5B82E]"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="transition-colors hover:text-[#F5B82E]"
            >
              Projects
            </a>

            <a href="#dsa" className="transition-colors hover:text-[#F5B82E]">
              DSA
            </a>
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition-all hover:bg-[#F5B82E] hover:shadow-lg hover:shadow-[#F5B82E]/20 md:flex"
          >
            Contact Me <FiArrowRight />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-white/5 px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#F5B82E]"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#F5B82E]"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#F5B82E]"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#F5B82E]"
              >
                Projects
              </a>

              <a
                href="#dsa"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#F5B82E]"
              >
                DSA
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="w-fit rounded-full bg-white px-6 py-3 font-semibold text-black"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
export default Navbar;
