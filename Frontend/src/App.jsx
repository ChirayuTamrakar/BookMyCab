import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Start from './pages/Start';
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainLogout from './pages/CaptainLogout';
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper';
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Start/>} />
      <Route path='/login' element={<UserLogin/>}/>
      <Route path='/signup' element={<UserSignup/>} />
      <Route path='/captain-login' element={<CaptainLogin/>} />
      <Route path='/captain-signup' element={<CaptainSignup/>} />
      <Route path='/riding' element={<Riding/>} />
      <Route path='/captain-riding' element={<CaptainRiding/>} />
      <Route path='/home' element={           //We wrapped this because it was unprotected route ..... user can directly get in .... 
        <UserProtectedWrapper>
          <Home/>
        </UserProtectedWrapper>
      }/>
      <Route path='/logout' element={
        <UserProtectedWrapper>
          <UserLogout />
        </UserProtectedWrapper>
      } />
      <Route path='/captain-home' element={
        <CaptainProtectedWrapper>
          <CaptainHome />
        </CaptainProtectedWrapper>
      } />
      <Route path='/captain-logout' element={
        <CaptainProtectedWrapper>
          <CaptainLogout />
        </CaptainProtectedWrapper>
      } />

      </Routes>
    </>
  )
}

export default App
