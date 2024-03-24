import React from 'react'
import logo from '../../assets/section1/logo.png'

export const Header = () => {
    return (
        <div className='fixed top-0 left-0 right-0 mx-auto w-[95%] flex items-center justify-between h-28 p-6 z-50'>
            <div className='h-full flex items-center gap-5'>
                <img src={logo} className='h-full object-contain' />
                <span className='leading-none'>
                    react apartments.
                </span>
            </div>
            <div>menu</div>
        </div>
    )
}
