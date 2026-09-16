import { announcements } from '../assets/assets'

function Announcements() {
 return (
     <div>
       <h2 className="text-4xl font-serif text-textcolor mb-12 text-center">List of Events</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {announcements.map((announcement, index) => (
           <a
             key={index}
             href={announcement.onClick}
             target="_blank"
             rel="noopener noreferrer"
             className="bg-primary border border-[#3d2f1f] hover:border-textcolor transition-colors cursor-pointer block"
           >
             <div className="aspect-video bg-[#2a1f15] flex items-center justify-center border-b border-[#3d2f1f]">
               <img src={announcement.imgLink} alt="announcement-image" className='aspect-square h-max' />
             </div>
             <div className="p-6">
               <h3 className="text-xl font-serif text-textcolor mb-2">{announcement.title}</h3>
               <div className="text-sm text-[#a68f6f] mb-3 space-y-1">
                 <div>{announcement.date}</div>
               </div>
               <p className="text-subtext text-sm leading-relaxed">{announcement.description}</p>
             </div>
           </a>
         ))}
       </div>
     </div>
   );
}

export default Announcements