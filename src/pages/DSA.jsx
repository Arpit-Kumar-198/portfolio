import {
  FaCode,
  FaExternalLinkAlt,
  FaTrophy,
  FaChartLine,
} from "react-icons/fa";

import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";

const DSA = () => {
  const platforms = [
    {
      name: "LeetCode",
      icon: SiLeetcode,
      problems: "300+",
      rating: "1650",
      label: "Contest Rating",
      profile: "https://leetcode.com/u/Arpit_kumar198/",
    },
    {
      name: "CodeChef",
      icon: SiCodechef,
      problems: "400+",
      rating: "1507",
      label: "Contest Rating",
      profile: "https://www.codechef.com/users/binary_dreamer",
    },
    {
      name: "Codeforces",
      icon: SiCodeforces,
      problems: "20+",
      rating: "639",
      label: "Contest Rating",
      profile: "https://codeforces.com/profile/Arpit_Kumar_05",
    },
  ];

  return (
    <section id="dsa" className="scroll-mt-20 bg-[#101114] px-6 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#F5B82E]">
            Problem Solving
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            DSA &{" "}
            <span className="text-[#F5B82E]">Competitive Programming</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#F5B82E]" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400">
            Consistently solving problems across multiple competitive
            programming platforms to strengthen problem-solving and algorithmic
            thinking.
          </p>
        </div>

        {/* Total Problems Card */}
        <div className="mx-auto mb-10 max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-[#F5B82E]/20 bg-[#18191d] p-8 text-center">
            {/* Glow */}
            <div className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-[#F5B82E]/10 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#F5B82E]/10">
                <FaTrophy className="text-2xl text-[#F5B82E]" />
              </div>

              <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-gray-500">
                Total Problems Solved
              </p>

              <h3 className="mt-2 text-5xl font-bold text-[#F5B82E] sm:text-6xl">
                700+
              </h3>

              <p className="mt-3 text-sm text-gray-400">
                Across LeetCode, CodeChef and Codeforces
              </p>
            </div>
          </div>
        </div>

        {/* Platform Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {platforms.map((platform, index) => {
            const PlatformIcon = platform.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-white/5 bg-[#18191d] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#F5B82E]/40"
              >
                {/* Platform Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5B82E]/10">
                      <PlatformIcon className="text-2xl text-[#F5B82E]" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">{platform.name}</h3>

                      <p className="text-sm text-gray-500">
                        Competitive Programming
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/5 bg-[#101114] p-5">
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Problems
                    </p>

                    <p className="mt-2 text-2xl font-bold text-white">
                      {platform.problems}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-[#101114] p-5">
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      {platform.label}
                    </p>

                    <p className="mt-2 text-2xl font-bold text-[#F5B82E]">
                      {platform.rating}
                    </p>
                  </div>
                </div>

                {/* Profile Button */}
                <a
                  href={platform.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-[#F5B82E]/50 hover:text-white"
                >
                  View Profile
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            );
          })}
        </div>

        {/* DSA Highlights */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Rating */}
          <div className="rounded-2xl border border-white/5 bg-[#18191d] p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F5B82E]/10">
                <FaChartLine className="text-xl text-[#F5B82E]" />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Consistent Problem Solving
                </h3>

                <p className="mt-2 leading-7 text-gray-400">
                  Regularly practicing data structures, algorithms and
                  problem-solving patterns across multiple coding platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Topics */}
          <div className="rounded-2xl border border-white/5 bg-[#18191d] p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F5B82E]/10">
                <FaCode className="text-xl text-[#F5B82E]" />
              </div>

              <div>
                <h3 className="text-xl font-bold">Core DSA Topics</h3>

                <p className="mt-2 leading-7 text-gray-400">
                  Arrays, strings, linked lists, stacks, queues, trees, graphs,
                  recursion, dynamic programming and more.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-14 text-center">
          <p className="text-sm text-gray-500">
            Solving problems. Learning patterns. Improving every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DSA;
