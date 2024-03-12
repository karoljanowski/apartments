import React, {useState, useEffect} from 'react'
import { BookingCalendar } from './DashboardComponents/Calendar'


export const Dashboard = () => {
    return (
        <div className='bg-[#F8F7EC] min-h-screen grid place-content-center'>
            <div className='rounded-2xl overflow-hidden border-[#E8D7BD]'>
                <BookingCalendar/>
            </div>
        </div>
    )
}

