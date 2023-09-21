import Link from 'next/link'
import Image from 'next/image'
import styles from './layout.module.css';

export const metadata = {
  title: 'llucero',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>

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
              <li className='shadow'><a href="Luis-Lucero-Full-stack-Developer-Resume.pdf" target="_blank">Resume</a></li>
              <li className='shadow'><Link href='/projects'>Projects</Link></li>
            </ul>
          </nav>

          {children}

          <footer className={styles.footerNav} >
            <ul>
              <li className='shadow'><a href="http://github.com/clucero36" target='_blank'>GitHub</a></li>
              <li className='shadow'><a href="http://linkedin.com/in/luisclucero" target='_blank'>LinkedIn</a></li>
            </ul>
            <div className='shadow'><Link href='/contact'>Contact</Link></div>
          </footer>

        </div>
      </body>
    </html>
  )
}
