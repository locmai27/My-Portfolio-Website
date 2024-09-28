import './App.css';

import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';  // Import the new Skills component
import Interests from './components/Interests';
import Achievements from './components/Achievements';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills /> 
      <Interests />
      <Projects />
      <Achievements />
    </div>
  );
}
export default App;
