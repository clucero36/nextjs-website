
const projects = [
  {
    name: 'Ayamaya Outdoor',
    description: 'E-Commerce website built with Shopify.',
    src: '/ayamaya-homepage.webp',
    link: 'https://ayamaya.com',
    git: '#'
  },
  { 
    name: 'Spotify Clone',
    description: 'Spotify Clone Web Application. React, Spotify OAuth 2.0, & Firebase.',
    src: '/spot1stPage.webp',
    link: 'https://spotifyditto.netlify.app',
    git: 'https://github.com/clucero36/spotify-clone.git',
  },
  {
    name: 'Appointment Scheduler',
    description: 'Salon Appointment Schedule App. Next.js, Square API, & Firebase.',
    src: '/appointments.webp',
    link: 'https://appointments-black.vercel.app/',
    git: 'https://github.com/clucero36/appointments',
  },
]

export function getProjects() {
  return projects;
}