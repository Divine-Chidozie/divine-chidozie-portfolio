import { Link } from "react-router-dom";

import divinechidozie from "../assets/images/divinechidozie.png";

export default function Hero() {
  return (
    <section className="w-[90%] max-w-7xl mx-auto py-16 lg:py-24">
      <div className="flex flex-col-reverse items-center gap-16 lg:flex-row lg:justify-between">
        {/* Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <span className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#bf5b39]">
            Hello, I am
          </span>

          <h1 className="mt-4 text-5xl font-bold leading-tight text-[#17130f]  sm:text-6xl lg:text-7xl">
            Divine Chidozie
          </h1>

          <h2 className="mt-6 text-xl font-medium leading-10 text-[#3f3933] sm:text-2xl lg:text-3xl">
            Responsive interfaces shaped by clarity, consistency, and thoughtful
            engineering.
          </h2>

          <p className="mt-7 text-base leading-8 text-[#6f665d] sm:text-lg">
            I value thoughtful structure, reusable components, and experiences
            that feel consistent across every screen. My work is guided by
            simplicity, attention to detail, and code that's built to remain
            clear and maintainable.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/work"
              className="rounded-xl bg-[#17130f] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2d2823]"
            >
              View Work
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-[#17130f] px-6 py-3 text-sm font-semibold text-[#17130f] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#17130f] hover:text-white"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center">
          {/* Image Card */}
          <div className="rounded-2xl border border-[#f6f0e6] bg-[#f6f0e6] p-4 shadow-2xl">
            <img
              src={divinechidozie}
              alt="Portrait of Divine Chidozie"
              loading="eager"
              className="w-64 object-contain sm:w-72 md:w-80 lg:w-105 xl:w-117.5"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-8 left-1/2 w-75 -translate-x-1/2 rounded-2xl border border-[#ebe7e3] bg-white p-5 shadow-xl lg:-bottom-5 lg:-right-8 lg:left-auto lg:translate-x-0">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              </span>

              <h3 className="text-sm font-bold text-[#17130f]">
                Frontend Engineer
              </h3>
            </div>

            <p className="mt-3 text-sm leading-6 text-[#6f665d] font-semibold">
              Thoughtful design, reusable components, responsive layouts, and
              interfaces built with clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
