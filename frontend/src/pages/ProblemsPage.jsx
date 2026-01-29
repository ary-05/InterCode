import { Link } from "react-router";
import Navbar from "../components/Navbar";

import { PROBLEMS } from "../data/problems";
import { ChevronRightIcon, Code2Icon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemsPage() {
  const problems = Object.values(PROBLEMS);

  const easyProblemsCount = problems.filter((p) => p.difficulty === "Easy").length;
  const mediumProblemsCount = problems.filter((p) => p.difficulty === "Medium").length;
  const hardProblemsCount = problems.filter((p) => p.difficulty === "Hard").length;

  return (
    <div className="min-h-screen bg-[#020018]">
      <Navbar />

      <div className="px-7 py-11">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-white font-nunito">Practice Problems</h1>
          <p className="text-white/70 font-nunito">
            Coding Problems to Sharpen Your Skills
          </p>
        </div>

        {/* PROBLEMS LIST */}
        <div className="space-y-4">
          {problems.map((problem) => (
            <Link
              key={problem.id}
              to={`/problem/${problem.id}`}
              className="block bg-[#030023]/50 backdrop-blur-sm border border-[#6217d2]/30 rounded-2xl shadow-xl hover:shadow-2xl hover:border-[#6217d2] hover:scale-[1.01] transition-all duration-200"
            >
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  {/* LEFT SIDE */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="size-12 rounded-lg bg-[#6217d2]/20 border border-[#6217d2] flex items-center justify-center">
                        <Code2Icon className="size-6 text-[#6217d2]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className="text-xl font-bold text-white font-nunito">{problem.title}</h2>
                          <span className={`badge ${getDifficultyBadgeClass(problem.difficulty)}`}>
                            {problem.difficulty}
                          </span>
                        </div>
                        <p className="text-sm text-white/60 font-nunito"> {problem.category}</p>
                      </div>
                    </div>
                    <p className="text-white/80 mb-3 font-nunito">{problem.description.text}</p>
                  </div>
                  {/* RIGHT SIDE */}

                  <div className="flex items-center gap-2 text-[#6217d2]">
                    <span className="font-medium font-nunito">Solve</span>
                    <ChevronRightIcon className="size-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* STATS FOOTER */}
        <div className="mt-12 bg-[#090040]/50 backdrop-blur-sm border border-[#6217d2]/30 rounded-2xl shadow-xl">
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-sm text-white/60 font-nunito mb-2">Total Problems</div>
                <div className="text-4xl font-bold text-[#6217d2] font-nunito">{problems.length}</div>
              </div>

              <div className="text-center">
                <div className="text-sm text-white/60 font-nunito mb-2">Easy</div>
                <div className="text-4xl font-bold text-success font-nunito">{easyProblemsCount}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-white/60 font-nunito mb-2">Medium</div>
                <div className="text-4xl font-bold text-warning font-nunito">{mediumProblemsCount}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-white/60 font-nunito mb-2">Hard</div>
                <div className="text-4xl font-bold text-error font-nunito">{hardProblemsCount}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProblemsPage;