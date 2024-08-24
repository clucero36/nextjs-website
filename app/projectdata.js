
const projects = [
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
    link: 'https://appointments-app-router.vercel.app/',
    git: 'https://github.com/clucero36/appointments',
  },
  {
    name: 'Image Gallery',
    description: 'Application Developed with Next.js & Pexel API',
    src: '/Gallery.webp',
    link: 'https://gallery-psi-sandy.vercel.app/',
    git: 'https://github.com/clucero36/gallery'
  },
  {
    name: 'Jet Boat Classifieds',
    description: 'E-commerce Web App. React.js, Firebase, & Stripe API',
    src: '/jetboats.webp',
    link: 'https://jetboats.netlify.app',
    git: 'https://github.com/clucero36/jetboats'
  },
  {
    name: 'Ayamaya Outdoor',
    description: 'E-Commerce website built with Shopify.',
    src: '/ayamaya-homepage.webp',
    link: 'https://ayamaya.com',
    git: '#'
  },
]

export function getProjects() {
  return projects;
}