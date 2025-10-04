import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import { assets } from '../assets/assets';

function Tabs() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const tabs = ['home', 'magazine', 'featured', 'events', 'links'];

  const currentPath = location.pathname.slice(1)
  const activeTab = tabs.includes(currentPath) ? currentPath : 'home'
  return (
    <nav className="sticky top-0 bg-statusbars border-b border-ternary z-10">
     {/* <div className="max-w-7xl mx-auto px-6"> */}
     {/* Tabs for Desktop */}
        <div className="flex justify-center space-x-1 md:space-x-8">
          <div className="hidden md:flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() =>
                  navigate(`/${tab}`)
                }
                className={`px-4 md:px-6 py-4 text-sm md:text-base uppercase tracking-wider transition-colors ${activeTab === tab
                  ? 'text-textcolor border-b-2 border-textcolor'
                  : 'text-[#a68f6f] hover:text-[#e8dcc4]'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>


          {/* Hamburger for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-textcolor focus:outline-none"
            >
              {isOpen ? (
                <img src={assets.hamop} alt="hamburger menu icon" className='w-4 sm:w-6' />
              ) : (
                <img src={assets.ham} alt="hamburger menu is open icon" className='w-4 sm:w-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-statusbars border-t border-ternary">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  navigate(`/${tab}`);
                  setIsOpen(false); // close hamburger menu after click
                }}
                className={`block w-full text-left px-6 py-3 text-base uppercase tracking-wider transition-colors ${activeTab === tab
                  ? 'text-textcolor border-b-2 border-textcolor'
                  : 'text-[#a68f6f] hover:text-[#e8dcc4]'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
    </nav>
  );
}

export default Tabs;

