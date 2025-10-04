import { useState } from 'react'
import { assets } from '../assets/assets'
// import icons

function Links() {
  /* const [email, setEmail] = useState('');
   const [message, setMessage] = useState("");
 
   const handleSubmit = (e) => {
     e.preventDefault();
     console.log('Email submitted:', email);
     setEmail('');
   };
  */
  return (
    <div className="max-w-2xl mx-auto space-y-16">
      <div>
        <h2 className="text-3xl font-serif text-textcolor mb-8 text-center">Get in Touch</h2>
        <div className="text-center">
          <a
            href="mailto:literary.club.gnit@gmail.com?subject=Query%20from%20Website&body=Hi Club!%20Lit%20Club%20Team,%0A%0Aliterary.club.gnit@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-primary border border-ternary hover:bg-ternary text-textcolor px-8 py-4 transition-colors group"
          >
            <img src={assets.mail} alt="mail-logo" className='w-4 sm:w-5' />
            <span>literary.club.gnit@gmail.com</span>
          </a>
        </div>

        {/** <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="flex-1 bg-primary border border-[#3d2f1f] px-4 py-3 text-[#e8dcc4] placeholder-[#5a4a3a] focus:outline-none focus:border-textcolor transition-colors"
              required
            />
            <textarea
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-primary border border-[#3d2f1f] px-4 py-3 text-[#e8dcc4] placeholder-[#5a4a3a] focus:outline-none focus:border-textcolor transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-textcolor hover:bg-[#b8941f] text-primary px-8 py-3 transition-colors font-medium"
            >
              Send
            </button>
          </div>
        </form>
        */}

      </div>

      
      <div className="text-center">
        <a
          href="https://github.com/ADR-projects/literary-club-site"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 bg-primary border border-[#3d2f1f] hover:border-textcolor px-8 py-4 transition-colors group"
        >
          <img src={assets.github} alt="github-logo" className='w-6 sm:w-7' />
          <span className="text-subtext group-hover:text-textcolor transition-colors">Star this repo on GitHub</span>
          <img src={assets.star} alt="shooting-star-icon" className='w-6 sm:w-8' />

        </a>
      </div>
    </div>
  );
}

export default Links;
