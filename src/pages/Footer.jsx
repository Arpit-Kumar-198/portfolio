import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#101114] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* Bottom Section */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          {/* Message + Copyright */}
          <div>
            <p className="text-sm text-gray-400">
              Thanks for taking the time to visit my portfolio.
            </p>

            <p className="mt-2 text-xs text-gray-600">
              © {new Date().getFullYear()} Arpit Kumar. All rights reserved.
            </p>
          </div>

          {/* Back To Top */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex w-fit items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-[#F5B82E]"
          >
            Back to top

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#F5B82E] group-hover:bg-[#F5B82E] group-hover:text-black">
              <FiArrowUp />
            </span>
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;