import React from 'react'
import { Landing } from './components/Landing'
import { Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'

function App() {

    return (
        <>
          <Routes>
            <Route index path="/" element={<Landing />}/>
            <Route path='/admin' element={<Login/>}/>
          </Routes>
        </>
    )
}

export default App
