import News from '../../components/News'
import Pagination from '../../components/Pagination'
import styles from '../../styles/Feed.module.scss'

export default function Feed({ articles, pageNumber }) {
  console.log(articles, pageNumber)
  return (
    <div className={styles.feed}>
      {articles.map(article => <News article={article} />)}
      <Pagination pageNumber={pageNumber} />
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const pageNumber = context.query.slug

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1
      }
    }
  }

  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=93245f22740f4f2299d477e1eaec7334&paegSize=5&page=${pageNumber}`)
  const data = await res.json()
  const { articles } = data

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber)
    }
  }
}