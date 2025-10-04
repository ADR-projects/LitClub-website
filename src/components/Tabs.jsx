function Tabs({ activeTab, setActiveTab }) {
  const tabs = ['home', 'magazine', 'featured', 'events', 'links'];

  return (
    <nav className="sticky top-0 bg-statusbars border-b border-ternary z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center space-x-1 md:space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 md:px-6 py-4 text-sm md:text-base uppercase tracking-wider transition-colors ${
                activeTab === tab
                  ? 'text-textcolor border-b-2 border-textcolor'
                  : 'text-[#a68f6f] hover:text-[#e8dcc4]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Tabs;
