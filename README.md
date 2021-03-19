# Next.js-News-App

## Open a new href tag in next.js

```js
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  return (
    <div>
      <div onCLick={() => router.push('/')}>Home</div>
      <div onClick={() => window.location.href = 'https://github.com/Arghun-dev'}>GitHub</div>  
    </div>
  )
}
```

## Convert to Number in Javascript

for example I get a pageNumber from a query and I want to pass it to the component and I have to confirm that, it is a number

```js
export const getServerSideProps = async (context) => {
  const pageNumber = context.query.slug;
  
  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1
      }
    }
  }
  
  const res = await fetch(API)
  const data = res.json()
  const { articles } = data
  
  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber)
    }
  }
}
```
