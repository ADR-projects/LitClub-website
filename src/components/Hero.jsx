import {assets} from '../assets/assets'
function Hero() {
  return (
     <header
      className="headerimg border-b border-[#3d2f1f] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${assets.heroimg})` }}
    >
      <div className=" max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl md:text-7xl font-serif tracking-wide text-textcolor mb-2">
          Literary Club
        </h1>
        <p className="text-sm tracking-[0.3em] uppercase text-[#a68f6f]">GNIT</p>
      </div>
    </header>
  );
}

export default Hero;
