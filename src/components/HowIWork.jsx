const HowIWork = () => {
  return (
    <section className="w-[90%] max-w-7xl mx-auto py-20">
      {/* Section Heading */}
      <div className="max-w-3xl">
        <span className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#bf5b39]">
          How I Work
        </span>

        <h2 className="mt-4 text-4xl font-bold text-[#17130f] sm:text-5xl">
          Thoughtful interfaces, carefully put together.
        </h2>
      </div>

      {/* Cards */}
      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {/* Card 1 */}
        <div className="rounded-2xl border border-[#ebe7e3] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h4 className="text-sm font-bold tracking-widest text-[#bf5b39]">
            01
          </h4>

          <h3 className="mt-4 text-2xl font-semibold text-[#17130f]">
            Component Architecture
          </h3>

          <p className="mt-4 leading-8 text-[#6f665d]">
            Reusable components organized with clarity and consistency, making
            interfaces easier to maintain, extend, and refine as projects
            evolve.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl border border-[#ebe7e3] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h4 className="text-sm font-bold tracking-widest text-[#bf5b39]">
            02
          </h4>

          <h3 className="mt-4 text-2xl font-semibold text-[#17130f]">
            Responsive Design
          </h3>

          <p className="mt-4 leading-8 text-[#6f665d]">
            Layouts that adapt naturally across mobile, tablet, and desktop
            screens while preserving usability, accessibility, and visual
            balance.
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl border border-[#ebe7e3] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h4 className="text-sm font-bold tracking-widest text-[#bf5b39]">
            03
          </h4>

          <h3 className="mt-4 text-2xl font-semibold text-[#17130f]">
            User Experience
          </h3>

          <p className="mt-4 leading-8 text-[#6f665d]">
            Interactions shaped with attention to detail, smooth navigation, and
            intuitive design that helps users accomplish tasks without
            distraction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
