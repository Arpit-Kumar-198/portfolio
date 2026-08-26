import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaServer,
  FaLaptopCode,
  FaNetworkWired,
  FaTools,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiBootstrap,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiC,
  SiCplusplus,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building modern and responsive user interfaces",
      icon: FaLaptopCode,
      skills: [
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "JavaScript", icon: FaJs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Bootstrap", icon: SiBootstrap },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "React", icon: FaReact },
        { name: "Redux", icon: SiRedux },
        { name: "Next.js", icon: SiNextdotjs },
      ],
    },

    {
      title: "Backend Development",
      description: "Developing server-side applications and APIs",
      icon: FaServer,
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
      ],
    },

    {
      title: "Database",
      description: "Working with databases and data management",
      icon: FaDatabase,
      skills: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "SQL", icon: FaDatabase },
        { name: "MySQL", icon: SiMysql },
      ],
    },

    {
      title: "Programming & DSA",
      description: "Strengthening problem-solving and programming fundamentals",
      icon: FaCode,
      skills: [
        { name: "C", icon: SiC },
        { name: "C++", icon: SiCplusplus },
        { name: "Data Structures & Algorithms", icon: FaCode },
      ],
    },

    {
      title: "Computer Science Fundamentals",
      description: "Understanding core concepts of computer science",
      icon: FaNetworkWired,
      skills: [
        { name: "DBMS", icon: FaDatabase },
        { name: "Operating Systems", icon: FaLaptopCode },
        { name: "Computer Networks (Basics)", icon: FaNetworkWired },
      ],
    },
    {
      title: "Tools & Development",
      description: "Tools I use for development and version control",
      icon: FaTools,
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: FaGithub },
        { name: "VS Code", icon: VscVscode },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-[#101114] px-6 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#F5B82E]">
            What I Work With
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            My <span className="text-[#F5B82E]">Skills</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#F5B82E]" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400">
            A collection of technologies and computer science fundamentals that
            I use and continue to explore while building projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <div
                key={index}
                className={`group rounded-2xl border border-white/5 bg-[#18191d] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F5B82E]/40`}
              >
                {/* Category Header */}
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F5B82E]/10">
                    <CategoryIcon className="text-xl text-[#F5B82E]" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#101114] px-4 py-3 text-sm text-gray-300 transition-all duration-300 hover:border-[#F5B82E]/50 hover:bg-[#F5B82E]/5 hover:text-white"
                      >
                        <SkillIcon className="text-lg text-[#F5B82E]" />

                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-14 text-center">
          <p className="text-sm text-gray-500">
            Always learning, building and improving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
