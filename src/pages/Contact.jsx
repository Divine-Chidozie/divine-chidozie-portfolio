import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { color } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [projectError, setProjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setProjectError("");
    setMessageError("");

    let isValid = true;

    if (!name.trim()) {
      setNameError("Please enter your name...");
      isValid = false;
    } else if (name.trim().length < 6) {
      setNameError("Opps! full name is required...");
      isValid = false;
    }

    if (!email.trim()) {
      setEmailError("Please enter your email address....");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address...");
      isValid = false;
    }

    if (!project.trim()) {
      setProjectError("Please select a project..");
      isValid = false;
    }

    if (!message.trim()) {
      setMessageError("Please enter a message");
      isValid = false;
    } else if (message.trim().length < 15 || message.trim().length === 15) {
      setMessageError("Your message must be 15 characters long..");
      isValid = false;
    }

    if (!isValid) return;
    console.log("Sucessful! Form Submitted");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError("");
  };

  return (
    <div className="bg-[#f6f0e6]">
      <Navbar />

      <main className="pt-20">
        <section className="mx-auto w-[90%] max-w-7xl py-24">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch">
            {/* first div */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="bg-[#fffaf0e6] py-8 px-6">
                <span className="uppercase text-xs font-mono text-[#bf5b39] font-extrabold">
                  Let's build
                </span>

                <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#3f3933] sm:text-4xl lg:text-5xl">
                  Bring the interface, product idea, or frontend challenge to
                  life.
                </h2>

                <p className="mt-5 text-base leading-8 text-[#6f665d]">
                  Send a message and i will get back to you. I build responsive
                  React applications, modern user interface, and reusable
                  component systems focused on clean strucuture and smooth
                  experiences.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="bg-[#fffaf0e6] p-6 h-full border rounded-lg border-gray-200">
                  <span className="text-[#bf5b39] font-bold text-md">
                    Email
                  </span>
                  <p className="mt-1 text-[#6f665d] font-bold text-sm">
                    igwedivine92@gmail.com
                  </p>
                </div>

                <div className="bg-[#fffaf0e6] p-6 h-full border rounded-lg border-gray-200">
                  <span className="text-[#bf5b39] font-bold text-md">
                    Phone
                  </span>
                  <p className="mt-1 text-[#6f665d] font-bold text-sm">
                    +234 814 244 3836
                  </p>
                </div>

                <div className="bg-[#fffaf0e6] p-6 h-full border rounded-lg border-gray-200">
                  <span className="text-[#bf5b39] font-bold text-md">
                    Location
                  </span>
                  <p className="mt-1 text-[#6f665d] font-bold text-sm">
                    Lagos, Nigeria
                  </p>
                </div>

                <div className="bg-[#fffaf0e6] p-6 h-full border rounded-lg border-gray-200">
                  <span className="text-[#bf5b39] font-bold text-md">
                    Portfolio
                  </span>
                  <p className="mt-1 text-[#6f665d] font-bold text-sm">
                    Myportfolio.com
                  </p>
                </div>
              </div>
            </div>

            {/* second div */}
            <div className="w-full lg:w-1/2 flex flex-col rounded-2xl bg-[#fffaf0e6] p-8">
              <div
                className="flex flex-col gap-2
          "
              >
                <span className="uppercase text-xs font-mono text-[#bf5b39] font-extrabold">
                  Quick Message
                </span>
                <p className="mt-1 text-2xl font-semibold leading-tight text-[#3f3933] sm:text-4xl lg:text-3xl">
                  Tell me what you need.
                </p>
              </div>

              {/* form */}
              {/* Form */}
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-[#17130f]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[#e6ddd3] bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-[#bf5b39] focus:ring-2 focus:ring-[#bf5b39]/10"
                  />

                  {nameError && (
                    <span className="text-red-700 text-xs mt-1 font-bold ">
                      {nameError}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[#17130f]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full  rounded-xl border border-[#e6ddd3] bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-[#bf5b39] focus:ring-2 focus:ring-[#bf5b39]/10"
                  />
                  {emailError && (
                    <span className="text-red-700 text-xs mt-1 font-bold ">
                      {emailError}
                    </span>
                  )}
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="project"
                    className="mb-2 block text-sm font-semibold text-[#17130f]"
                  >
                    Project Type
                  </label>

                  <select
                    id="project"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    className="w-full rounded-xl border border-[#e6ddd3] bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-[#bf5b39] focus:ring-2 focus:ring-[#bf5b39]/10"
                  >
                    <option value="">Select one</option>
                    <option>Landing Page</option>
                    <option>Portfolio Website</option>
                    <option>Business Website</option>
                    <option>React Web Application</option>
                    <option>Frontend Collaboration</option>
                    <option>Job Opportunity</option>
                  </select>

                  {projectError && (
                    <span className="text-red-700 text-xs mt-1 font-bold ">
                      {projectError}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-[#17130f]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    placeholder="Tell me about your project, idea, timeline, or anything you'd like me to know."
                    className="w-full resize-none rounded-xl border border-[#e6ddd3] bg-white px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-[#bf5b39] focus:ring-2 focus:ring-[#bf5b39]/10"
                  ></textarea>

                  {messageError && (
                    <span className="text-red-700 text-xs mt-1 font-bold">
                      {messageError}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[#17130f] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2d2823]"
                >
                  Send Message
                </button>

                {/* <p className="text-center text-xs leading-6 text-[#6f665d]">
                  This form is powered by FormSubmit and delivers messages
                  directly to my inbox.
                </p> */}
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
