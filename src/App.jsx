import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Hero from './components/Hero';
import Tabs from './components/Tabs';
import Home from './components/Home';
import Magazine from './components/Magazine';
import Featured from './components/Featured';
import Events from './components/Events';
import Links from './components/Links';
import Footer from './components/Footer';
import { assets } from './assets/assets'
import './index.css';
import ParticlesComponent from './components/Particle';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen">
      <div className='bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${assets.tabbg})` }}>
        <Hero />
      </div>

      {/* particles background here */}
      <div className="relative">
        <ParticlesComponent id="tsparticles" />
        <div className="relative z-10">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <main className="max-w-7xl mx-auto px-6 py-16 min-h-[60vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/magazine" element={<Magazine />} />
              <Route path="/featured" element={<Featured />} />
              <Route path="/events" element={<Events />} />
              <Route path="/links" element={<Links />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
