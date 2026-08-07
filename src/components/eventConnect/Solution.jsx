export default function Solution() {
  return (
    <section className="w-[90%] max-w-7xl mx-auto py-24">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left */}
        <div>
          <span className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#bf5b39]">
            Solution
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#17130f] sm:text-5xl">
            A responsive interface designed around clarity and ease of use.
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#6f665d]">
            Rather than overwhelming users with unnecessary complexity, the
            experience was designed to guide them through each step naturally.
            Every screen prioritizes clear navigation, consistent layouts, and
            reusable interface patterns that make the platform feel familiar
            from the first interaction.
          </p>

          <p className="mt-8 text-lg leading-8 text-[#6f665d]">
            Components were structured for consistency and scalability, allowing
            the interface to remain organized as new features and pages are
            introduced. Responsive layouts ensure the experience remains
            intuitive across mobile, tablet, and desktop devices.
          </p>
        </div>

        {/* Right */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#ebe7e3] bg-white p-6 shadow-sm">
            <h3 className="text-3xl font-bold text-[#17130f]">20+</h3>

            <p className="mt-3 text-[#6f665d]">
              Reusable interface components designed for consistency and
              maintainability.
            </p>
          </div>

          <div className="rounded-2xl border border-[#ebe7e3] bg-white p-6 shadow-sm">
            <h3 className="text-3xl font-bold text-[#17130f]">12+</h3>

            <p className="mt-3 text-[#6f665d]">
              Application screens connected through a consistent user flow.
            </p>
          </div>

          <div className="rounded-2xl border border-[#ebe7e3] bg-white p-6 shadow-sm">
            <h3 className="text-3xl font-bold text-[#17130f]">100%</h3>

            <p className="mt-3 text-[#6f665d]">
              Responsive layouts optimized for every screen size.
            </p>
          </div>

          <div className="rounded-2xl border border-[#ebe7e3] bg-white p-6 shadow-sm">
            <h3 className="text-3xl font-bold text-[#17130f]">1</h3>

            <p className="mt-3 text-[#6f665d]">
              Unified experience for vendor discovery, enquiries, and planning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
