import { FaGithub, FaLinkedinIn, FaTwitter, FaDownload } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#101114] text-white">
      {/* Hero Section */}
      <main
        id="home"
        className="mx-auto flex min-h-[calc(100vh-85px)] max-w-7xl items-center px-6 py-16 lg:px-8"
      >
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <section className="order-2 lg:order-1">
            <p className="mb-4 text-4xl font-medium text-[#F5B82E]">Hello,</p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              I'm <span className="text-[#F5B82E]">Arpit Kumar</span>
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-gray-200 sm:text-3xl lg:text-4xl">
              Fullstack Developer
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
              I am a passionate fullstack developer who loves building modern,
              scalable and user-friendly web applications. I enjoy turning ideas
              into real-world products and continuously learning new
              technologies.
            </p>

            {/* Resume Button */}
            <a
              href="src/assets/arpit_resume.pdf"
              download
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#F5B82E] px-7 py-3.5 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#ffc94d] hover:shadow-xl hover:shadow-[#F5B82E]/20"
            >
              <FaDownload />
              Download My Resume
              <FiArrowRight />
            </a>

            {/* Social Icons */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.linkedin.com/in/arpit-fullstack-dev/"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F5B82E] text-[#F5B82E] transition-all duration-300 hover:bg-[#F5B82E] hover:text-black"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/Arpit-Kumar-198"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F5B82E] text-[#F5B82E] transition-all duration-300 hover:bg-[#F5B82E] hover:text-black"
              >
                <FaGithub />
              </a>

              <a
                href="https://x.com/ArpitKumar43185"
                aria-label="Twitter"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F5B82E] text-[#F5B82E] transition-all duration-300 hover:bg-[#F5B82E] hover:text-black"
              >
                <FaTwitter />
              </a>
            </div>
          </section>

          {/* Right Image */}
          <section className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              {/* Golden Glow */}
              <div className="absolute inset-0 rounded-full bg-[#F5B82E]/20 blur-3xl" />

              {/* Image Container */}
              <div className="relative flex h-72 w-72 items-end justify-center overflow-hidden rounded-full border-2 border-[#F5B82E] bg-[#18191d] sm:h-96 sm:w-96 lg:h-[480px] lg:w-[480px]">
                <img
                  src="src/assets/profile-img.jpeg"
                  alt="Arpit Kumar"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
