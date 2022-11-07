import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './features/employees/components/login/Login'
import Employees from './features/employees/main/Employees'
import Register from './features/employees/components/register/Register'
import AddComments from './features/employees/components/add-comments/AddComments'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Register />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/home'} element={<Employees />} />
        <Route path={'/employee-details/:id'} element={<AddComments />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
