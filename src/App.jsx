import React from 'react'
import { Landing } from './components/Landing'
import { Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import { Dashboard } from './components/Dashboard'

function App() {

    return (
        <>
          <Routes>
            <Route index path="/" element={<Landing />}/>
            <Route path='/admin' element={<Login/>}/>
            <Route path='/dashboard'element={<Dashboard/>} />
          </Routes>
        </>
    )
}

export default App
