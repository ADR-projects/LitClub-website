import { faculty, studentcore } from '../assets/assets'

function People() {
  return (
    <div>

      {/* FACULTY */}
      <section className="mb-20">
        <h2 className="text-4xl font-serif text-textcolor mb-12 text-center">
          Faculty
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((person, index) => (
            <div
              key={index}
              className="bg-primary border border-[#3d2f1f] hover:border-textcolor transition-colors"
            >
              <div className="aspect-square bg-[#2a1f15] flex items-center justify-center border-b border-[#3d2f1f]">
                <img
                  src={person.imgLink}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif text-textcolor mb-2">
                  {person.name}
                </h3>

                <div className="text-sm text-[#a68f6f] mb-3">
                  {person.designation}
                </div>

                <p className="text-subtext text-sm leading-relaxed">
                  {person.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* CORE MEMBERS */}
      <section className="mb-20">
        <h2 className="text-4xl font-serif text-textcolor mb-12 text-center">
          Core Members
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentcore.map((person, index) => (
            <div
              key={index}
              className="bg-primary border border-[#3d2f1f] hover:border-textcolor transition-colors"
            >
              <div className="aspect-square bg-[#2a1f15] flex items-center justify-center border-b border-[#3d2f1f]">
                <img
                  src={person.imgLink}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif text-textcolor mb-2">
                  {person.name}
                </h3>

                <div className="text-sm text-[#a68f6f] mb-3">
                  {person.designation}
                </div>

                <p className="text-subtext text-sm leading-relaxed">
                  {person.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  )
}

export default People