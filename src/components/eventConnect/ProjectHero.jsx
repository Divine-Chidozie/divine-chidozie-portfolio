import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

export default function ProjectHero() {
  return (
    <section className="w-[90%] max-w-7xl mx-auto py-16 lg:py-24">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#6f665d] transition hover:text-[#17130f]"
      >
        <FaArrowLeft className="text-xs" />
        Back to Work
      </Link>

      <div className="mt-12 grid items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <span className="inline-flex rounded-full border border-[#e7dfd5] bg-white px-4 py-2 text-sm font-semibold text-[#bf5b39]">
            Event Planning Platform
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-[#17130f] sm:text-6xl lg:text-7xl">
            EventConnect
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#6f665d]">
            EventConnect is a modern event planning platform designed to make
            finding vendors, managing enquiries, and organizing events feel
            effortless. Every screen was built with responsiveness, clarity, and
            intuitive interactions to create a seamless planning experience.
          </p>

          {/* Project Details */}
          <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b9187]">
                Role
              </p>

              <h3 className="mt-2 text-lg font-semibold text-[#17130f]">
                Frontend Developer
              </h3>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b9187]">
                Year
              </p>

              <h3 className="mt-2 text-lg font-semibold text-[#17130f]">
                2026
              </h3>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b9187]">
                Stack
              </p>

              <h3 className="mt-2 text-lg font-semibold text-[#17130f]">
                React · Tailwind CSS · React Router
              </h3>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b9187]">
                Focus
              </p>

              <h3 className="mt-2 text-lg font-semibold text-[#17130f]">
                Responsive Interface Design
              </h3>
            </div>
          </div>
        </div>

        {/* Right Preview */}
        <div className="relative">
          <div className="rounded-3xl border border-[#ebe7e3] bg-white p-6 shadow-2xl">
            <div className="rounded-2xl border border-[#ebe7e3] bg-[#f6f0e6] p-3">
              {/* Browser Bar */}
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
              </div>

              {/* Preview Placeholder */}
              <div className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-[#d7d0c8] bg-white">
                <p className="text-base font-medium text-[#6f665d]">
                  EventConnect Dashboard Preview
                </p>
              </div>
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-[#ebe7e3] bg-white px-6 py-5 shadow-xl lg:block">
            <p className="text-sm text-[#6f665d]">Responsive across</p>

            <h3 className="mt-1 text-3xl font-bold text-[#17130f]">
              Mobile · Tablet · Desktop
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
