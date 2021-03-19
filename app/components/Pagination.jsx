import { useRouter } from 'next/router'
import styles from '../styles/Pagination.module.scss'

export default function Pagination({ pageNumber }) {
  const router = useRouter()
  return (
    <div className={styles.pagination}>
      <span 
        onClick={() => {
          if (pageNumber > 1) {
            router.push(`/feed/${pageNumber - 1}`)
          }
        }} 
        className={pageNumber < 2 ? styles.pagination_arrow_disable : styles.pagination_arrow}
      >
        &lt;
      </span>
      <span className={styles.pagination_number}>{pageNumber}</span>
      <span
        onClick={() => {
          if (pageNumber < 7) {
            router.push(`/feed/${pageNumber + 1}`)
          }
        }} 
        className={pageNumber > 6 ? styles.pagination_arrow_disable : styles.pagination_arrow}
      >
        &gt;
      </span>
    </div>
  )
}