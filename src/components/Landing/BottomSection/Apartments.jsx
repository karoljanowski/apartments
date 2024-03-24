import { motion, useAnimationControls } from 'framer-motion'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import apartment1 from '../../../assets/section4/apartment1.png'
import apartment2 from '../../../assets/section4/apartment2.png'
import apartment3 from '../../../assets/section4/apartment3.png'
import apartment4 from '../../../assets/section4/apartment4.png'
import { faBath, faBed, faChevronCircleRight, faDoorClosed, faPaw, faSquareParking, faUpRightAndDownLeftFromCenter, faUser, faWifi } from '@fortawesome/free-solid-svg-icons'

export const Apartments = () => {

    return (
        <div className="container mx-auto py-10 flex justify-center items-center min-h-screen ">
            <div className='grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 w-full gap-5'>
                <Apartment image={apartment1}/>
                <Apartment image={apartment2}/>
                <Apartment image={apartment3}/>
                <Apartment image={apartment4}/>
            </div>
        </div>
    )
}
const Apartment = ({image}) => {

    return (
        <div className='bg-white border border-gray-300 rounded-3xl overflow-hidden flex p-4 gap-6 text-[#7A4924]'>
            <div className='w-[300px] aspect-square border-gray-300 grid place-content-start relative'>
                <img src={image} alt="" className='w-full h-full object-cover rounded-2xl absolute'/>
                <p className='text-3xl m-3 relative z-20 bg-white rounded-xl p-2'>377$ <sub>/night</sub></p>
            </div>
            <div className='flex-1 flex flex-col'>
                <p className='font-bold uppercase text-2xl'>Apartment '@!@#!@#!@'</p>
                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fugiat nulla porro. </p>
                <Icons/>
                <MiniCalendar/>
                <SeeOfferButton href={'#'}/>
            </div>
        </div>
    )
}
const SeeOfferButton = (href) => {
    const controls = useAnimationControls()
    return (
        <motion.a
        onHoverStart={() => controls.start('end')}
        onHoverEnd={() => controls.start('start')}
        whileHover={{color: '#a67a58'}}
        href={href} className='mt-3 pl-4 pr-2 relative self-end h-7 w-32'>
            <motion.span
            style={{left: '10%'}}
            animate={controls}
            variants={{
                start: {
                    left: '10%'
                },
                end: {
                    left: '90%'
                }
            }}
            className='absolute top-0'
            >
                <FontAwesomeIcon icon={faChevronCircleRight}/>
            </motion.span>
            <motion.span 
            style={{right: '0%'}}
            variants={{
                end: {
                    right: '20%'
                },
                start: {
                    right: '0%'
                }
            }}
            animate={controls}
            className='absolute top-0 ml-2'>See full offer</motion.span>
        </motion.a>
    )
}
// faWifi, faUser, faBed, faSquareParking, faBath, faUpRightAndDownLeftFromCenter, faPaw, faDoorClosed,
const Icons = () => {
    return (
        <div className='flex gap-4 mt-4'>
            <div><FontAwesomeIcon icon={faUser}/><span className='ml-1'>4</span></div>
            <div><FontAwesomeIcon icon={faBed}/><span className='ml-1'>3</span></div>
            <div><FontAwesomeIcon icon={faBath}/><span className='ml-1'>1</span></div>
            <div><FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter}/><span className='ml-1'>62m<sup>2</sup></span></div>
            <div><FontAwesomeIcon icon={faDoorClosed}/><span className='ml-1'>3</span></div>
            <div><FontAwesomeIcon icon={faWifi}/></div>
            <div><FontAwesomeIcon icon={faPaw}/></div>
            <div><FontAwesomeIcon icon={faSquareParking}/></div>
        </div>
    )
}
const MiniCalendar = () => {
    return (
        <div className="flex flex-col mt-auto">
            <span className='font-bold block w-full mb-2 uppercase after:w-[15%] after:h-0.5 after:bg-[#7A4924] after:content-[""] after:block'>this week</span>
            <div className='flex gap-3 justify-start'>
                <div className="flex flex-col justify-center">
                    <span className='text-sm block w-full text-center'>MON</span>
                    <span className='bg-[#7A4924] border border-[#7A4924] w-10 h-10 rounded-full text-white grid place-content-center'>25</span>
                </div>
                <div className="flex flex-col justify-center">
                    <span className='text-sm block w-full text-center'>TUE</span>
                    <span className='bg-[#7A4924] border border-[#7A4924] w-10 h-10 rounded-full text-white grid place-content-center'>26</span>
                </div>
                <div className="flex flex-col justify-center">
                    <span className='text-sm block w-full text-center'>WED</span>
                    <span className='bg-[#7A4924] border border-[#7A4924] w-10 h-10 rounded-full text-white grid place-content-center'>27</span>
                </div>
                <div className="flex flex-col justify-center">
                    <span className='text-sm block w-full text-center'>THU</span>
                    <span className='bg-[#7A4924] border border-[#7A4924] w-10 h-10 rounded-full text-white grid place-content-center'>28</span>
                </div>
                <div className="flex flex-col justify-center">
                    <span className='text-sm block w-full text-center'>FRI</span>
                    <span className='bg-[#7A4924] border border-[#7A4924] w-10 h-10 rounded-full text-white grid place-content-center'>29</span>
                </div>
                <div className="flex flex-col justify-center">
                    <span className='text-sm block w-full text-center'>SUN</span>
                    <span className='bg-[#7A4924] border border-[#7A4924] w-10 h-10 rounded-full text-white grid place-content-center'>30</span>
                </div>
                <div className="flex flex-col justify-center">
                    <span className='text-sm block w-full text-center'>SAT</span>
                    <span className='bg-[#7A4924] border border-[#7A4924] w-10 h-10 rounded-full text-white grid place-content-center'>31</span>
                </div>
            </div>

        </div>
    )
}