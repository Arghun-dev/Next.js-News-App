import styles from '../styles/News.module.scss'

export default function News({ article }) {
  return (
    <div className={styles.news}>
      <h3 className={styles.news_heading} onClick={() => window.location.href=article.url}>{article.title}</h3>
      <p className={styles.news_description}>{article.description}</p>
      <img
        src={article.urlToImage}
        alt={article.url}
        width="100%"
        height="500"
      />
    </div>
  )
}