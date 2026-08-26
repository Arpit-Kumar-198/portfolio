import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-[#101114] text-white">
      {/* Navbar */}
      <header className="border-b border-white/5">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          {/* Logo */}
          <Link to="/home" className="text-3xl font-bold text-[#F5B82E]">
            AK
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 md:flex">
            <Link to="/home" className="transition-colors hover:text-[#F5B82E]">
              Home
            </Link>
            <Link
              to="/about"
              className="transition-colors hover:text-[#F5B82E]"
            >
              About
            </Link>

            <Link
              to="/skills"
              className="transition-colors hover:text-[#F5B82E]"
            >
              Skills
            </Link>

            <Link
              to="/projects"
              className="transition-colors hover:text-[#F5B82E]"
            >
              Projects
            </Link>

            <Link to="/dsa" className="transition-colors hover:text-[#F5B82E]">
              DSA
            </Link>
          </div>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition-all hover:bg-[#F5B82E] hover:shadow-lg hover:shadow-[#F5B82E]/20 md:flex"
          >
            Contact Me <FiArrowRight />
          </Link>

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
              <Link
                to="/home"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#F5B82E]"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#F5B82E]"
              >
                About
              </Link>

              <Link
                to="/skills"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#F5B82E]"
              >
                Skills
              </Link>

              <Link
                to="/projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#F5B82E]"
              >
                Projects
              </Link>

              <Link
                to="/dsa"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#F5B82E]"
              >
                DSA
              </Link>

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="w-fit rounded-full bg-white px-6 py-3 font-semibold text-black"
              >
                Contact Me
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
export default Navbar;
