import {featured} from '../assets/assets'
function Featured() {

  return (
    <div>
      <h2 className="text-4xl font-serif text-textcolor mb-12 text-center">Featured Pieces</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {featured.map((item) => (
          <a key={item.link} href={item.link} target="_blank">
          <div
            key={item.title}
            className="bg-primary border border-[#3d2f1f] hover:border-textcolor transition-colors cursor-pointer group"
          >
            <div className="aspect-square bg-[#2a1f15] flex items-center justify-center border-b border-[#3d2f1f]">
              <img className="aspect-square h-max" src={item.imgLink} alt="" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-textcolor mb-3">{item.title}</h3>
              <p className="text-subtext text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
         </a>
          
        ))}
      </div>
    </div>
  );
}

export default Featured;
