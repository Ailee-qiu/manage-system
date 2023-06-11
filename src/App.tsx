import { Button } from 'antd'
import { useState } from 'react'
import { Link, Outlet,useRoutes } from 'react-router-dom'
import router from './router'
// import 'antd/dist/antd.css'
function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)

  return (
    <>
      <div>
        {/* <Link to="/home">Home</Link>
        <Link to="/about">About</Link> */}
        {outlet}
      </div>
    </>
  )
}

export default App
