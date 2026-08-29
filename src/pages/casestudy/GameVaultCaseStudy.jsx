import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import PageTransition from "../../components/PageTransition";
import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

export default function GameVaultCaseStudy() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#f6f0e6]">
        <Navbar />

        <main className="pt-28 mx-auto w-[90%] max-w-7xl py-10">
          <div className="mb-4">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#6f665d] transition hover:text-[#17130f]"
            >
              <FaArrowLeft className="text-xs" />
              Back to Work
            </Link>
          </div>

          {/* GameVault Heading Summary */}
          <section className="mb-2 mt-2">
            <div className="grid grid-cols-1 gap-3 w-full md:grid md:grid-cols-3 lg:grid lg:grid-cols-3">
              {/* heading and summary */}
              <div className="p-4">
                <h1 className="font-mono text-xs mb-2 font-bold uppercase tracking-[0.2em] text-[#bf5b39] mt-2 space-x-1">
                  GameVault
                </h1>
                <p className="mt-3 text-base text-[#6f665d]">
                  Multi-Category Gaming E-commerce Platform
                </p>

                <p className="mt-2 text-base leading-6 text-[#6f665d]">
                  A frontend-focused gamming commerce experience built around
                  product discovery, account authentication, product details,
                  cart management, checkout, order tracking, and a customer
                  dashboard
                </p>
              </div>

              {/* roles */}
              <div className="p-4 border border-[#fffaf0e6] rounded-2xl shadow bg-[#fffaf0e6]">
                <div className="flex justify-start items-center gap-1">
                  <h2 className="font-mono text-xs mb-2 font-bold uppercase tracking-[0.2em] text-[#bf5b39] mt-2 space-x-1">
                    Role
                  </h2>
                  <h3 className="text-xs font-mono font-bold">
                    Frontend Developer
                  </h3>
                </div>

                <div>
                  <p className="text-sm text-[#bf5b39] font-bold underline underline-offset-1">
                    Year
                  </p>
                  <p className="text-sm  text-[#6f665d]">2025</p>
                </div>

                <div>
                  <p className="text-sm text-[#bf5b39] font-bold underline underline-offset-1">
                    Stack
                  </p>
                  <ul>
                    <li className="text-xs text-[#6f665d] sm:text-sm">React</li>
                    <li className="text-xs text-[#6f665d] sm:text-sm">
                      JavaScript
                    </li>
                    <li className="text-xs text-[#6f665d] sm:text-sm">
                      Tailwind CSS
                    </li>
                    <li className="text-xs text-[#6f665d] sm:text-sm">
                      React Router
                    </li>
                    <li className="text-xs text-[#6f665d] sm:text-sm">Aos</li>
                    <li className="text-xs text-[#6f665d] sm:text-sm">
                      LocalStorage
                    </li>
                  </ul>
                </div>
              </div>

              {/* Focus */}
              <div className="p-4 border border-gray-300 rounded-2xl shadow bg-[#17130f]">
                <h2 className="font-mono text-xs mb-2 font-bold uppercase tracking-[0.2em] text-[#bf5b39] mt-2 space-x-1">
                  Focus
                </h2>
                <ul>
                  <li className="text-xs text-[#6f665d] sm:text-sm">
                    E-commerce Experience
                  </li>
                  <li className="text-xs text-[#6f665d] sm:text-sm">
                    GameVault
                  </li>
                  <li className="text-xs text-[#6f665d] sm:text-sm">Users</li>
                  <li className="text-xs text-[#6f665d] sm:text-sm">
                    Products
                  </li>
                  <li className="text-xs text-[#6f665d] sm:text-sm">Orders</li>
                  <li className="text-xs text-[#6f665d] sm:text-sm">
                    Accounts
                  </li>
                  <li className="text-xs text-[#6f665d] sm:text-sm">
                    Dashboard
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* GameVault Challenge Section || Solution Section */}
          <section className="mb-5">
            <div className="mt-8 flex flex-col justify-between gap-3 sm:flex-col md:flex-row lg:flex-row">
              {/* challenge */}
              <div className=" border-[#fffaf0e6] rounded-md shadow bg-[#fffaf0e6] p-4">
                <h2 className="font-mono text-xs mb-2 font-bold uppercase tracking-[0.2em] text-[#bf5b39] mt-2 space-x-1">
                  Challenge
                </h2>
                <p className="mt-3 text-base leading-7 text-[#6f665d]">
                  Gaming products were presented as a broad catalogue spanning
                  consoles, controllers, headsets, storage, virtual-reality
                  equipment, and gaming accessories.The challenge was to
                  organize these products into an experience where users could
                  quickly discover items, inspect its details, select a
                  quantity, and move into the purchasing flow without losing
                  context.
                </p>

                <p className="mt-3 text-base leading-7 text-[#6f665d]">
                  The application also needed to distinguish between the
                  shopping experience and account-related workflows, including
                  registration, authentication, order history, and account
                  information.
                </p>
              </div>

              {/* solution */}
              <div className="bg-[f6f0e6] p-4">
                <h2 className="font-mono text-xs mb-2 font-bold uppercase tracking-[0.2em] text-[#bf5b39] mt-2 space-x-1">
                  Solution
                </h2>
                <p className="mt-3 text-base leading-7 text-[#6f665d]">
                  I built the storefront as a Front application with reusable
                  product-driven views and client-side routing connecting the
                  major commerce workflows.
                </p>

                <p className="mt-3 text-base leading-7 text-[#6f665d]">
                  Products are represented through structured data containing
                  their name, price, category, image, description, and
                  specifications. Category filtering and product details are
                  passed through the route stage to populate a dedicated product
                  page.
                </p>

                <p className="mt-3 text-base leading-7 text-[#6f665d]">
                  The shopping flow was extended with browser-based persistence
                  for cert items, checkout items, registered users, signed-in
                  users, and orders, allowing the application to retain state
                  between pages and browser sessions without requiring a backend
                  services.
                </p>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section className="mb-2 mt-12">
            <h2 className="font-mono text-xs mb-2 font-bold uppercase tracking-[0.2em] text-[#bf5b39] mt-2 space-x-1">
              Key Features
            </h2>

            <div className="grid grid-cols-1 gap-3 w-full md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 flex-wrap">
              <div className="">
                <h3 className="text-xs font-mono font-semibold mb-1 uppercase text-[#bf5b39] mt-2">
                  Product Discovery
                </h3>
                <ul>
                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Gaming products organized across consoles, controllers,
                    headsets, accessories, storage, and virtual reality.
                  </li>

                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Category-based filtering for consoles, controllers,
                    headsets, virtual reality, storage, and accessories.
                  </li>

                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Product search based on product name
                  </li>

                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Product cards linked directly to individual product-detail
                    views.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-mono font-semibold mb-1 uppercase tracking-[0.2em] text-[#bf5b39] mt-2">
                  Product Details
                </h3>
                <ul>
                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Dedicated product pages containing product imagery, pricing,
                    availability, description, categories, and specification.
                  </li>

                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Quantity controls for increasing or descreasing the
                    requested quantity.
                  </li>

                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Add to cart functionality with duplicate-product quantity
                    handling.
                  </li>

                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Buy now flow that stores the selected product and quantity
                    before navigating to checkout.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-mono font-semibold mb-1 uppercase tracking-[0.2em] text-[#bf5b39] mt-2">
                  Authentication
                </h3>
                <ul>
                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Registration form with validation
                  </li>

                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Client-side validation
                  </li>

                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Existing-account detection
                  </li>

                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Sign-in validation against registered account data
                  </li>

                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Authentication state stored through localstorage
                  </li>

                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Logout flow clears active sign-in state
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-mono font-semibold mb-1 uppercase tracking-[0.2em] text-[#bf5b39] mt-2">
                  Customer Dashboard
                </h3>
                <ul>
                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Personalized account header using the registered user's
                    information
                  </li>

                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Total order count
                  </li>

                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Cart item count
                  </li>

                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Total amount spent
                  </li>

                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Account information section
                  </li>

                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Recent order table containing order ID, status, amount, and
                    data
                  </li>

                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Direct navigation back to store when no order exist
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-mono font-semibold mb-1 uppercase tracking-[0.2em] text-[#bf5b39] mt-2">
                  UI experience
                </h3>
                <ul>
                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Responsive product grid across mobile, tablet, and desktop
                    breakpoints.
                  </li>
                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Animated pages sections using AOS.
                  </li>
                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    React Router navigation between authentication, shopping,
                    product, checkout, order, and dashboard view.
                  </li>
                  <li className="text-base leading-5 mb-1 text-[#6f665d]">
                    Consistent Tailwind CSS styling across the storefront and
                    account experience.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Impact Section || Technical Decision Section */}
          <section className="mt-8 flex flex-col justify-between gap-3 sm:flex-col md:flex-row lg:flex-row">
            {/* <div> */}
            {/* imapct */}
            <div>
              <h2 className="font-mono text-xs mb-2 font-bold uppercase tracking-[0.2em] text-[#bf5b39] mt-2 space-x-1">
                Impact
              </h2>
              <div>
                <p className=" text-base leading-6 text-[#6f665d] mb-1">
                  Turned a static gaming catalogue into a connected commerce
                  flow covering product discovery, authentication, cart
                  interaction, checkout initiation, order history, and account
                  management
                </p>
              </div>

              <div>
                <p className="text-base text-[#6f665d]">Structured products</p>
                <p className="text-base  text-[#6f665d]">
                  Client-side persistence
                </p>
                <p className="text-base text-[#6f665d]">
                  Authenication & account flow
                </p>
              </div>
            </div>

            {/* technical decision */}
            <div className="flex flex-col flex-wrap lg:flex lg:flex-col">
              <h2 className="font-mono text-xs mb-2 font-bold uppercase tracking-[0.2em] text-[#bf5b39] mt-2 space-x-1">
                Techincal Decision
              </h2>

              <div>
                <h3 className="text-[15px] font-bold text-black">
                  Structured product model
                </h3>
                <p className="text-base leading-6 text-[#6f655d]">
                  Each product is represented with a consistent object structure
                  containing:
                </p>

                <ul>
                  <li className="text-sm text-[#6f665d] mt-1 mb-1">
                    Product indentity
                  </li>
                  <li className="text-sm text-[#6f665d] sm:text-sm mb-1">
                    Product image
                  </li>
                  <li className="text-sm text-[#6f665d] sm:text-sm mb-1">
                    Product name
                  </li>
                  <li className="text-sm text-[#6f665d] sm:text-sm mb-1">
                    Price
                  </li>
                  <li className="text-sm text-[#6f665d] sm:text-sm mb-1">
                    Category
                  </li>
                  <li className="text-sm text-[#6f665d] sm:text-sm mb-1">
                    Description
                  </li>
                  <li className="text-sm text-[#6f665d] sm:text-sm mb-1">
                    Specifications
                  </li>
                  <li className="text-sm text-[#6f665d] sm:text-sm mb-1">
                    Alternative text
                  </li>
                </ul>
              </div>

              <div className="mt-3">
                <p className="text-base leading-6 text-[#6f655d]">
                  These allows the same product data to drive both the shop and
                  product details views rather than maintaining separate markup
                  for every product
                </p>
              </div>

              <div className="mt-3">
                <h3 className="text-[15px] font-bold text-black">
                  Client-side state persistence
                </h3>
                <p className="text-base leading-6 text-[#6f655d]">
                  Localstorage was used to maintain application data across
                  navigation and browser refreshes
                </p>
              </div>

              <div className="mt-3">
                <p className="text-base leading-6 text-[#6f655d]">
                  The implementation currently persists:
                </p>
                <ul>
                  <li className="text-xs text-[#6f665d] sm:text-sm">user</li>
                  <li className="text-xs text-[#6f665d] sm:text-sm">
                    userSignIn
                  </li>
                  <li className="text-xs text-[#6f665d] sm:text-sm">
                    cartItems
                  </li>
                  <li className="text-xs text-[#6f665d] sm:text-sm">
                    checkoutItem
                  </li>
                  <li className="text-xs text-[#6f665d] sm:text-sm">orders</li>
                </ul>

                <p className="text-base leading-6 text-[#6f655d]">
                  This made it possible to demostrate a complete commerce
                  workflow without introducing a backend or database into the
                  current implementation.
                </p>
              </div>

              <div className="mt-3">
                <h3 className="text-[15px] font-bold text-black">
                  Route-based product navigation
                </h3>
                <p className="text-base leading-6 text-[#6f655d]">
                  Instead of creating a separate page component for every
                  product, the application navigates to a shared product route.
                </p>
              </div>
            </div>
            {/* </div> */}
          </section>

          {/* Commerce Flow Section || Built Section */}
          <section className="rounded-sm border border-[#e8dfd3] bg-[#fffaf0e6] p-4 sm:p-5 mt-7">
            {/* commerce flow */}
            <div className="flex  justify-between items-start">
              <h2 className="mt-1 font-mono text-xs font-extrabold uppercase tracking-[0.2em] text-[#bf5b39]">
                Commerce Flow
              </h2>

              <div className="flex flex-col justify-start bg-[#17130f] px-3">
                <h5 className="text-sm text-[#fffaf0] font-bold italic mt-3">
                  Browse → Filter/Search → Product Details → Select Quantity →
                  Add to Cart / Buy Now → Checkout → Order → Dashboard
                </h5>

                <p className="text-[#6f655d] text-sm pb-2">
                  This keeps the core customer journey connected while allowing
                  each stage of the application to remain independently
                  structured.
                </p>
              </div>
            </div>

            {/* Built */}
            <div className="mt-8 grid grid-cols-1 lg:grid lg:grid-cols-5 items-start gap-3">
              <div>
                <h2 className="font-mono text-xs font-extrabold uppercase tracking-[0.2em] text-[#bf5b39]">
                  Built
                </h2>
              </div>

              <div className="">
                <h3 className="text-[15px] font-bold text-black">
                  Frontend architecture
                </h3>
                <p className="text-[#6f655d] text-sm pb-2">
                  React-based component structure for a storefront,
                  authentication, product views, dashboard, cart, checkout, and
                  order workflows.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-bold text-black">
                  Product experience
                </h3>
                <p className="text-[#6f655d] text-sm pb-2">
                  A structured catalogue with category filtering, search,
                  dynamic product pages, specifications, quantity management,and
                  purchasing actions.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-bold text-black">
                  Account experience
                </h3>
                <p className="text-[#6f655d] text-sm pb-2">
                  Registration, sign-out, logout, account information, order
                  statistics, and recent-order views.
                </p>
              </div>

              <div>
                <h3 className="text-[15px] font-bold text-black">
                  Commerce state
                </h3>
                <p className="text-[#6f655d] text-sm pb-2">
                  Client-side persistence for registered users, active sessions,
                  cart contents, checkout selections, and orders.
                </p>
              </div>
            </div>
          </section>

          {/* Current Scope Section || Page Structure Section */}
          <section className="mt-8 flex flex-col justify-between items-center gap-3 sm:flex-col md:flex-row lg:flex-row">
            {/* currrent scope */}
            <div>
              <h2 className="font-mono text-xs mb-2 font-bold uppercase tracking-[0.2em] text-[#bf5b39] mt-2 space-x-1">
                Current Scope
              </h2>

              <h3 className="text-[15px] font-bold text-black">
                Frontend commerce prototype
              </h3>
              <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                The current implementation is intentionally client-side.
                Authentication, cart persistence, checkout state, and order data
                are handled through browser storage rather than a production
                backend.
              </p>

              <p className="max-w-xl text-sm leading-6 text-[#6f665d] sm:text-base sm:leading-7">
                The architecture leaves room for a subsequent backend layer
                covering persistent users, inventory, payments, order
                processing, and server-side authentication.
              </p>
            </div>

            <div>
              <p className="max-w-xl text-sm leading-5 text-[#6f665d] sm:text-base sm:leading-4">
                want to explore the build or discuss a similar commerce
                experience?
              </p>

              <a href="#" className="text-blue-600 text-sm">
                Start a conversation
              </a>
            </div>
          </section>
        </main>
      </div>
      {/* <Footer /> */}
    </PageTransition>
  );
}
