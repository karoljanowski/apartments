import React from 'react'
import { Hero } from './components/Hero'
import { About } from './components/About';
import { Adventages } from './components/Adventages';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapLocationDot, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons'


library.add( faMapLocationDot, faLocationDot, faStar )

function App() {

    return (
        <>
          <Hero/>    
          <About/>
          <Adventages/>
        </>
    )
}

export default App
