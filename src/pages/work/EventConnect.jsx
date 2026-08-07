import Navbar from "../../components/Navbar";

import ProjectHero from "../../components/eventconnect/ProjectHero";
import Challenge from "../../components/eventconnect/Challenge";
import Solution from "../../components/eventconnect/Solution";
import Features from "../../components/eventconnect/Features";
import ProjectGallery from "../../components/eventconnect/ProjectGallery";
import TechStack from "../../components/eventconnect/TechStack";
import DevelopmentProcess from "../../components/eventconnect/DevelopmentProcess";
import ProjectOutcome from "../../components/eventconnect/ProjectOutcome";
import CTA from "../../components/eventconnect/CTA";

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
