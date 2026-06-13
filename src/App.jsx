import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200 antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;