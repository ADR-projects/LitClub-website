import {assets} from '../assets/assets'

function Home() {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <h2 className="text-4xl font-serif text-textcolor mb-8">Join the Club!</h2>
        <a
          href="https://chat.whatsapp.com/Hp82LX83fjn05h2G6x2y3V"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 bg-[#25D366] hover:bg-[#18793c] text-white px-6 py-3 transition-colors"
        >
         <img src={assets.wapp} alt="whatsapp-logo" className='w-6 sm:w-7' />
          <span>WhatsApp</span>
        </a>
      </div>

      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl font-serif text-textcolor mb-6 text-center">Our Story</h3>
        <div className="prose prose-invert prose-amber max-w-none">
          <p className="text-subtext leading-relaxed text-lg">
            Founded in the halls of GNIT, our Literary Club serves as a sanctuary for those who find
            solace in the written word. We are a collective of readers, writers, and dreamers who gather
            to celebrate literature in all its forms. From the classics that shaped civilization to
            contemporary voices that challenge our perspectives, we explore the boundless realm of human
            expression through language.
          </p>
          <p className="text-subtext leading-relaxed text-lg mt-4">
            Our club is more than a meeting place—it is a community where intellectual curiosity thrives,
            where vigorous discussions unfold over worn pages, and where the passion for storytelling
            unites us across all boundaries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
