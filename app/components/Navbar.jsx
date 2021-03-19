import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_item} onClick={() => router.push('/')}>Home</div>
      <div className={styles.navbar_item} onClick={() => router.push('/feed/1')}>Feed</div>
      <div className={styles.navbar_item} onClick={() => router.push('/eom')}>EOM</div>
      <div className={styles.navbar_item} onClick={() => window.location.href = 'https://github.com/Arghun-dev'}>GitHub</div>
    </nav>
  )
}