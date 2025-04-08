// src/App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Home from './pages/home.js';
import Calendar from './pages/calendar.js';
import Showcase from './pages/showcase.js';
import AboutUs from './pages/aboutus.js';
import Resources from './pages/resources.js';

import Header from './Header.js';
import Footer from './Footer.js';

const App = () => {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
