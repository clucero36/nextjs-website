
const projects = [
  {
    name: 'Ayamaya Outdoor',
    description: 'E-Commerce website built with Shopify.',
    src: '/ayamaya-homepage.webp',
    link: 'https://ayamaya.com',
  },
  { 
    name: 'Spotify Clone',
    description: 'Spotify Clone Web Application. React, Spotify OAuth 2.0, & Firebase.',
    src: '/spot1stPage.webp',
    link: 'https://spotifyditto.netlify.app',
    git: 'https://github.com/clucero36/spotify-clone.git',
  },
  {
    name: 'Blogger Landing Page',
    description: 'Business landing page. HTML, CSS, & JavsScript.',
    src: '/bloggrNew.webp',
    link: 'https://blogrbusiness.netlify.app/',
    git: 'https://github.com/clucero36/Blogr.git',
  },
]

export function getProjects() {
  return projects;
}