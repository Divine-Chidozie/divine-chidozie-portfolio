const outcomes = [
  {
    value: "12+",
    title: "Application Screens",
  },
  {
    value: "20+",
    title: "Reusable Components",
  },
  {
    value: "100%",
    title: "Responsive Layouts",
  },
  {
    value: "REST",
    title: "API Integration",
  },
];

export default function ProjectOutcome() {
  return (
    <section className="w-[90%] max-w-7xl mx-auto py-24">
      <div className="rounded-3xl border border-[#ebe7e3] bg-white p-10 lg:p-16">
        <div className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#bf5b39]">
            Project Outcome
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#17130f] sm:text-5xl">
            A frontend experience designed with clarity, consistency, and
            maintainability.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#6f665d]">
            EventConnect demonstrates my approach to building modern web
            interfaces through reusable components, responsive layouts, and
            thoughtful interaction design. Every decision focused on creating an
            experience that is intuitive for users and maintainable for future
            development.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[#faf9f7] p-8 text-center"
            >
              <h3 className="text-5xl font-bold text-[#17130f]">
                {item.value}
              </h3>

              <p className="mt-3 text-[#6f665d]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
