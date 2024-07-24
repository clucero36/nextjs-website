import Link from 'next/link'
import styles from './layout.module.css';
import { Gi3dStairs } from "react-icons/gi";

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
              <Gi3dStairs style={{width: '1.5rem', height: '1.5rem'}}/>
            </Link>
            <ul>
              <li className='shadow'><a href="Luis Lucero Full-Stack Software Engineer Resume.pdf" target="_blank">Resume</a></li>
              <li className='shadow'><Link href='/projects'>Projects</Link></li>
              <div className='shadow'><Link href='/contact'>Contact</Link></div>
            </ul>
          </nav>

          {children}

          <footer className={styles.footerNav}>
            <div style={{height: '2.5rem'}}>
              <a href="http://github.com/clucero36" target='_blank'>
                <button className={styles.button}>GitHub</button>
              </a>
            </div>
            <div style={{height: '2.5rem'}}>
              <a href="http://linkedin.com/in/luisclucero" target='_blank'>
                <button className={styles.button}>LinkedIn</button>
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
