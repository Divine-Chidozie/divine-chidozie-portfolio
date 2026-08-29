import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import PageTransition from "../../components/PageTransition";
import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

const PaucekDeliveriesCaseStudy = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#f6f0e6]">
        <Navbar />

        <main className="pt-28 mx-auto w-[90%] max-w-7xl py-10">
          {/* Link to go back */}
          <div className="mb-8">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#6f665d] transition hover:text-[#17130f]"
            >
              <FaArrowLeft className="text-xs" />
              Back to Work
            </Link>
          </div>

          {/* Paucek heading summary */}
          <section className="mb-2  mt-2">
            <div className="flex flex-col gap-1 bg-[#17130f] p-5 boder border-[#17130f] rounded-xl shadow w-full sm:w-2/5 md:w-2/5 lg:w-2/5">
              <h1 className="text-white text-2xl fontsemi-bold">
                Paucek Deliveries
              </h1>
              <h2 className="text-[#bf5b39] text-base">
                Delivery Management Interface
              </h2>
              <h4 className="text-[#6f665d] text-sm">
                Frontend Developer · 2024
              </h4>
              <p className="text-[#6f665d] text-sm font-semibold">
                Stack:{" "}
                <span className="italic">HTML, CSS, JavaScript, Bootstrap</span>
              </p>
            </div>
          </section>

          {/* Challenge and Approch Section */}
          <section className="mt-8 flex flex-col justify-between gap-3 sm:flex-col md:flex-row lg:flex-row">
            {/* challenge */}
            <div className="p-4 border border-[#fffaf0e6] rounded-2xl shadow bg-[#fffaf0e6]">
              <h2 className="font-mono text-xs mb-2 font-bold uppercase tracking-[0.2em] text-[#bf5b39] mt-2 space-x-1">
                Challenge
              </h2>
              <p className="mt-3 text-base leading-7 text-[#6f665d]">
                The challenge was to design a delivery workflow that remains
                clear as on order moves through different stages and users.
              </p>

              <p className="mt-3 text-base leading-7 text-[#6f665d]">
                A customer creates a delivery request, a merchant processes the
                order, a rider handles the delivery, and the status changes
                throughout the process.
              </p>

              <p className="mt-3 text-base leading-7 text-[#6f665d]">
                The interface needed to make those changes easy to understand
                and act on, without overwhelming users with information that
                doesn't belong to the workflow.
              </p>
            </div>

            {/* Approch */}
            <div className="p-4 border border-[#fffaf0e6] rounded-2xl shadow-xl">
              {" "}
              <div>
                <h2 className="font-mono text-xs mb-2 font-bold uppercase tracking-[0.2em] text-[#bf5b39] mt-2 space-x-1">
                  Approch
                </h2>
                <p className="mt-3 text-base leading-6 text-[#6f665d]">
                  I approched the interface by mapping the delivery flow first,
                  then designing the screens around the actions required at each
                  stage.
                </p>
              </div>
              <div className="flex flex-col mt-2">
                <h4 className="font-mono text-xs mb-2 font-bold uppercase tracking-[0.2em] text-black mt-2 space-x-1">
                  Customer request → Merchant processing → Rider delivery →
                  Completed order
                </h4>
                <p className="mt-3 text-base leading-6 text-[#6f665d]">
                  This helped determine what each user needed to see, what
                  actions they needed access to, and how status should be
                  communicated throughout the status.
                </p>
                <p className="mt-3 text-base leading-6 text-[#6f665d]">
                  Rather than giving every user the same dashboard, I separated
                  the experience around their specific responsibilities.
                </p>
              </div>
            </div>
          </section>

          <div className="p-4 border border-[#fffaf0e6] rounded-2xl shadow-xl flex flex-col gap-2">
            {/* Implementation */}
            <div>
              <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#bf5b39] mt-2 space-x-1">
                Implementation
              </h2>
              <p className="text-base leading-6 text-[#6f665d]">
                I translated the workflow into four focused interfaces:
              </p>
            </div>

            {/* Customer */}
            <div>
              <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#bf5b39] mt-2 space-x-1">
                Customer
              </h2>
              <p className="text-base leading-6 text-[#6f665d]">
                Create delivery requests, view delivery information, and monitor
                delivery stages.
              </p>
            </div>

            {/* Merchant */}
            <div>
              <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#bf5b39] mt-2 space-x-1">
                Merchant
              </h2>

              <p className="text-base leading-6 text-[#6f665d]">
                Manage products and move incoming orders through preparation and
                pickup stages.
              </p>
            </div>

            {/* Rider */}
            <div>
              <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#bf5b39] mt-2 space-x-1">
                Rider
              </h2>
              <p className="text-base leading-6 text-[#6f665d]">
                View available deliveries, accept jobs, manage an active
                delivery, and track earnings.
              </p>
            </div>

            {/* Admin */}
            <div>
              <h2 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#bf5b39] mt-2 space-x-1">
                Admin
              </h2>
              <p className="text-base leading-6 text-[#6f665d]">
                Monitor users and deliveries through a centralized operational
                dashboard.
              </p>
            </div>
          </div>

          {/* Key Decision Section, Key Features Section, and Outcome Section */}
          <section className="mt-5">
            {/* Key Decisions + Key Features */}
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              {/* Key Decisions */}
              <div className="rounded-2xl border border-[#fffaf0e6] bg-[#fffaf0e6] p-4 shadow">
                <div>
                  <h2 className="mt-2 mb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#bf5b39]">
                    Key Decisions
                  </h2>

                  <div className="mb-4">
                    <h4 className="text-[14px] font-semibold text-black">
                      Workflow-first UI
                    </h4>
                    <p className="text-base leading-6 text-[#6f655d]">
                      Designed the interfaces around the sequence of actions
                      users perform instead of treating each screen as an
                      isolated page.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-[14px] font-semibold text-black">
                      Status-driven interfaces
                    </h4>
                    <p className="text-base leading-6 text-[#6f655d]">
                      Used delivery and order states to make progress
                      immediately visible.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-[14px] font-semibold text-black">
                      Role-based dashboards
                    </h4>
                    <p className="text-base leading-6 text-[#6f655d]">
                      Prioritized relevant information and actions for each type
                      of user.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[14px] font-semibold text-black">
                      Responsive layouts
                    </h4>
                    <p className="text-base leading-6 text-[#6f655d]">
                      Structured forms, dashboards, cards, tables, and
                      navigation to remain usable across screen sizes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Features + Outcome */}
              <div className="rounded-2xl border border-[#fffaf0e6] bg-[#f6f0e6] p-4 shadow">
                {/* Key Features */}
                <div>
                  <h2 className="mt-2 mb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#bf5b39]">
                    Key Features
                  </h2>

                  <ul className="space-y-1">
                    <li className="text-xs text-[#6f665d] sm:text-sm">
                      Delivery request flow
                    </li>

                    <li className="text-xs text-[#6f665d] sm:text-sm">
                      Delivery status management
                    </li>

                    <li className="text-xs text-[#6f665d] sm:text-sm">
                      Rider availability and active deliveries
                    </li>

                    <li className="text-xs text-[#6f665d] sm:text-sm">
                      Merchant product and order management
                    </li>

                    <li className="text-xs text-[#6f665d] sm:text-sm">
                      Role-based account flows
                    </li>

                    <li className="text-xs text-[#6f665d] sm:text-sm">
                      Responsive dashboard layouts
                    </li>

                    <li className="text-xs text-[#6f665d] sm:text-sm">
                      Customer support interface
                    </li>
                  </ul>
                </div>

                {/* Outcome */}
                <div className="mt-6">
                  <h4 className="mt-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#bf5b39]">
                    Outcome
                  </h4>

                  <p className="text-base leading-6 text-[#6f655d]">
                    The result was a delivery interface built around a single
                    operational workflow, with each role seeing the information
                    and actions relevant to its part of that workflow.
                  </p>

                  <p className="mt-3 text-base leading-6 text-[#6f655d]">
                    The project shifted my thinking from building individual
                    screens to understanding how information and actions move
                    through an application.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technology */}
          <section className="rounded-sm border border-[#e8dfd3] bg-[#fffaf0e6] p-4 sm:p-5 mt-5">
            <h3 className="mt-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#bf5b39]">
              Technology
            </h3>

            <div className="mt-1 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
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
                  View Github
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

export default PaucekDeliveriesCaseStudy;
