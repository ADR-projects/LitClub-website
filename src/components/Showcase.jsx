import { achievements, contests } from '../assets/assets'

function Showcase() {
  return (
    <div>
      
      {/* ACHIEVEMENTS */}
      <section className="mb-20">
        <h2 className="text-4xl font-serif text-textcolor mb-12 text-center">
          Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-primary border border-[#3d2f1f] hover:border-textcolor transition-colors"
            >
              <div className="aspect-video bg-[#2a1f15] flex items-center justify-center border-b border-[#3d2f1f]">
                <img
                  src={item.imgLink}
                  alt="achievement"
                  className="aspect-square h-max"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif text-textcolor mb-2">
                  {item.title}
                </h3>

                <div className="text-sm text-[#a68f6f] mb-3">
                  {item.date}
                </div>

                <p className="text-subtext text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* CLUB CONTESTS */}
      <section>
        <h2 className="text-4xl font-serif text-textcolor mb-12 text-center">
          Club Contests
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contests.map((item, index) => (
            <div
              key={index}
              className="bg-primary border border-[#3d2f1f] hover:border-textcolor transition-colors"
            >
              <div className="aspect-video bg-[#2a1f15] flex items-center justify-center border-b border-[#3d2f1f]">
                <img
                  src={item.imgLink}
                  alt="contest"
                  className="aspect-square h-max"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif text-textcolor mb-2">
                  {item.title}
                </h3>

                <div className="text-sm text-[#a68f6f] mb-3">
                  {item.date}
                </div>

                <p className="text-subtext text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Showcase