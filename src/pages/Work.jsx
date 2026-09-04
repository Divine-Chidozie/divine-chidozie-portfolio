import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import WorkPaucek from "./work/WorkPaucek";
import WorkGameVault from "./work/WorkGameVault";
import ChucksKitchen from "./work/ChucksKitchen";

import EventPlanningPlatformLandingPage from "../assets/images/EventPlanningPlatformLandingPage.png";
import Footer from "../components/Footer";

const Work = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#f6f0e6]">
        <Navbar />

        <main className="mx-auto w-[90%] max-w-7xl">
          {/* Header */}
          <section className="pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="w-full lg:w-1/2">
                <span className="font-mono text-xs font-extrabold uppercase text-[#bf5b39] sm:text-sm">
                  Selected Work
                </span>

                <h1 className="mt-3 text-4xl font-bold leading-tight text-[#17130f] sm:text-3xl lg:text-4xl">
                  Case studies for interfaces, products, and frontend
                  experiences.
                </h1>
              </div>

              <div className="w-full lg:w-5/12">
                <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                  A focused set of builds showing how I approach interfaces,
                  interactive experiences, reusable components, and modern web
                  applications.
                </p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="flex flex-col gap-6 pb-24">
            {/* EventConnect */}
            <article className="flex w-full flex-col gap-6 rounded-xl border border-gray-200 bg-[#fffaf0e6] p-4 sm:p-5 md:flex-row md:items-stretch md:gap-8 lg:p-6">
              {/* Project Image */}
              <div className="w-full shrink-0 md:w-[40%] lg:w-[38%]">
                <div className="h-full w-full overflow-hidden rounded-lg border border-gray-200">
                  <img
                    src={EventPlanningPlatformLandingPage}
                    alt="EventConnect event marketplace"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className="flex min-w-0 flex-1 flex-col gap-4">
                {/* Role + Year */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-sm border border-gray-200 bg-[#f6f0e6] px-2 py-1 text-xs font-bold text-[#6f665d] sm:text-sm">
                    Frontend Developer
                  </span>

                  <span className="rounded-sm border border-gray-200 bg-[#f6f0e6] px-2 py-1 text-xs font-bold text-[#6f665d] sm:text-sm">
                    2026
                  </span>
                </div>

                {/* Project Information */}
                <div>
                  <h2 className="mb-2 text-2xl font-bold text-[#17130f] sm:text-3xl">
                    EventConnect
                  </h2>

                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base">
                    An event marketplace connecting planners with vendors for
                    discovering services, exploring portfolios, and managing
                    event bookings.
                  </p>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base">
                    Worked on the frontend experience across authentication,
                    vendor discovery, planner and vendor interfaces, responsive
                    layouts, and reusable React components.
                  </p>
                </div>

                {/* Technologies + Button */}
                <div>
                  <ul className="mb-4 flex flex-wrap gap-2">
                    <li className="rounded-sm border border-gray-200 px-2 py-1 text-xs font-bold text-[#6f665d] sm:text-sm">
                      React
                    </li>

                    <li className="rounded-sm border border-gray-200 px-2 py-1 text-xs font-bold text-[#6f665d] sm:text-sm">
                      JavaScript
                    </li>

                    <li className="rounded-sm border border-gray-200 px-2 py-1 text-xs font-bold text-[#6f665d] sm:text-sm">
                      Tailwind CSS
                    </li>
                  </ul>

                  <Link
                    to="/work/eventconnect"
                    // onClick={handleCaseStudy}
                    className="inline-flex w-full items-center justify-center rounded-md bg-[#17130f] px-6 py-3 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2d2823] sm:w-fit"
                  >
                    Read Case Study
                  </Link>
                </div>
              </div>
            </article>

            <ChucksKitchen />
            <WorkPaucek />

            <WorkGameVault />
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Work;
