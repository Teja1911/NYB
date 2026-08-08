import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Navbar/>
        <hr />
        <Outlet/>
    </div>
  )
}

export default Layout