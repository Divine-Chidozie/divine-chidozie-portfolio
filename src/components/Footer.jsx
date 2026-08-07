import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer className="border-t border-[#ebe7e3] bg-[#17130f]">
      <div className="mx-auto flex w-[90%] max-w-7xl flex-col items-center justify-between gap-8 py-3 text-center md:flex-row md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-ms font-bold text-white">Divine Chidozie</h2>

          <p className="mt-2 text-xs text-[#d9ccbb]">
            Building thoughtful web applications with clean and maintainable
            solutions.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Divine-Chidozie"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#d9ccbb] p-2 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <img src={github} alt="Github" className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#d9ccbb] p-2 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <img src={linkedin} alt="LinkedIn" className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-[#d9ccbb]">
          © 2026 Divine Chidozie. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
