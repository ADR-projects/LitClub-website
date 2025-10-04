import { assets } from "../assets/assets";
function Footer() {
  return (
    <footer className="border-t border-ternary bg-statusbars mt-20">
      <div className="max-w-7xl mx-auto px-4 py-7 flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-serif text-textcolor mb-4 md:mb-0">
          <img src={assets.logo} alt="club-logo" className='w-6 sm:w-7 rounded-2xl mb-1' />
          <span>Literary Club</span>
          <p className="text-xs text-subtext">Guru Nanak Institute of Technology</p>
        </div>
        <div className="flex gap-4 text-[#a68f6f] hover:text-[#e8dcc4] transition-colors cursor-pointer">
          <a
            href="mailto:literary.club.gnit@gmail.com?subject=Query%20from%20Website&body=Hi Club!%20Lit%20Club%20Team,%0A%0Aliterary.club.gnit@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <img src={assets.mail} alt="mail-logo" className='w-4 sm:w-5' />
          </a>
          <a
            href="https://www.instagram.com/literary.club.gnit/"
            rel="noopener noreferrer"
            className=""
          >
            <img src={assets.ig} alt="instagram-logo" className='w-4 sm:w-5' />
          </a>
          <a
            href="https://github.com/ADR-projects/literary-club-site"
            rel="noopener noreferrer"
            className=""
          >
            <img src={assets.githubyellow} alt="github-logo" className='w-4 sm:w-6' />
          </a>
          <a href="mailto:literary.club.gnit@gmail.com?subject=Query%20from%20Website&body=Hi Club!%20Lit%20Club%20Team,%0A%0Aliterary.club.gnit@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="">
            <span>Contact Us</span>
          </a>
        </div>
      </div>
      <p className="text-center text-[8px] text-subtext">Copyright © 2025 GNIT Literary Club - All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
