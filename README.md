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
