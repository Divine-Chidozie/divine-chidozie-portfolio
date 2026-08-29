import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import PageTransition from "../../components/PageTransition";

// import Footer from "../../components/Footer";

const EventConnectCaseStudy = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#f6f0e6]">
        <Navbar />

        {/* <div className="mx-auto w-[90%] max-w-7xl"> */}
        {/* </div> */}

        <main className="pt-28 mx-auto w-[90%] max-w-7xl py-10">
          <div>
            <Link
              to="/work"
              className="inline-flex items-center justify-center rounded-sm border border-gray-400 px-4 py-2 text-sm font-semibold text-[#17130f] transition-colors duration-200 hover:bg-[#17130f] hover:text-white"
            >
              Back to Work
            </Link>
          </div>

          {/* Event Connect || Product*/}
          <section className="mt-8 flex flex-col justify-between gap-3 sm:flex-col md:flex-row lg:flex-row">
            {/* event connect */}
            <div className="p-4 border border-[#fffaf0e6] rounded-2xl shadow bg-[#fffaf0e6]">
              <div>
                <h1 className="mt-4 text-4xl font-bold text-[#17130f] sm:text-4xl">
                  EventConnect
                </h1>
                <h2 className="font-mono text-xs mb-2 font-bold uppercase tracking-[0.2em] text-[#bf5b39] mt-2 space-x-1">
                  Event Marketplace
                </h2>
              </div>

              <div>
                <span className="text-md text-[#6f665d]">
                  Frontend Developer · 2026
                </span>
              </div>

              <div>
                <p className="mt-3 text-base leading-7 text-[#6f665d]">
                  EventConnect is an event marketplace designed to connect event
                  planners with vendors for services such as decoration,
                  catering, venues, photography, entertainment, and more.
                </p>
                <p className="mt-3 text-base leading-7 text-[#6f665d]">
                  The experience brings vendors discovery, portfolios, reviews,
                  messaging, and booking-related interactions into one place,
                  giving planners a more direct way to explore and compare
                  services.
                </p>
              </div>
            </div>

            {/* product */}

            <div className="p-4 border border-gray-300 rounded-2xl shadow bg-[#17130f]">
              <div>
                <h2 className="mt-4 text-2xl font-bold text-[#fffaf0] sm:text-2xl">
                  The Product
                </h2>

                <p className="mt-3  text-base leading-7 text-[#6f665d]">
                  Planning an event oftens means searching through different
                  vendors, comparing options, checking previous work, and
                  communicating with several people before making a decision.
                </p>
              </div>

              <div>
                <h5 className="text-sm text-[#fffaf0] font-bold italic mt-3">
                  EventConnect brings those interactions into a single
                  experience.
                </h5>
              </div>

              <div>
                <p className="mt-3  text-base leading-7 text-[#6f665d]">
                  The interface is organized around discovery, comparison, and
                  communication, allowing planners to browse vendor categories,
                  explore individual vendor profiles, review their work, and
                  move toward booking.
                </p>
                <p className="mt-3  text-base leading-7 text-[#6f665d]">
                  The frontend is structured as a React application with
                  dedicated planner, vendor, and authentication areas, supported
                  by reusable components and client-side routing.
                </p>
              </div>
            </div>
          </section>

          {/* Contribution Section */}
          <section className="pt-8">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="w-full lg:w-2/3 bg-[#fffaf0e6] p-4 border border-[#fffaf0e6] rounded-sm">
                <h3 className="font-mono text-xs mb-2 font-bold uppercase tracking-[0.2em] text-[#bf5b39] mt-2 space-x-1">
                  CContribution
                </h3>

                <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                  I worked on the frontend experience, translating the product
                  requirements into responsive interfaces and reusable React
                  components.
                </p>
              </div>

              <div className="w-full lg:w-5/12 bg-[#fffaf0e6] p-4 border border-[#fffaf0e6] rounded-sm">
                <p className="font-mono text-xs mb-2 font-bold uppercase tracking-[0.2em] text-[#bf5b39] mt-2 space-x-1">
                  My work included:
                </p>
                <ul className="">
                  <li className="text-xs text-[#6f665d] sm:text-sm my-1">
                    Building and refining the authentication experienc
                  </li>
                  <li className="text-xs text-[#6f665d] sm:text-sm my-1">
                    Developing responsive page layouts
                  </li>
                  <li className="text-xs text-[#6f665d] sm:text-sm my-1">
                    Creating reusable interface components
                  </li>
                  <li className="text-xs text-[#6f665d] sm:text-sm my-1">
                    Working on planner and vendor-facing interfaces
                  </li>
                  <li className="text-xs text-[#6f665d] sm:text-sm my-1">
                    Connecting frontend screens to API functionality
                  </li>
                  <li className="text-xs text-[#6f665d] sm:text-sm my-1">
                    Building vendor discovery and presentation interfaces
                  </li>
                  <li className="text-xs text-[#6f665d] sm:text-sm my-1">
                    Handling navigation and application routes
                  </li>
                  <li className="text-xs text-[#6f665d] sm:text-sm my-1">
                    Refining interactions and responsive behavior across screen
                    sizes
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Authentication | Vendor Discovery Section */}
          <section className="pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-10 lg:pb-10">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              {/* Authentication */}
              <div className="w-full lg:w-2/3 bg-[#fffaf0e6] p-4 border border-[#fffaf0e6] rounded-sm min-h-max">
                <div>
                  <h2 className="font-mono text-xs font-extrabold uppercase text-[#bf5b39] sm:text-xs mb-2">
                    Authentication
                  </h2>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    One of the areas i worked on was the authenication flow.
                  </p>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    The application separates authentication from the main
                    product experience, with dedicated authentication pages and
                    routing for different parts of the application.
                  </p>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    The goal was to make signing in and creating an account feel
                    like part of the product rather than a disconnected form.
                  </p>
                </div>
              </div>

              {/* Vendor Discovery */}
              <div className="w-full lg:w-2/3 bg-[#fffaf0e6] p-4 border border-[#fffaf0e6] rounded-sm min-h-min">
                <div>
                  <h2 className="font-mono text-xs font-extrabold uppercase text-[#bf5b39] sm:text-xs mb-2">
                    Vendor Discovery
                  </h2>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    Vendor discovery is a central part of EventConnect.
                  </p>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    The interface allows planners to move through services,
                    discover vendors, and explore the work they offer.
                  </p>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    This made it possible to keep the visual language consistent
                    while presenting different types of vendor information.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Planner & Vendor Experience | Building the Interface */}

          <section className="pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-10 lg:pb-10">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div className="w-full lg:w-2/3 bg-[#fffaf0e6] p-4 border border-[#fffaf0e6] rounded-sm min-h-max">
                <h2 className="text-md font-bold uppercase sm:text-md mb-2">
                  Planner & Vendor Experiences
                </h2>
                <p className="text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                  EventConnect isn't simply a landing page. The frontend
                  contains separate experiences for planners and vendors
                </p>

                <p className="text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                  The repository has dedicated planner and vendor structures,
                  along vendor information, portfolios, reviews, pricing, and
                  planner-side interactions.
                </p>

                <p className="mtext-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                  That meant the interface had to account for different user
                  goal while keeping the overall product experience consistent.
                </p>
              </div>

              {/* Interface */}
              <div className="w-full lg:w-2/3 bg-[#fffaf0e6] p-4 border border-[#fffaf0e6] rounded-sm min-h-min">
                <h3 className="text-md font-bold uppercase sm:text-md mb-2">
                  Building the interface
                </h3>
                <p className="text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                  The experience is built around helping users move from
                  discovering a service to exploring a vendor
                </p>

                <p className="text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                  The frontend is built with React using Vite, React Router
                  handling application navigation. The project uses Axios for
                  API communication, Tailwind for styling, Framer Motion for
                  animation, and reusable icons libraries.
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="pt-6 pb-8 sm:pt-8 sm:pb-6 lg:pt-6 lg:pb-6 flex flex-col bg-[#fffaf0e6] p-4 border border-[#fffaf0e6] rounded-sm min-h-min">
            <h3 className="font-mono text-xs font-extrabold uppercase tracking-[0.2em] text-[#bf5b39] mt-2 space-x-1 text-center mb-4">
              Key Features
            </h3>

            <div className="grid grid-cols-1 mt-2 gap-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-6">
              <div className="border p-2 border-gray-300 rounded-md shadow">
                <h4 className="text-sm font-semibold">Vendor discovery</h4>
                <p className="text-xs leading-5 text-[#6f665d] sm:text-sm mt-1 sm:leading-5">
                  Browse vendors through organized service categories and
                  presentation-focused interfaces.
                </p>
              </div>

              <div className="border p-2 border-gray-300 rounded-md shadow">
                <h4 className="text-sm font-semibold">Vendor profiles</h4>
                <p className="text-xs leading-5 text-[#6f665d] sm:text-sm mt-1 sm:leading-5">
                  Present vendor information, portfolios, pricing, and reviews
                  in a structured experience.
                </p>
              </div>

              <div className="border p-2 border-gray-300 rounded-md shadow">
                <h4 className="text-sm font-semibold">Authentication</h4>
                <p className="text-xs leading-5 text-[#6f665d] sm:text-sm mt-1 sm:leading-5">
                  Dedicated sign-in and registration flows for accessing the
                  platform.
                </p>
              </div>

              <div className="border p-2 border-gray-300 rounded-md shadow">
                <h4 className="text-sm font-semibold">Planner experience</h4>
                <p className="text-xs leading-5 text-[#6f665d] sm:text-sm mt-1 sm:leading-5">
                  Interfaces designed around discovering and evaluating vendors.
                </p>
              </div>

              <div className="border p-2 border-gray-300 rounded-md shadow">
                <h4 className="text-sm font-semibold">Vendor experience</h4>
                <p className="text-xs leading-5 text-[#6f665d] sm:text-sm mt-1 sm:leading-5">
                  Dedicated screens and components for vendors managing their
                  presence on the platform.
                </p>
              </div>

              <div className="border p-2 border-gray-300 rounded-md shadow">
                <h4 className="text-sm font-semibold">Responsive interfaces</h4>
                <p className="text-xs leading-5 text-[#6f665d] sm:text-sm mt-1 sm:leading-5">
                  Layouts designed to adopt across desktop and screen sizes.
                </p>
              </div>
            </div>
          </section>

          {/* Technology */}
          <section className="rounded-sm border border-[#e8dfd3] bg-[#fffaf0e6] p-4 sm:p-5">
            <h3 className="mt-1 font-mono text-xs font-extrabold uppercase tracking-[0.2em] text-[#bf5b39]">
              Technology
            </h3>

            <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              {/* Technologies */}
              <ul className="flex flex-wrap gap-2">
                <li className="rounded-sm border border-gray-200 bg-[#f6f0e6] px-2.5 py-1.5 text-xs font-semibold text-[#6f665d]">
                  React
                </li>

                <li className="rounded-sm border border-gray-200 bg-[#f6f0e6] px-2.5 py-1.5 text-xs font-semibold text-[#6f665d]">
                  JavaScript
                </li>

                <li className="rounded-sm border border-gray-200 bg-[#f6f0e6] px-2.5 py-1.5 text-xs font-semibold text-[#6f665d]">
                  Vite
                </li>

                <li className="rounded-sm border border-gray-200 bg-[#f6f0e6] px-2.5 py-1.5 text-xs font-semibold text-[#6f665d]">
                  Tailwind CSS
                </li>

                <li className="rounded-sm border border-gray-200 bg-[#f6f0e6] px-2.5 py-1.5 text-xs font-semibold text-[#6f665d]">
                  React Router
                </li>

                <li className="rounded-sm border border-gray-200 bg-[#f6f0e6] px-2.5 py-1.5 text-xs font-semibold text-[#6f665d]">
                  Axios
                </li>

                <li className="rounded-sm border border-gray-200 bg-[#f6f0e6] px-2.5 py-1.5 text-xs font-semibold text-[#6f665d]">
                  Framer Motion
                </li>
              </ul>

              {/* Project Links */}
              <div className="flex flex-wrap gap-2">
                <a
                  href="YOUR_PROJECT_URL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-sm border border-gray-400 px-4 py-2 text-sm font-semibold text-[#17130f] transition-colors duration-200 hover:bg-[#17130f] hover:text-white"
                >
                  View Project
                </a>

                <a
                  href="https://github.com/Divine-Chidozie/orange-herizon-circle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-sm border border-gray-400 px-4 py-2 text-sm font-semibold text-[#17130f] transition-colors duration-200 hover:bg-[#17130f] hover:text-white"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
      {/* <Footer /> */}
    </PageTransition>
  );
};

export default EventConnectCaseStudy;
