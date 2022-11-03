import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './features/employees/login/Login'
import Employees from './features/employees/Employees'
import Register from './features/employees/register/Register'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Employees />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/login'} element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
