function Featured() {
  const featured = [
    {
      title: 'Book',
      icon: '📚',
      description: 'The Secret History by Donna Tartt - A mesmerizing tale of obsession, betrayal, and murder among classics students at an elite New England college.'
    },
    {
      title: 'Poem',
      icon: '✒️',
      description: '"Do Not Go Gentle Into That Good Night" by Dylan Thomas - A powerful villanelle exploring defiance in the face of mortality.'
    },
    {
      title: 'Web Novel',
      icon: '🌐',
      description: 'The Wandering Inn by Pirateaba - An epic fantasy series exploring what it means to find home in a world far from your own.'
    }
  ];

  return (
    <div>
      <h2 className="text-4xl font-serif text-textcolor mb-12 text-center">Featured Pieces</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featured.map((item) => (
          <div
            key={item.title}
            className="bg-primary border border-[#3d2f1f] hover:border-textcolor transition-colors cursor-pointer group"
          >
            <div className="aspect-square bg-[#2a1f15] flex items-center justify-center border-b border-[#3d2f1f]">
              <span className="text-6xl group-hover:scale-110 transition-transform">{item.icon}</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-textcolor mb-3">{item.title}</h3>
              <p className="text-subtext text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
