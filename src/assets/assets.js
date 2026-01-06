import heroimg from './herolib2.jpg'
import tabbg from './tabbg1.jpg'
import wapp from './wapp.svg'
import github from './ghwhite.svg'
import githubyellow from './ghyellow.svg'
import linkedin from './linkedinyellow.png'
import mail from './mail.svg'
import star from './star.svg'
import ham from './hammenu.svg'
import hamop from './hammenuopen.svg'
import cover1 from './cover1crop.jpg'
import logo from './clublogo.jpg'
import ig from './ig.svg'
import ev1 from './poster.png'
import ev2 from './call.png'
import ev3 from './grppic.png'
import ev3a from './bookdisc.png'
import ev4 from './festCSpost.jpg'
export const assets = {
  heroimg,
  tabbg,
  wapp,
  github,
  githubyellow,
  linkedin,
  mail,
  star,
  ham,
  hamop,
  cover1,
  logo,
  ig
}
export const featured = [
  {
    title: 'Book',
    link: 'https://www.amazon.in/Secret-History-Donna-Tartt/dp/0140167773?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1WYWER0W24N8S',
    imgLink: 'https://m.media-amazon.com/images/I/81YhQfeiynL._UF1000,1000_QL80_.jpg',
    description: 'The Secret History by Donna Tartt - A mesmerizing tale of obsession, betrayal, and murder among classics students at an elite New England college.'
  },
  {
    title: 'Poem',
    link: 'https://www.poetryfoundation.org/poems/46569/do-not-go-gentle-into-that-good-night',
    imgLink: 'https://rainyday.blog/wp-content/uploads/2016/02/dylan-thomas-quote.jpg?w=736',
    description: 'Do Not Go Gentle Into That Good Night" by Dylan Thomas - A powerful villanelle exploring defiance in the face of mortality.'
  },
  {
    title: 'Web Novel',
    link: 'https://wanderinginn.com/',
    imgLink: 'https://m.media-amazon.com/images/I/81xukYXZJ8L._UF1000,1000_QL80_.jpg',
    description: 'The Wandering Inn by Pirateaba - An epic fantasy series exploring what it means to find home in a world far from your own.'
  }
];
export const events = [
  {
    title: 'Unveiling of Aksara - the CyberLit Fest',
    imgLink: ev4,
    date: 'January 4, 2026',
    venue: 'LinkedIn, Instagram',
    description: 'The upcoming Tech x Literary Festival combining technology and literature in innovative ways was announced. Stay tuned for exciting events, workshops, and competitions!',
    onClick: 'https://www.linkedin.com/posts/literary-club-gnit_literaryclubgnit-gnit-aksaratechxlitfest-activity-7413527632107089921-CrV_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFvjFxcBRe-kIM1dHFNteL2jB94TupXp8qA'
  },
  {
    title: 'Book Discussion: The Silent Patient',
    imgLink: ev3a,
    date: 'May 8, 2025',
    venue: 'Language Lab-I, GNIT Campus',
    description: "Dive into the psychological thriller \"The Silent Patient\" by Alex Michaelides. An engaging discussion about the book's themes, characters, and twists followed.",
    onClick: 'https://www.instagram.com/p/DJcJtztJ-Ek/?hl=en&img_index=1'
  },
  {
    title: 'Magazine Submission Call',
    imgLink: ev2,
    date: 'April 14, 2025',
    venue: 'Language Lab-II, GNIT Campus',
    description: 'Calling all writers and artists! Submissions of over 40 articles, artwork, and creative pieces for the upcoming edition were taken.',
    onClick: 'https://online.fliphtml5.com/smtnf/tsqh/#p=1'
  },
  {
    title: 'Club Promos',
    imgLink: ev1,
    date: 'April 9, 2025',
    venue: 'Language Lab-I, GNIT Campus',
    description: 'The event poster and joining link were shared. The Club was revived after a long hiatus!',
    onClick: 'https://www.instagram.com/p/DINaac5pPHw/?hl=en'
  }
];