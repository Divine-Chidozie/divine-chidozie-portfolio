import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";

import divinechidozie from "../assets/images/divinechidozie.png";
const About = () => {
  return (
    <PageTransition>
      <div className="bg-[#f6f0e6]">
        <Navbar />

        <section className="pt-36 mx-auto w-[90%] max-w-7xl py-24">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="bg-[#fffaf0e6] py-8 px-6">
                <span className="uppercase text-sm font-mono text-[#bf5b39] font-extrabold">
                  About Divine
                </span>

                <h2 className="mt-4 text-4xl font-bold text-[#17130f] sm:text-4xl">
                  I build frontend experiences that are clean, responsive, and
                  built to work.
                </h2>

                <p className="mt-8 max-w-xl text-lg leading-7 text-[#6f665d]">
                  I build with React and JavaScript, with a focus on thoughtful
                  layouts, expressive interactions, and interfaces that feel
                  considered rather than assembled.
                </p>

                <p className="mt-8 max-w-xl text-lg leading-7 text-[#6f665d]">
                  I’m drawn to clean visual systems, subtle interactions,
                  responsive layouts, and the process of turning a blank screen
                  into something people can actually use.
                </p>
              </div>
            </div>

            {/* second div container */}
            <div className="w-full lg:w-1/2 flex flex-col rounded-lg bg-[#fffaf0e6] p-3">
              {/* <div className="rounded-2xl border border-[#f6f0e6] bg-[#f6f0e6] p-4 shadow-2xl"> */}
              <img
                src={divinechidozie}
                alt="Portrait of Divine Chidozie"
                loading="eager"
                className="h-auto w-full max-w-sm object-contain sm:max-w-md lg:max-w-lg rounded-md"
              />
              {/* </div> */}

              <div className="grid grid-cols-1 mt-4 p-2 gap-2 sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
                {/* education container */}
                <div className="bg-[#f6f0e6] border border-gray-200 rounded-md py-2 px-3">
                  <h4 className="mt-1 text-[#bf5b39] font-bold text-sm">
                    Education
                  </h4>
                  <p className="mt-1 text-sm font-bold text-[#17130f] sm:text-md">
                    B.Sc Computer Science
                  </p>
                  <span className="text-[#6f665d] text-sm">
                    University of Cross River State
                  </span>
                </div>

                {/* location container */}
                <div className="bg-[#f6f0e6] border border-gray-200 rounded-md py-2 px-3">
                  <h4 className="text-[#bf5b39] mt-1 font-bold text-sm">
                    Location
                  </h4>
                  <p className="mt-1 text-sm font-bold text-[#17130f] sm:text-md">
                    Lagos, Nigeria
                  </p>
                  <span className="text-[#6f665d] text-sm">
                    Open to remote Opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Skill section */}
        <section className="mx-auto w-[90%] max-w-7xl pb-10">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="bg-[#fffaf0e6] py-8 px-6">
                <h3 className="text-black font-bold text-xl mb-5">
                  Experience
                </h3>

                <div className="grid gap-4">
                  <div className="bg-[#f6f0e6] py-3 px-5">
                    <div className="flex justify-center items-start">
                      <div className="flex flex-col flex-1">
                        <h4 className="text-lg font-bold">
                          Frontend Developer Intern
                        </h4>
                        <p className="text-sm text-[#bf5b39] font-bold -mt-1 mb-2">
                          Orange Circo
                        </p>
                      </div>

                      <span className="text-[#5d554c] text-sm font-semibold border border-gray-300 py-1 px-3 rounded-lg">
                        2026{" "}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <ul className="flex flex-col text-white list-none">
                        <li className="mt-2 text-base leading-6 text-[#6f665d]">
                          Built the frontend for an event-planning platform
                          connecting event planners with vendors.
                        </li>
                        <li className="mt-2 text-base leading-6 text-[#6f665d]">
                          Developed authentication flows, dashboards, enquiry
                          interfaces, notifications, and responsive layouts with
                          React.
                        </li>
                        <li className="mt-2 text-base leading-6 text-[#6f665d]">
                          Integrated the frontend with REST APIs and worked
                          through real application states, form validation, and
                          user interactions.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#f6f0e6] py-3 px-5">
                    <div className="flex justify-center items-start">
                      <div className="flex flex-col flex-1">
                        <h4 className="text-lg font-bold">
                          Frontend Developer Intern
                        </h4>
                        <p className="text-sm text-[#bf5b39] font-bold -mt-1 mb-2">
                          Trueminds Innovation Ltd
                        </p>
                      </div>

                      <span className="text-[#5d554c] text-sm font-semibold border border-gray-300 py-1 px-3 rounded-lg">
                        2026
                      </span>
                    </div>

                    <div>
                      <p className="mt-5 text-base leading-6 text-[#6f665d]">
                        Worked on React-based interfaces and contributed to the
                        development of responsive web experiences. Focused on
                        component structure, UI implementation, and improving
                        the way frontend features were built and organized.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#f6f0e6] py-3 px-5">
                    <div className="flex justify-center items-start">
                      <div className="flex flex-col flex-1">
                        <h4 className="text-lg font-bold">
                          Frontend Developer
                        </h4>
                        <p className="text-sm text-[#bf5b39] font-bold -mt-1 mb-2">
                          Ace Digital Co
                        </p>
                      </div>

                      <span className="text-[#5d554c] text-sm font-semibold border border-gray-300 py-1 px-3 rounded-lg">
                        2025 - 2025{" "}
                      </span>
                    </div>

                    <div>
                      <p className="mt-5 text-base leading-6 text-[#6f665d]">
                        Built and refined responsive web interfaces using React,
                        JavaScript, Tailwind CSS, and reusable components.
                        Worked across different projects, translating
                        requirements into functional interfaces and improving
                        the overall consistency of the UI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col rounded-lg bg-[#fffaf0e6] p-3">
              <div className="bg-[#fffaf0e6] py-4 px-6">
                <h4 className="text-black font-bold text-xl mb-5">
                  Core Skills
                </h4>

                <div>
                  <h4 className="text-md text-[#bf5b39] font-bold -mt-1 mb-2">
                    Frontend
                  </h4>

                  <div>
                    <ul className="flex flex-wrap items-center gap-2 sm:flex-wrap md:flex-wrap lg:flex-wrap">
                      <li className="whitespace-nowrap rounded-sm border border-gray-200 bg-[#f6f0e6] px-2 py-1 text-sm font-semibold text-[#6f665d]">
                        React.js
                      </li>

                      <li className="whitespace-nowrap rounded-sm border border-gray-200 bg-[#f6f0e6] px-2 py-1 text-sm font-semibold text-[#6f665d]">
                        JavaScript
                      </li>

                      <li className="whitespace-nowrap rounded-sm border border-gray-200 bg-[#f6f0e6] px-2 py-1 text-sm font-semibold text-[#6f665d]">
                        HTML
                      </li>

                      <li className="whitespace-nowrap rounded-sm border border-gray-200 bg-[#f6f0e6] px-2 py-1 text-sm font-semibold text-[#6f665d]">
                        CSS
                      </li>

                      <li className="whitespace-nowrap rounded-sm border border-gray-200 bg-[#f6f0e6] px-2 py-1 text-sm font-semibold text-[#6f665d]">
                        Tailwind CSS
                      </li>

                      <li className="whitespace-nowrap rounded-sm border border-gray-200 bg-[#f6f0e6] px-2 py-1 text-sm font-semibold text-[#6f665d]">
                        Bootsrap
                      </li>

                      <li className="whitespace-nowrap rounded-sm border border-gray-200 bg-[#f6f0e6] px-2 py-1 text-sm font-semibold text-[#6f665d]">
                        Responsive Design
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-7">
                  <h4 className="text-md text-[#bf5b39] font-bold -mt-1 mb-2">
                    UI & Development
                  </h4>

                  <div>
                    <ul className="flex flex-wrap items-center gap-2">
                      <li className="whitespace-nowrap rounded-sm border border-gray-200 bg-[#f6f0e6] px-2 py-1 text-sm font-semibold text-[#6f665d]">
                        Reusable Components
                      </li>

                      <li className="whitespace-nowrap rounded-sm border border-gray-200 bg-[#f6f0e6] px-2 py-1 text-sm font-semibold text-[#6f665d]">
                        React Router
                      </li>

                      <li className="whitespace-nowrap rounded-sm border border-gray-200 bg-[#f6f0e6] px-2 py-1 text-sm font-semibold text-[#6f665d]">
                        REST API Integration
                      </li>

                      <li className="whitespace-nowrap rounded-sm border border-gray-200 bg-[#f6f0e6] px-2 py-1 text-sm font-semibold text-[#6f665d]">
                        Git
                      </li>

                      <li className="whitespace-nowrap rounded-sm border border-gray-200 bg-[#f6f0e6] px-2 py-1 text-sm font-semibold text-[#6f665d]">
                        GitHub
                      </li>

                      <li className="whitespace-nowrap rounded-sm border border-gray-200 bg-[#f6f0e6] px-2 py-1 text-sm font-semibold text-[#6f665d]">
                        Vite
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-7">
                  <h4 className="text-md text-[#bf5b39] font-bold -mt-1 mb-2">
                    Currently Exploring
                  </h4>

                  <div>
                    <ul className="flex flex-wrap items-center gap-2 sm:flex-nowrap md:flex-nowrap lg:flex-nowrap">
                      <li className="whitespace-nowrap rounded-sm border border-gray-200 bg-[#f6f0e6] px-2 py-1 text-sm font-semibold text-[#6f665d]">
                        Node.js
                      </li>

                      <li className="whitespace-nowrap rounded-sm border border-gray-200 bg-[#f6f0e6] px-2 py-1 text-sm font-semibold text-[#6f665d]">
                        Express.js
                      </li>

                      <li className="whitespace-nowrap rounded-sm border border-gray-200 bg-[#f6f0e6] px-2 py-1 text-sm font-semibold text-[#6f665d]">
                        Backend Development
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </PageTransition>
  );
};

export default About;
