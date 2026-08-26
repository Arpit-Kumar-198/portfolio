import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaArrowRight,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const contactOptions = [
    {
      title: "Email",
      description: "For professional inquiries and opportunities",
      value: "arpitkumar19842@gmail.com",
      icon: FaEnvelope,
      link: "mailto:arpitkumar19842@gmail.com",
    },
    {
      title: "LinkedIn",
      description: "Let's connect professionally",
      value: "linkedin.com/in/arpit-fullstack-dev/",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/arpit-fullstack-dev/",
    },
    {
      title: "GitHub",
      description: "Explore my projects and code",
      value: "github.com/Arpit-Kumar-198",
      icon: FaGithub,
      link: "https://github.com/Arpit-Kumar-198",
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-[#101114] px-6 py-24 text-white lg:px-8"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#F5B82E]">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Let's <span className="text-[#F5B82E]">Connect</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#F5B82E]" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400">
            I'm always open to discussing new opportunities, interesting
            projects, collaborations, or simply connecting with fellow
            developers.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-5 md:grid-cols-3">

          {contactOptions.map((option, index) => {
            const Icon = option.icon;

            return (
              <a
                key={index}
                href={option.link}
                target={option.title === "Email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/5 bg-[#18191d] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#F5B82E]/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5B82E]/10">
                  <Icon className="text-xl text-[#F5B82E]" />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {option.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {option.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-gray-400 transition-colors group-hover:text-[#F5B82E]">
                  <span className="truncate">
                    {option.value}
                  </span>

                  <FaArrowRight className="shrink-0 text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </a>
            );
          })}

        </div>

        {/* Main CTA */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-[#F5B82E]/20 bg-[#18191d] p-8 text-center sm:p-10">

          {/* Glow */}
          <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-[#F5B82E]/10 blur-3xl" />

          <div className="relative">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#F5B82E]/10">
              <FaPaperPlane className="text-xl text-[#F5B82E]" />
            </div>

            <h3 className="mt-6 text-2xl font-bold sm:text-3xl">
              Have an opportunity in mind?
            </h3>

            <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-400">
              Whether it's a fullstack role, collaboration, or an interesting
              project, feel free to reach out. I'd be happy to connect.
            </p>

            <a
              href="mailto:arpit19842@gmail.com"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#F5B82E] px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-[#ffc94d] hover:-translate-y-0.5"
            >
              <FaEnvelope />
              Send Me an Email
            </a>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-14 text-center">
          <p className="text-sm text-gray-500">
            Thanks for taking the time to visit my portfolio.
          </p>

          <p className="mt-2 text-xs text-gray-600">
            © {new Date().getFullYear()} Arpit Kumar. All rights reserved.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;