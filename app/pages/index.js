import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>News App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Next.js News App</h1>
      <p>This is News App I Created Using <strong>Next.js</strong> which is start of my path in Next.js</p>
    </div>
  )
}
