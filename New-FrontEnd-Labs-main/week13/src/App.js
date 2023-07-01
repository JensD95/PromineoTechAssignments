import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './signup'

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
          <Login/>
      </BrowserRouter>
    )
}

export default App