export default function ProjectGallery() {
  const screens = [
    {
      title: "Home",
      description:
        "A welcoming landing page designed to guide users into the platform with clear navigation and a modern visual hierarchy.",
    },
    {
      title: "Authentication",
      description:
        "Simple and intuitive sign in and registration flows focused on accessibility and ease of use.",
    },
    {
      title: "Vendor Discovery",
      description:
        "An organized browsing experience that helps users explore vendors efficiently across different categories.",
    },
    {
      title: "Dashboard",
      description:
        "A clean workspace for managing enquiries, tracking activity, and navigating the platform with confidence.",
    },
  ];

  return (
    <section className="w-[90%] max-w-7xl mx-auto py-24">
      {/* Heading */}
      <div className="max-w-3xl">
        <span className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#bf5b39]">
          Project Gallery
        </span>

        <h2 className="mt-4 text-4xl font-bold text-[#17130f] sm:text-5xl">
          A closer look at the interface.
        </h2>

        <p className="mt-6 text-lg leading-8 text-[#6f665d]">
          Every screen was designed with consistency, responsiveness, and
          usability in mind. Together, they create an experience that feels
          familiar, organized, and easy to navigate.
        </p>
      </div>

      {/* Gallery */}
      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {screens.map((screen) => (
          <div
            key={screen.title}
            className="overflow-hidden rounded-3xl border border-[#ebe7e3] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Screenshot Placeholder */}
            <div className="aspect-video border-b border-[#ebe7e3] bg-[#f6f0e6] flex items-center justify-center">
              <p className="text-[#6f665d] font-medium">
                {screen.title} Screenshot
              </p>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#17130f]">
                {screen.title}
              </h3>

              <p className="mt-4 leading-7 text-[#6f665d]">
                {screen.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
