export default function Challenge() {
  return (
    <section className="w-[90%] max-w-7xl mx-auto py-24">
      <div className="grid gap-16 lg:grid-cols-2">
        {/* Left */}
        <div>
          <span className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#bf5b39]">
            Challenge
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#17130f] sm:text-5xl">
            Making event planning simpler from the very first interaction.
          </h2>
        </div>

        {/* Right */}
        <div>
          <p className="text-lg leading-8 text-[#6f665d]">
            Planning an event often involves searching through multiple vendors,
            sending messages across different platforms, and keeping track of
            enquiries manually. The experience can quickly become fragmented,
            making it difficult for users to stay organized throughout the
            planning process.
          </p>

          <p className="mt-8 text-lg leading-8 text-[#6f665d]">
            The objective was to design an interface that brings vendor
            discovery, enquiries, and event management into one clear workflow,
            reducing unnecessary complexity while keeping every interaction
            intuitive and responsive across devices.
          </p>
        </div>
      </div>
    </section>
  );
}
