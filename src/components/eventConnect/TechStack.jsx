const stack = [
  {
    name: "React",
    description:
      "Built reusable components and structured the interface into maintainable, scalable sections.",
  },
  {
    name: "JavaScript",
    description:
      "Handled application logic, user interactions, and dynamic rendering throughout the interface.",
  },
  {
    name: "Tailwind CSS",
    description:
      "Created a consistent design system with responsive layouts and reusable utility classes.",
  },
  {
    name: "React Router",
    description:
      "Managed navigation between pages while keeping the user experience smooth and intuitive.",
  },
  {
    name: "REST API",
    description:
      "Integrated frontend views with backend endpoints for authentication and application data.",
  },
  {
    name: "Git & GitHub",
    description:
      "Tracked development, managed version control, and collaborated throughout the project lifecycle.",
  },
];

export default function TechStack() {
  return (
    <section className="w-[90%] max-w-7xl mx-auto py-24">
      <div className="max-w-3xl">
        <span className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#bf5b39]">
          Technology
        </span>

        <h2 className="mt-4 text-4xl font-bold text-[#17130f] sm:text-5xl">
          Technologies behind the experience.
        </h2>

        <p className="mt-6 text-lg leading-8 text-[#6f665d]">
          Every tool was selected to support a responsive, maintainable, and
          scalable frontend architecture while keeping the development process
          efficient and organized.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {stack.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-[#ebe7e3] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <h3 className="text-2xl font-bold text-[#17130f]">{item.name}</h3>

            <p className="mt-4 leading-7 text-[#6f665d]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
