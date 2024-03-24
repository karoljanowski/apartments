import React from 'react'
import { Hero } from './Landing/Hero'
import { About } from './Landing/About';
import { Adventages } from './Landing/Adventages';
import { Apartments } from './Landing/BottomSection/Apartments';
import { BottomSection } from './Landing/BottomSection/BottomSection';

export const Landing = () => {
    return (
        <div className='relative'>
            <Hero/>    
            <About/>
            <Adventages/>
            <BottomSection/>
        </div>
    )
}
