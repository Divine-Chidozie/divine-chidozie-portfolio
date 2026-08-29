import { Link } from "react-router-dom";

import paucek from "../../assets/images/paucek.png";

const WorkPaucek = () => {
  // const featureImplementation = "We are still working on this feature..";
  // const handleCaseStudy = () => {
  //   alert(`${featureImplementation}`);
  // };

  return (
    <section className="w-full">
      <div className="flex w-full flex-col gap-6 rounded-xl border border-gray-200 bg-[#fffaf0e6] p-4 sm:p-5 md:flex-row md:items-stretch md:gap-8 lg:p-6">
        {/* Project Image */}
        <div className="w-full shrink-0 md:w-[40%] lg:w-[38%]">
          <div className="h-full w-full overflow-hidden rounded-lg border border-gray-200">
            <img
              src={paucek}
              alt="Paucek delivery platform"
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
              2025
            </span>
          </div>

          {/* Project Information */}
          <div>
            <h3 className="mb-2 text-2xl font-bold text-[#17130f] sm:text-3xl">
              Paucek
            </h3>

            <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base">
              A delivery platform for requesting pickups, following deliveries,
              and connecting customers with riders.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base">
              Built a straightforward delivery experience around clear
              navigation, responsive layouts, and essential user flows.
            </p>
          </div>

          {/* Technologies + Button */}
          <div className="mt-1">
            <ul className="mb-4 flex flex-wrap gap-2">
              <li className="rounded-sm border border-gray-200 px-2 py-1 text-xs font-bold text-[#6f665d] sm:text-sm">
                HTML
              </li>

              <li className="rounded-sm border border-gray-200 px-2 py-1 text-xs font-bold text-[#6f665d] sm:text-sm">
                CSS
              </li>

              <li className="rounded-sm border border-gray-200 px-2 py-1 text-xs font-bold text-[#6f665d] sm:text-sm">
                JavaScript
              </li>
            </ul>

            <Link
              to="/casestudy/paucekdeliveriescasestudy"
              // onClick={handleCaseStudy}
              className="inline-flex w-full items-center justify-center rounded-md bg-[#17130f] px-6 py-3 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2d2823] sm:w-fit"
            >
              Read Case Study
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPaucek;
