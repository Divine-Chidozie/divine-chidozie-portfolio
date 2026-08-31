import { Link } from "react-router-dom";

import divinechidozie from "../assets/images/divinechidozie.png";

export default function Hero() {
  return (
    <section className="mx-auto w-[90%] max-w-7xl pt-14 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-24">
      <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-between md:gap-10 lg:gap-16">
        {/* Content */}
        <div className="max-w-2xl text-center md:flex-1 md:text-left">
          <span className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#bf5b39]">
            Hello, I am
          </span>

          <h1 className="mt-4 text-5xl font-bold leading-tight text-[#17130f] sm:text-6xl lg:text-7xl">
            Divine Chidozie
          </h1>

          <h2 className="mt-5 text-xl font-medium leading-8 text-[#3f3933] sm:mt-6 sm:text-2xl sm:leading-9 lg:text-3xl lg:leading-10">
            Responsive interfaces shaped by clarity, consistency, and thoughtful
            engineering.
          </h2>

          <p className="mt-4 text-base leading-7 text-[#6f665d] sm:mt-6 sm:text-lg sm:leading-8">
            I value thoughtful structure, reusable components, and experiences
            that feel consistent across every screen. My work is guided by
            simplicity, attention to detail, and code that's built to remain
            clear and maintainable.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
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
        <div className="relative flex w-full justify-center md:flex-1">
          {/* Image Card */}
          <div className="w-full rounded-2xl border border-[#f6f0e6] bg-[#f6f0e6] p-3 shadow-2xl sm:p-4 md:w-auto">
            <img
              src={divinechidozie}
              alt="Portrait of Divine Chidozie"
              loading="eager"
              className="w-full max-w-full object-contain sm:w-72 md:w-80 lg:w-105 xl:w-117.5"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-8 left-1/2 w-[90%] max-w-[300px] -translate-x-1/2 rounded-2xl border border-[#ebe7e3] bg-white p-5 shadow-xl md:-bottom-5 md:-right-8 md:left-auto md:w-75 md:max-w-none md:translate-x-0">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>

                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              </span>

              <h3 className="text-sm font-bold text-[#17130f]">
                Frontend Engineer
              </h3>
            </div>

            <p className="mt-3 text-sm font-semibold leading-6 text-[#6f665d]">
              Thoughtful design, reusable components, responsive layouts, and
              interfaces built with clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
