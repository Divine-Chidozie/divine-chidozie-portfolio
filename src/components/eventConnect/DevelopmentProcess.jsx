const steps = [
  {
    number: "01",
    title: "Research & Planning",
    description:
      "Reviewed the project requirements, identified user needs, and organized the overall interface structure before writing code.",
  },
  {
    number: "02",
    title: "Interface Design",
    description:
      "Designed responsive layouts with clear visual hierarchy, consistent spacing, and reusable UI patterns to improve usability.",
  },
  {
    number: "03",
    title: "Component Development",
    description:
      "Built modular React components that could be reused across multiple pages, keeping the codebase organized and maintainable.",
  },
  {
    number: "04",
    title: "Integration & Refinement",
    description:
      "Connected the interface to backend APIs, refined interactions, fixed layout issues, and optimized the experience across different screen sizes.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="w-[90%] max-w-7xl mx-auto py-24">
      {/* Heading */}
      <div className="max-w-3xl">
        <span className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#bf5b39]">
          Development Process
        </span>

        <h2 className="mt-4 text-4xl font-bold text-[#17130f] sm:text-5xl">
          From concept to a polished user experience.
        </h2>

        <p className="mt-6 text-lg leading-8 text-[#6f665d]">
          Building EventConnect involved more than implementing screens. The
          process focused on planning, reusable architecture, responsive design,
          and continuous refinement to create an interface that feels intuitive
          from the first interaction.
        </p>
      </div>

      {/* Timeline */}
      <div className="mt-20 space-y-8">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-3xl border border-[#ebe7e3] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#17130f] text-2xl font-bold text-white">
                {step.number}
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#17130f]">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-3xl leading-8 text-[#6f665d]">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
