import Navbar from "../../components/Navbar";

import ProjectHero from "../../components/eventConnect/ProjectHero";
import Challenge from "../../components/eventConnect/Challenge";
import Solution from "../../components/eventConnect/Solution";
import Features from "../../components/eventConnect/Features";
import ProjectGallery from "../../components/eventConnect/ProjectGallery";
import TechStack from "../../components/eventConnect/TechStack";
import DevelopmentProcess from "../../components/eventConnect/DevelopmentProcess";
import ProjectOutcome from "../../components/eventConnect/ProjectOutcome";
import CTA from "../../components/eventConnect/CTA";

const EventConnect = () => {
  return (
    <div className="bg-[#f6f0e6]">
      <Navbar />

      <main>
        <ProjectHero />
        <Challenge />
        <Solution />
        <Features />
        <ProjectGallery />
        <DevelopmentProcess />
        <TechStack />
        <ProjectOutcome />
        <CTA />
      </main>
    </div>
  );
};

export default EventConnect;
