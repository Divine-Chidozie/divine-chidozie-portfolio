// CHUCKS KITCHEN = FULL CASE STUDY

import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import PageTransition from "../../components/PageTransition";
import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

export default function ChucksKitchenCaseStudy() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#f6f0e6]">
        <Navbar />

        <main className="pt-28 mx-auto w-[90%] max-w-7xl py-10">
          <div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#6f665d] transition hover:text-[#17130f]"
            >
              <FaArrowLeft className="text-xs" />
              Back to Work
            </Link>
          </div>

          {/* Case Study Chucks  */}
          <section className="mt-8 flex flex-col justify-between gap-3 sm:flex-col md:flex-row lg:flex-row">
            {/* Chucks Heading and Description */}
            <div className="p-4 border border-[#fffaf0e6] rounded-2xl shadow bg-[#fffaf0e6]">
              <div>
                <h1 className="mt-4 text-4xl font-bold text-[#17130f] sm:text-4xl">
                  Chuck's Kitchen
                </h1>
                <h2 className="font-mono text-xs mb-2 font-bold uppercase tracking-[0.2em] text-[#bf5b39] mt-2 space-x-1">
                  Restaurant Platform
                </h2>
              </div>

              <div>
                <span className="text-md text-[#6f665d]">
                  Frontend Developer · 2026
                </span>
              </div>

              <div>
                <p className="mt-3  text-base leading-7 text-[#6f665d]">
                  Chuck's Kitchen is a resturant website created to give the
                  brand a clear and engaging digital presence while making it's
                  food offering easy for customers to explore. The experience
                  combines strong food imagery, structured content, navigation,
                  and responsive layouts to create a website that feels
                  connected to the restaurant rather then simply presenting
                  information on a page.
                </p>
                <p className="mt-3  text-base leading-7 text-[#6f665d]">
                  The project focused on turning a resturant concept into a
                  complete web experience - from the first interaction with the
                  brand to exploring the menu and discovering what Chuck's
                  Kitchen has to offer.
                </p>
              </div>
            </div>

            {/* The Experience */}
            <div className="p-4 border border-gray-300 rounded-2xl shadow bg-[#17130f]">
              <div>
                <h2 className="mt-4 text-2xl font-bold text-[#fffaf0] sm:text-2xl">
                  The Experience
                </h2>

                <p className="mt-3  text-base leading-7 text-[#6f665d]">
                  A resturant website has a different job from a typical
                  business website. The interface needs to communicate the
                  character of the resturant quickly while making important
                  information easy to find.
                </p>

                <p className="mt-3  text-base leading-7 text-[#6f665d]">
                  For Chuck's Kitchen, the experience was structured around that
                  balance. Visual content helps establish the atmostphere and
                  indentity of the resturant, while the layout keeps navigation,
                  menu information, and important actions accessible without
                  making the interface feel crowded.
                </p>

                <p>
                  The goal was to create an experience that feels simple to use
                  but still gives the resturant a distinct visual identity.
                </p>
              </div>
            </div>
          </section>

          {/* Challenge & Approch Section */}
          <section className="pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-10 lg:pb-10">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              {/* Challenge */}
              <div className="w-full lg:w-2/3 bg-[#fffaf0e6] p-4 border border-[#fffaf0e6] rounded-sm min-h-max">
                <div>
                  <h2 className="font-mono text-xs font-extrabold uppercase text-[#bf5b39] sm:text-xs mb-2">
                    The Challenge
                  </h2>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    The challenge was to present a food-focused brand through a
                    digital interface
                  </p>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    Restaurant websites often contain a lot of information —
                    menus, food categories, descriptions, images, calls to
                    action, and supporting content. If these elements compete
                    for attention, users can quickly lose sight of what matters.
                  </p>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    The interface therefore needed a clear visual hierarchy,
                    consistent spacing, readable typography, and layouts that
                    allowed the food itself to remain one of the main visual
                    elements.
                  </p>
                </div>
              </div>

              {/* Approch */}
              <div className="w-full lg:w-2/3 bg-[#fffaf0e6] p-4 border border-[#fffaf0e6] rounded-sm min-h-min">
                <div>
                  <h2 className="font-mono text-xs font-extrabold uppercase text-[#bf5b39] sm:text-xs mb-2">
                    The Approch
                  </h2>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    I approached the project from the prespective of the
                    customer rather than simply building individual sections.
                  </p>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    The experience was organized so that users could understand
                    the restaurant, discover its offerings, explore the menu,
                    and move through the website without unnecessary friction.
                  </p>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    Reusable interface patterns were used throughout the project
                    to keep the different sections visually consistent while
                    still allowing each part of the website to serve a specific
                    purpose.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Branding and Menu section */}
          <section className="pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-10 lg:pb-10">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              {/* Challenge */}
              <div className="w-full lg:w-2/3 bg-[#fffaf0e6] p-4 border border-[#fffaf0e6] rounded-sm min-h-max">
                <div>
                  <h2 className="font-mono text-xs font-extrabold uppercase text-[#bf5b39] sm:text-xs mb-2">
                    Branding & Visiual Design
                  </h2>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    Food is inherently visiual, so the design needed to give
                    imagery enough space to communicate the restaurant's
                    offerning.
                  </p>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    The interface uses visiual hierarchy to distinguish
                    majorsections from supporting information, while typograpgy,
                    spacing, button, cards, and centent blocks work together to
                    create a consistent visiual rythm throughout the experience.
                  </p>
                </div>
              </div>

              {/*Menu */}
              <div className="w-full lg:w-2/3 bg-[#fffaf0e6] p-4 border border-[#fffaf0e6] rounded-sm min-h-min">
                <div>
                  <h2 className="font-mono text-xs font-extrabold uppercase text-[#bf5b39] sm:text-xs mb-2">
                    Menu Experience
                  </h2>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    The menu is one of the most important part of a restaurant
                    website because customers need to understand what is
                    available qucikly.
                  </p>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    The Chuck's Kitchen experience presents offering in a
                    structured way, allowing users to move through the available
                    content without having to search through large blocks of
                    information.
                  </p>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    Food names, description, imagery, and supporting information
                    are presented with enough separation to make the content
                    easy to scan while maintaining the visiual character of the
                    restaurant.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation Flow & Responsive Design Section */}
          <section className="pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-10 lg:pb-10">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              {/* Challenge */}
              <div className="w-full lg:w-2/3 bg-[#fffaf0e6] p-4 border border-[#fffaf0e6] rounded-sm min-h-max">
                <div>
                  <h2 className="font-mono text-xs font-extrabold uppercase text-[#bf5b39] sm:text-xs mb-2">
                    Navigation & User Flow
                  </h2>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    The navigation was designed around the way a potential
                    customer naturally explores a restaurant website.
                  </p>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    Instead of requiring users to understand the structure of
                    the website first, the interface guides them through the
                    most relevant information using familiar navigation patterns
                    and clear calls to action.
                  </p>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    This creates a straightforward journey from discovering the
                    restaurant to exploring its offerings and taking the next
                    action.
                  </p>
                </div>
              </div>

              {/* Responsive Design*/}
              <div className="w-full lg:w-2/3 bg-[#fffaf0e6] p-4 border border-[#fffaf0e6] rounded-sm min-h-min">
                <div>
                  <h2 className="font-mono text-xs font-extrabold uppercase text-[#bf5b39] sm:text-xs mb-2">
                    Responsive Design
                  </h2>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    The website was designed to work across different screen
                    sizes rather than treating the desktop layout as the only
                    primary experience.
                  </p>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    On smaller screens, layouts, spacing, typography,
                    navigation, and content widths adapt to preserve readability
                    and usability.
                  </p>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    Food imagery and content sections were also structured to
                    remain visually balanced when moving between larger and
                    smaller displays.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Building Interface & Frontend Implementation Section */}
          <section className="pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-10 lg:pb-10">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              {/* Challenge */}
              <div className="w-full lg:w-2/3 bg-[#fffaf0e6] p-4 border border-[#fffaf0e6] rounded-sm min-h-max">
                <div>
                  <h2 className="font-mono text-xs font-extrabold uppercase text-[#bf5b39] sm:text-xs mb-2">
                    Building the Interface
                  </h2>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    I built the interface using a component-based approach,
                    breaking the experience into reusable sections and UI
                    elements rather than treating each page as an isolated
                    design.
                  </p>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    This made it easier to maintain consistent patterns across
                    the website and refine individual sections without affecting
                    the entire interface.
                  </p>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    The implementation also focused on keeping the structure
                    clear and maintainable as the project developed.
                  </p>
                </div>
              </div>

              {/* Frontend Implementation */}
              <div className="w-full lg:w-2/3 bg-[#fffaf0e6] p-4 border border-[#fffaf0e6] rounded-sm min-h-min">
                <div>
                  <h2 className="font-mono text-xs font-extrabold uppercase text-[#bf5b39] sm:text-xs mb-2">
                    Frontend Implementation
                  </h2>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    The frontend work involved translating the restaurant's
                    visual direction into functional web interfaces while
                    maintaining responsive behavior across screen sizes.
                  </p>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    This included structuring page sections, creating reusable
                    components, implementing navigation, styling content and
                    food presentation areas, and refining spacing and responsive
                    behavior.
                  </p>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                    The focus throughout the implementation was on creating an
                    interface that feels polished without sacrificing simplicity
                    or usability.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="pt-6 pb-8 sm:pt-8 sm:pb-6 lg:pt-6 lg:pb-6 flex flex-col bg-[#fffaf0e6] p-4 border border-[#fffaf0e6] rounded-sm min-h-min">
            <h2 className="font-mono text-xs font-extrabold uppercase tracking-[0.2em] text-[#bf5b39] mt-2 space-x-1 text-center mb-2">
              Key Features
            </h2>

            <div className="grid grid-cols-1 mt-2 gap-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-6">
              <div className="border p-2 border-gray-300 rounded-md shadow">
                <h4 className="text-sm font-semibold">
                  {" "}
                  Restaurant Presentation
                </h4>
                <p className="text-xs leading-5 text-[#6f665d] sm:text-sm mt-1 sm:leading-5">
                  A visual introduction to Chuck's Kitchen that establishes the
                  restaurant's identity and gives visitors an immediate
                  understanding of the brand.
                </p>
              </div>

              <div className="border p-2 border-gray-300 rounded-md shadow">
                <h4 className="text-sm font-semibold">Menu Browsing</h4>
                <p className="text-xs leading-5 text-[#6f665d] sm:text-sm mt-1 sm:leading-5">
                  Structured presentation of the restaurant's menu offering,
                  making dishes and supporting information easier to explore.
                </p>
              </div>

              <div className="border p-2 border-gray-300 rounded-md shadow">
                <h4 className="text-sm font-semibold">
                  Food-Focused Interface
                </h4>
                <p className="text-xs leading-5 text-[#6f665d] sm:text-sm mt-1 sm:leading-5">
                  Layouts designed to give imagery and menu content enough
                  visual importance without overwhelming the rest of the
                  interface.
                </p>
              </div>

              <div className="border p-2 border-gray-300 rounded-md shadow">
                <h4 className="text-sm font-semibold">Clear Navigation</h4>
                <p className="text-xs leading-5 text-[#6f665d] sm:text-sm mt-1 sm:leading-5">
                  Straightforward navigation that allows visitors to move
                  between the major areas of the website without unnecessary
                  complexity.
                </p>
              </div>

              <div className="border p-2 border-gray-300 rounded-md shadow">
                <h4 className="text-sm font-semibold">Rexponsive Layouts</h4>
                <p className="text-xs leading-5 text-[#6f665d] sm:text-sm mt-1 sm:leading-5">
                  Content and interface elements adopt across desktop, tablet,
                  and mobile screen sizes while maintaining a consistent visual
                  language.
                </p>
              </div>

              <div className="border p-2 border-gray-300 rounded-md shadow">
                <h4 className="text-sm font-semibold">Reusable Components</h4>
                <p className="text-xs leading-5 text-[#6f665d] sm:text-sm mt-1 sm:leading-5">
                  Reusable interface patterns help maintain consistency across
                  sections and make the frontend easier to extend and maintain.
                </p>
              </div>
            </div>
          </section>

          {/* Technology */}
          <section className="rounded-sm border border-[#e8dfd3] bg-[#fffaf0e6] p-4 sm:p-5">
            <h3 className="mt-1 font-mono text-xs font-extrabold uppercase tracking-[0.2em] text-[#bf5b39]">
              Technology
            </h3>

            <p className="text-[#6f665d] text-sm mt-1">
              The project was developed using the technologies and tools used
              throughout the implementation to create the responsive restaurant
              experience.
            </p>

            <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
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
}
