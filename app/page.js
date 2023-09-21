import Link from 'next/link'
import styles from './mainpage.module.css'
import './globalstyle.css'

export default function Home() {
  return (
    <div className='border'>
      <div className={styles.container}>

        <main className={styles.main}>
          <section>
            <header className={styles.greeting}>
              <div>Hello!</div>
              <div>My name is Luis Lucero</div>
              <div>I am a Software Engineer</div>
            </header>
            <div className={styles.desc}>with full-stack development experience currently working with technologies like Next.js & Firebase. Let me help you add value to your company.</div>
          </section>
        </main>

        <footer className={styles.footerNav} >
          <ul>
            <li className='shadow'><a href="http://github.com/clucero36" target='_blank'>GitHub</a></li>
            <li className='shadow'><a href="http://linkedin.com/in/luisclucero" target='_blank'>LinkedIn</a></li>
          </ul>
          <div className='shadow'><Link href='/contact'>Contact</Link></div>
        </footer>

      </div>
    </div>
  )
}
