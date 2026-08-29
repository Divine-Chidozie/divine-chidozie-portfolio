import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="w-[90%] max-w-7xl mx-auto py-24">
      <div className="rounded-3xl bg-[#17130f] px-8 py-16 text-center sm:px-12 lg:px-20">
        <span className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#d8c9ba]">
          Interested in working together?
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
          Have a project or idea in mind?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#d8c9ba]">
          I enjoy creating responsive, thoughtful digital experiences with clean
          architecture and maintainable code. If you're looking for a frontend
          developer to bring an idea to life, let's connect.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="rounded-xl bg-white px-8 py-3 font-semibold text-[#17130f] transition duration-300 hover:-translate-y-1"
          >
            Start a Conversation
          </Link>

          <Link
            to="/work"
            className="rounded-xl border border-white px-8 py-3 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#17130f]"
          >
            View More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
