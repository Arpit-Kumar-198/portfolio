import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaLightbulb,
  FaBrain,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#101114] px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#F5B82E]">
            Get To Know Me
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            About <span className="text-[#F5B82E]">Me</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#F5B82E]" />
        </div>

        {/* Main Content */}
        <div className="grid items-start gap-14 lg:grid-cols-2">

          {/* Left - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">

              {/* Golden Glow */}
              <div className="absolute inset-0 rounded-3xl bg-[#F5B82E]/10 blur-3xl" />

              {/* Image */}
              <div className="relative h-[380px] w-[300px] overflow-hidden rounded-3xl border border-white/10 bg-[#18191d] sm:h-[450px] sm:w-[350px]">
                <img
                  src="src/assets/profile.jpeg"
                  alt="Arpit Kumar"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Decorative Box */}
              <div className="absolute -bottom-5 -right-5 -z-0 h-24 w-24 rounded-2xl border-2 border-[#F5B82E]" />
            </div>
          </div>

          {/* Right - About Content */}
          <div>
            <h3 className="text-3xl font-bold sm:text-4xl">
              I'm <span className="text-[#F5B82E]">Arpit Kumar</span>
            </h3>

            <h4 className="mt-3 text-xl font-semibold text-gray-300">
              Fullstack Developer & Computer Science Student
            </h4>

            <p className="mt-6 leading-8 text-gray-400">
              I am a Computer Science student and passionate Fullstack
              Developer who enjoys building modern, scalable and
              user-friendly web applications. I love turning ideas into
              functional products and solving real-world problems through
              technology.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              My journey in development started with learning programming
              fundamentals and gradually grew into exploring frontend,
              backend and database technologies. I enjoy building projects
              that challenge me to learn something new and improve my
              understanding of software development.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              Currently, I am also exploring{" "}
              <span className="font-medium text-[#F5B82E]">
                Generative AI
              </span>{" "}
              and learning how to integrate AI capabilities into modern
              fullstack applications. I am particularly interested in
              building practical applications that combine fullstack
              development with emerging AI technologies.
            </p>

            {/* Education & Focus Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {/* Education */}
              <div className="rounded-xl border border-white/5 bg-[#18191d] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#F5B82E]/40">
                <div className="flex items-start gap-4">
                  <FaGraduationCap className="mt-1 text-2xl text-[#F5B82E]" />

                  <div>
                    <p className="text-sm text-gray-500">
                      Education
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      B.Tech in Computer Science
                    </p>

                    <p className="mt-1 text-sm text-gray-400">
                      ABES Engineering College
                    </p>
                  </div>
                </div>
              </div>

              {/* CGPA */}
              <div className="rounded-xl border border-white/5 bg-[#18191d] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#F5B82E]/40">
                <div className="flex items-start gap-4">
                  <FaLaptopCode className="mt-1 text-2xl text-[#F5B82E]" />

                  <div>
                    <p className="text-sm text-gray-500">
                      Academic Performance
                    </p>

                    <p className="mt-1 text-2xl font-bold text-white">
                      8.425
                    </p>

                    <p className="text-sm text-gray-400">
                      CGPA / 10
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Areas of Interest */}
            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
                Currently Focused On
              </p>

              <div className="flex flex-wrap gap-3">

                <span className="flex items-center gap-2 rounded-full border border-white/10 bg-[#18191d] px-4 py-2 text-sm text-gray-300 transition-colors hover:border-[#F5B82E]/50">
                  <FaCode className="text-[#F5B82E]" />
                  Fullstack Development
                </span>

                <span className="flex items-center gap-2 rounded-full border border-white/10 bg-[#18191d] px-4 py-2 text-sm text-gray-300 transition-colors hover:border-[#F5B82E]/50">
                  <FaBrain className="text-[#F5B82E]" />
                  Generative AI
                </span>

                <span className="flex items-center gap-2 rounded-full border border-white/10 bg-[#18191d] px-4 py-2 text-sm text-gray-300 transition-colors hover:border-[#F5B82E]/50">
                  <FaLightbulb className="text-[#F5B82E]" />
                  Problem Solving
                </span>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-24 grid grid-cols-2 gap-5 md:grid-cols-4">

          {/* Coding Problems */}
          <div className="rounded-2xl border border-white/5 bg-[#18191d] p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#F5B82E]/40">
            <h3 className="text-3xl font-bold text-[#F5B82E]">
              700+
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Coding Problems
            </p>
          </div>

          {/* Projects */}
          <div className="rounded-2xl border border-white/5 bg-[#18191d] p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#F5B82E]/40">
            <h3 className="text-3xl font-bold text-[#F5B82E]">
              10+
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Projects Built
            </p>
          </div>

          {/* Technologies */}
          <div className="rounded-2xl border border-white/5 bg-[#18191d] p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#F5B82E]/40">
            <h3 className="text-3xl font-bold text-[#F5B82E]">
              Fullstack
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Development Focus
            </p>
          </div>

          {/* AI */}
          <div className="rounded-2xl border border-white/5 bg-[#18191d] p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#F5B82E]/40">
            <h3 className="text-3xl font-bold text-[#F5B82E]">
              GEN-AI
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Currently Learning
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;