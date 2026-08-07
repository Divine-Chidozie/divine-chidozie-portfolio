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

import EventConnect from "../pages/work/EventConnect";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/work/eventconnect" element={<EventConnect />} />
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
