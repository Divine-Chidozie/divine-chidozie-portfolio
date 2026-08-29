import { Link } from "react-router-dom";

const FeaturedProject = () => {
  return (
    <section className="w-[90%] max-w-7xl mx-auto py-20">
      {/* Section Heading */}
      <div className="max-w-3xl">
        <span className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#bf5b39]">
          Featured Project
        </span>

        <h2 className="mt-4 text-4xl font-bold text-[#17130f] sm:text-5xl">
          EventConnect
        </h2>

        <p className="mt-6 text-lg leading-8 text-[#6f665d]">
          A modern event planning platform designed to simplify vendor
          discovery, enquiry management, and event organization through a
          responsive, intuitive, and thoughtfully structured user experience.
        </p>
      </div>

      {/* Project Card */}
      <div className="mt-16 rounded-3xl border border-[#ebe7e3] bg-white p-8 shadow-sm lg:p-12">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-[#17130f]">12+</h3>
                <p className="mt-2 text-sm leading-6 text-[#6f665d]">
                  Application Screens
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#17130f]">20+</h3>
                <p className="mt-2 text-sm leading-6 text-[#6f665d]">
                  Reusable Components
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#17130f]">100%</h3>
                <p className="mt-2 text-sm leading-6 text-[#6f665d]">
                  Responsive Design
                </p>
              </div>
            </div>

            <Link
              to="/work/eventconnect"
              className="mt-10 inline-flex rounded-xl bg-[#17130f] px-6 py-3 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2d2823]"
            >
              View Case Study
            </Link>
          </div>

          {/* Right Side */}
          <div className="rounded-2xl border border-[#ebe7e3] bg-[#faf9f7] p-8">
            <ul className="space-y-5">
              <li className="border-b border-[#ebe7e3] pb-4 font-medium text-[#17130f]">
                Authentication flows
              </li>

              <li className="border-b border-[#ebe7e3] pb-4 font-medium text-[#17130f]">
                Vendor discovery
              </li>

              <li className="border-b border-[#ebe7e3] pb-4 font-medium text-[#17130f]">
                Enquiry management
              </li>

              <li className="font-medium text-[#17130f]">
                Responsive component system
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;