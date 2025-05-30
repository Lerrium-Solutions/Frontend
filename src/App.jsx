import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './assets/layouts/MainLayout'
import Projects from './assets/pages/Projects'
import Contact from './assets/pages/Contact'
import About from './assets/pages/About'
import CenterLayout from './assets/layouts/CenterLayout'
import Login from './assets/auth/Login'
import Register from './assets/auth/Register'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<h1>Home</h1>} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
      </Route>
      <Route path='/auth' element={<CenterLayout />}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
      <Route path='*' element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  )
}

export default App
