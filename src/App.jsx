import { useState } from 'react'
import Nav from './Nav'
import MainContant from './MainContant'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-7xl mx-auto'>
        <Nav />
        <MainContant />
    </div>
  )
}

export default App
