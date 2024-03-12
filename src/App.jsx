import React from 'react'
import { Landing } from './components/Landing'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import { Dashboard } from './components/Dashboard'
import AuthRoute from './components/AuthRoute'

function App() {

    return (
        <>
          <Routes>
            <Route index path="/" element={<Landing />}/>
            <Route path='/admin' element={<Login/>}/>
            <Route
                element={<AuthRoute />}
            >
              <Route element={<Navigate to="dashboard" replace />} />
              <Route path='/dashboard'element={<Dashboard/>} />
            </Route>
          </Routes>
        </>
    )
}

export default App
