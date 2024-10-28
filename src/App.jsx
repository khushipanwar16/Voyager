import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";

import NotFound from "./pages/NotFound";
import About from "./parts/HomePage/About";
import Review from "./components/Review";
import Destinations from "./parts/HomePage/Destinations";
import Callback from "./components/Callback";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="Review" element={<Review />} />
          <Route exact path="Destinations" element={<Destinations />} />
          <Route exact path="Callback" element={<Callback />} />
         
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
