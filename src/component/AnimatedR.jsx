import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AboutMe from './aboutme/AboutMe';
import Home from './home/Home';
import Contact from './contact/Contact';
import Projects from './projects/Projects';
import Education from './education/Education';
import { motion, AnimatePresence } from 'framer-motion';
export default function AnimatedR() {
  const location = useLocation();
  return (
    <div>
      {' '}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Projects />} />
        <Route path="/education" element={<Education />} />
      </Routes>{' '}
    </div>
  );
}
