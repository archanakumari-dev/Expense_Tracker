import { useState } from 'react'
import {Toaster} from 'react-hot-toast'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
     <Toaster position="top-center" reverseOrder={false} />
      <Routes>
         <Route path='/' element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
         }/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export function ProtectedRoute(props) {
  if (localStorage.getItem('user')) {
    return props.children; 
  } else {
    return <Navigate to='/login' />;
  }
}

export default App
