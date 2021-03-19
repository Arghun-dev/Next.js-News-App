import Image from 'next/image'
import styles from '../../styles/Eom.module.scss'

export default function Index() {
  return (
    <div className={styles.eom}>
      <h1>This is me</h1>
      <h3>Frontend Developer</h3>
      <Image
        src='/public/profilePic/myPic.png'
        alt='profilePhoto'
        width={300}
        height={300}
      />
    </div>
  )
}