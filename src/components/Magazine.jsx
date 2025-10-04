import {assets} from '../assets/assets'
function Magazine() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-4xl font-serif text-textcolor mb-12 text-center">Read this year's issue</h2>
      <a
        href="https://online.fliphtml5.com/smtnf/tsqh/"
        className="block bg-primary border border-[#3d2f1f] hover:border-textcolor transition-colors overflow-hidden group"
      >
        <div className="aspect-auto bg-[#2a1f15] flex items-center justify-center">
          <img src={assets.cover1} alt="cover of magazine" className='w-80'/>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-serif text-textcolor mb-3">Literary Musings: Volume 2 Issue 1</h3>
          <p className="text-subtext leading-relaxed">
            Explore this season's collection of essays, poetry, and prose from our members. This issue
            delves into themes of memory, identity, and the passage of time—a meditation on the ephemeral
            nature of existence.
          </p>
        </div>
      </a>
    </div>
  );
}

export default Magazine;
