function Events() {
  const events = [
    {
      title: 'Poetry Reading Night',
      date: 'November 15, 2024',
      venue: 'Main Library, Reading Room',
      description: 'An intimate evening of spoken word and verse. Bring your favorite poems or share your own original work.'
    },
    {
      title: 'Book Club Discussion',
      date: 'November 22, 2024',
      venue: 'Student Center, Room 301',
      description: 'Monthly discussion of "If We Were Villains" by M.L. Rio. New members welcome.'
    },
    {
      title: 'Creative Writing Workshop',
      date: 'December 1, 2024',
      venue: 'English Department, Seminar Hall',
      description: 'Guided workshop on character development and narrative structure. All skill levels encouraged to attend.'
    }
  ];

  return (
    <div>
      <h2 className="text-4xl font-serif text-textcolor mb-12 text-center">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-primary border border-[#3d2f1f] hover:border-textcolor transition-colors cursor-pointer"
          >
            <div className="aspect-video bg-[#2a1f15] flex items-center justify-center border-b border-[#3d2f1f]">
              <span className="text-5xl">📅</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-textcolor mb-2">{event.title}</h3>
              <div className="text-sm text-[#a68f6f] mb-3 space-y-1">
                <div>{event.date}</div>
                <div>{event.venue}</div>
              </div>
              <p className="text-subtext text-sm leading-relaxed">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
