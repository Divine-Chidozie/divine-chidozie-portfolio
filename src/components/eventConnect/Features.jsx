export default function Features() {
  const features = [
    {
      title: "Authentication",
      description:
        "Secure sign in and account creation flows designed with a simple, intuitive user experience.",
    },
    {
      title: "Vendor Discovery",
      description:
        "Browse and explore vendors through an organized interface that makes finding the right service straightforward.",
    },
    {
      title: "Enquiry Management",
      description:
        "Send, track, and manage enquiries from a centralized workflow without unnecessary complexity.",
    },
    {
      title: "Responsive Design",
      description:
        "Every page adapts naturally across mobile, tablet, and desktop devices while maintaining consistency.",
    },
    {
      title: "Reusable Components",
      description:
        "A structured component system that improves consistency, scalability, and long-term maintainability.",
    },
    {
      title: "Modern User Experience",
      description:
        "Clean layouts, thoughtful spacing, and clear visual hierarchy create an experience that's easy to navigate.",
    },
  ];

  return (
    <section className="w-[90%] max-w-7xl mx-auto py-24">
      {/* Heading */}
      <div className="max-w-3xl">
        <span className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#bf5b39]">
          Key Features
        </span>

        <h2 className="mt-4 text-4xl font-bold text-[#17130f] sm:text-5xl">
          Built around the experience people actually need.
        </h2>

        <p className="mt-6 text-lg leading-8 text-[#6f665d]">
          Every feature was designed to make event planning more organized,
          intuitive, and enjoyable. The interface focuses on helping users
          complete tasks with clarity and confidence.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-[#ebe7e3] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#17130f] text-lg font-bold text-white">
              ✓
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-[#17130f]">
              {feature.title}
            </h3>

            <p className="mt-4 leading-7 text-[#6f665d]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
