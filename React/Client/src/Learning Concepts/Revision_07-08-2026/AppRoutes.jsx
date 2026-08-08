import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Students from './pages/Students'
import ProtectedRoute from './ProtectedRoute'
import Dashboard from './pages/Dashboard'
import StudentDetails from './pages/StudentDetails'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Login from './pages/Login'

function AppRoutes() {
  return (
    <Routes>
        {/* Layout Route */}
        <Route path='/revision' element={<Layout/>}/>
        {/* Normal Routes */}
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='contact' element={<Contact/>}/>
        {/* Dynamic Route */}
        <Route path='students' element={<Students/>}/>
        <Route path='students/:id' element={<StudentDetails/>}/>
        <Route path='login' element={<Login/>}/>
        {/* Protected Route */}
        <Route path='dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        {/* Nested Route */}
        <Route path='dashboard/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default AppRoutes