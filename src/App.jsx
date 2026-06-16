import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

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