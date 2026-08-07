import divinechidozie from "../assets/images/divinechidozie.png";
const Hero = () => {
  return (
    <section className="w-[90%]">
      {/* Hero Container */}
      <div className="mt-10 flex justify-between items-center">
        {/* Hero-heading-description */}
        <div>
          <span>About Divine</span>

          <h1>
            I build interfaces that feel intuitive to use and thoughtfully
            crafted behind the scenes
          </h1>

          <p>
            I work across interface design, component architecture, responsive
            layouts, accessibilty, and frontend development. My best work
            happens where thoughtful design meets clean implementation, creating
            experiences that are both functional and enjoyable to use
          </p>

          <p>
            I care about reusable components, maintainable code, consistent user
            experiences, and interfaces that adapt naturally across different
            devices and screen sizes. I belive thoughtful engineering isn't just
            about how software works—it's about how people experience it
          </p>
        </div>

        {/* Hero Image container */}
        <div>
          <img src={divinechidozie} alt="Divine Image" className="w-80" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
