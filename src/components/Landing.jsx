import React from 'react'
import { Hero } from './Landing/Hero'
import { About } from './Landing/About';
import { Adventages } from './Landing/Adventages';
import { Apartments } from './Landing/Apartments';

export const Landing = () => {
    return (
        <>
            <Hero/>    
            <About/>
            <Adventages/>
            <Apartments/>
        </>
    )
}
