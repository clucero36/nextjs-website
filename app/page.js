import Link from 'next/link'
import styles from './mainpage.module.css'
import './globalstyle.css'

export default function Home() {
  return (

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
      
  )
}
