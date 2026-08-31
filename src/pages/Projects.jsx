import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import dailyToolkit from "../assets/projects/daily-toolkit.png";
import imageStore from "../assets/projects/image-store.png";
import miniAI from "../assets/projects/mini-ai.png";
const Projects = () => {
  const projects = [
    {
      title: "Next.js AI Practice",
      description:
        "A simple AI-powered application built with Next.js to practice Generative AI integration using the Google Gemini API.",
      image: miniAI,
      status: "Completed",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Google Gemini API",
        "React Markdown",
        "KaTeX",
      ],
      highlights: [
        "Generative AI integration",
        "Google Gemini API",
        "Markdown and LaTeX rendering",
      ],
      liveLink: "https://mini-ai-omega.vercel.app/",
      githubLink: "https://github.com/Arpit-Kumar-198/mini-ai",
    },
    {
      title: "Image Store",
      description:
        "A full-stack image sharing application where users can upload images with captions, view posts, and delete posts.",
      image: imageStore,
      status: "Completed",
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "ImageKit",
      ],
      highlights: [
        "Image upload with preview",
        "REST API integration",
        "MERN stack deployment",
      ],
      liveLink: "https://image-store-two.vercel.app/",
      githubLink: "https://github.com/Arpit-Kumar-198/image-store",
    },
    {
      title: "Daily Toolkit",
      description:
        "A collection of useful everyday web applications including a weather dashboard, expense tracker, calculator and notes app.",
      image: dailyToolkit,
      status: "Completed",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      highlights: [
        "Weather dashboard",
        "Expense tracker",
        "Notes and calculator",
      ],
      liveLink: "https://arpit-kumar-198.github.io/Daily-Toolkit/",
      githubLink: "https://github.com/Arpit-Kumar-198/Daily-Toolkit",
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-[#101114] px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#F5B82E]">
            What I've Built
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            My <span className="text-[#F5B82E]">Projects</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#F5B82E]" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400">
            A selection of projects I've built while learning and exploring
            fullstack development, computer science and emerging technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#18191d] transition-all duration-300 hover:-translate-y-2 hover:border-[#F5B82E]/40"
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden bg-[#101114]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Status */}
                <span className="absolute right-4 top-4 rounded-full border border-[#F5B82E]/30 bg-[#101114]/90 px-3 py-1 text-xs font-medium text-[#F5B82E] backdrop-blur-sm">
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[#F5B82E]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full border border-white/10 bg-[#101114] px-3 py-1 text-xs text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mt-5 space-y-2">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div
                      key={highlightIndex}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <FaArrowRight className="mt-1 shrink-0 text-xs text-[#F5B82E]" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-3 pt-7">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#F5B82E] px-4 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#ffc94d]"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-[#F5B82E]/50 hover:text-white"
                  >
                    <FaGithub className="text-base" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm text-gray-500">
            More projects and experiments are available on my GitHub.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
