import { useState } from 'react'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Login /> */}
      {/* <SignUp /> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
      <Toaster />
    </div>
    </>
  )
}

export default App
