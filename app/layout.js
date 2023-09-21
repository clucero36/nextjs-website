import Link from 'next/link'
import Image from 'next/image'
import styles from './layout.module.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.navborder}> 
          <nav className={styles.nav}>
            <Link href='/'>
              <Image 
                src='vercel.svg'
                width={45}
                height={45}
                alt="Brand Image"
              />
            </Link>
            <ul>
              <li className='shadow'><a href="https://docs.google.com/document/d/1vWjx9IO90qgjuR_js5wEngzkOkcMyzQfEJXhcT6pU8A/edit?usp=sharing" target="_blank">Resume</a></li>
              <li className='shadow'><Link href='/projects'>Projects</Link></li>
            </ul>
          </nav>
        </div>
        {children}
      </body>
    </html>
  )
}
