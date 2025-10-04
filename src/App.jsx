import { useState } from 'react';
import Hero from './components/Hero';
import Tabs from './components/Tabs';
import Home from './components/Home';
import Magazine from './components/Magazine';
import Featured from './components/Featured';
import Events from './components/Events';
import Links from './components/Links';
import Footer from './components/Footer';
import {assets} from './assets/assets'

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div  className='bg-cover bg-center bg-no-repeat min-h-screen bg-[#583b27] text-[#34270e]'
          style={{ backgroundImage: `url(${assets.tabbg})` }}>
      <Hero />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-7xl mx-auto px-6 py-16 min-h-[60vh]">
        {activeTab === 'home' && <Home />}
        {activeTab === 'magazine' && <Magazine />}
        {activeTab === 'featured' && <Featured />}
        {activeTab === 'events' && <Events />}
        {activeTab === 'links' && <Links />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
