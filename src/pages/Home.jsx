import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowIWork from "../components/HowIWork";
import FeaturedProject from "../components/FeaturedProject";
import PageTransition from "../components/PageTransition";

import Footer from "../components/Footer";

const Home = () => {
  return (
    <PageTransition>
      <div className="bg-[#f6f0e6]">
        <Navbar />
        <main>
          <Hero />
          <HowIWork />
          <FeaturedProject />
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Home;
