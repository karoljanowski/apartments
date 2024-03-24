import React, { useState } from 'react'
import { Header } from './Header'
import { useAnimationControls, motion, AnimatePresence } from 'framer-motion'
import fullBg from '../../assets/section1/full-bg.png'
import bg from '../../assets/section1/bg.png'
import home1 from '../../assets/section1/home-1.png'
import home2 from '../../assets/section1/home-2.png'
import home3 from '../../assets/section1/home-3.png'
import home4 from '../../assets/section1/home-4.png'

export const Hero = () => {
    const [currentBuildingHover, setCurrentBuildingHover] = useState(null)

    const buildings = [
        { image: home1, left: 'left-[25%]', top: 'top-[70%]' },
        { image: home2, left: 'left-[45%]', top: 'top-[65%]' },
        { image: home3, left: 'left-[58%]', top: 'top-[52%]' },
        { image: home4, left: 'left-[83%]', top: 'top-[62%]' }
    ]

    const text = "React apartments".split("")
    return (
        <div className="w-screen h-screen flex justify-center gradient fixed top-0 left-0 z-10">
            <Header/>
            <div className='relative w-[95%] h-[80%] rounded-3xl overflow-hidden bg-[#CDCEC9] border border-gray-400 mt-28'>
                <motion.img 
                initial={{marginTop: '70%'}}
                animate={{marginTop: 0}}
                transition={{
                    duration: 0.5
                }}
                className='absolute w-full h-full origin-bottom object-cover object-left lg:object-center' src={fullBg} />
                <img className='absolute w-full h-full object-cover object-left lg:object-center' src={bg} />
                <div className='hidden lg:block'>
                    {buildings.map((building, index) => (
                        <Building key={index} building={building} id={index} setCurrentBuildingHover={setCurrentBuildingHover} currentBuildingHover={currentBuildingHover} />
                        ))}
                </div>
                <h1 className='relative z-10 w-full text-center mt-[30%] lg:mt-[10%] text-5xl lg:text-9xl uppercase font-bold opacity-50 font-header'>
                    {text.map((el, i) => (
                        <motion.span
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{
                            duration: 0.25,
                            delay: i/15
                        }}
                        >
                            {el}
                        </motion.span>
                    ))}
                </h1>
            </div>
        </div>
    )
}

const Building = ({ building }) => {
    const {image, left, top} = building
    const controls = useAnimationControls();
    const [tooltipVisible, setTooltipVisible] = useState(false)
    const mouseOver = () => {
        controls.start('visible')
        setTooltipVisible(true)
    }
    const mouseLeave = () => {
        controls.start('initial')
        setTooltipVisible(false)
    }
    return (
        <>
            <motion.div 
                className={`absolute ${left} ${top} z-20 border-gray-300 border rounded-md p-2 bg-white`}
                onMouseOver={mouseOver}
                onMouseLeave={mouseLeave}
            >   
                <span className='opacity-55'>
                    $122
                </span>
                <AnimatePresence>
                {tooltipVisible && <Tooltip/>}
                </AnimatePresence>
            </motion.div>
            <motion.img
                className='absolute w-full h-full object-cover object-left lg:object-center'
                src={image}
                initial={{ opacity: 0 }}
                animate={controls}
                variants={{
                    initial: { opacity: 0 },
                    visible: { opacity: 1 }
                }}
            />
        </>
    );
};


const Tooltip = () => {
    return (
        <motion.div 
        className='absolute -bottom-4 -left-16 w-64 h-64 bg-white rounded-md p-4'
        initial={{scale: 0}}
        animate={{scale: 1}}
        exit={{scale: 0}}
        >
            <span className='uppercase font-bold'>Apartment Diego</span>

        </motion.div>
    );
}