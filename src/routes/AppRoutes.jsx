import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import About from "../pages/About";

import EventConnect from "../pages/work/EventConnect";

import EventConnectCaseStudy from "../pages/casestudy/EventConnectCaseStudy";
import ChucksKitchenCaseStudy from "../pages/casestudy/ChucksKitchenCaseStudy";
import PaucekDeliveriesCaseStudy from "../pages/casestudy/PaucekDeliveriesCaseStudy";
import GameVaultCaseStudy from "../pages/casestudy/GameVaultCaseStudy";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/work/eventconnect" element={<EventConnect />} />
        <Route
          path="/casestudy/eventconnectcasestudy"
          element={<EventConnectCaseStudy />}
        />
        <Route
          path="/casestudy/chuckskitchencasestudy"
          element={<ChucksKitchenCaseStudy />}
        />
        <Route
          path="/casestudy/paucekdeliveriescasestudy"
          element={<PaucekDeliveriesCaseStudy />}
        />
        <Route
          path="/casestudy/gamevaultcasestudy"
          element={<GameVaultCaseStudy />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function AppRoutes() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
