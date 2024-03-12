import React, { useRef } from 'react'
import coin from '../../assets/section3/coin.png'
import parking from '../../assets/section3/parking.png'
import wifi from '../../assets/section3/wifi.webp'
import { delay, motion, useScroll, useTransform } from 'framer-motion'
import {useMediaQuery} from '../../hooks/useMediaQuery'


export const Adventages = () => {
    const mediaMatch = useMediaQuery('(min-width: 992px)');
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({target: ref})
    const scale = mediaMatch ? useTransform(scrollYProgress, [0,1], [0.8, 1]) : useTransform(scrollYProgress, [0,0.01], [0.9, 1])
    const marginFirst = useTransform(scrollYProgress, [0,1], ['70%', '-5%'])
    const marginLast = useTransform(scrollYProgress, [0,1], ['-70%', '5%'])

    //mobile top animation
    const top = useTransform(scrollYProgress, [0.33, 0.66], ['100vh', '4vh'])
    const top2 = useTransform(scrollYProgress, [0.66, 0.99], ['100vh', '8vh'])


    return (
        <div ref={ref} className='gradient h-[250vh] lg:h-[150vh] w-full relative z-20 mb-[200vh] lg:mb-[100vh] border-b border-gray-300 rounded-b-3xl'>
            <div className="px-6 text-[#7a4924] sticky top-0 lg:h-screen flex items-center justify-center flex-col container mx-auto">
                <h2 className='text-3xl lg:text-6xl uppercase font-bold mb-6 lg:mb-12 mt-6 lg:mt-0'>Adventages</h2>
                <motion.div className="grid grid-rows-3 grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 relative w-full h-[100vh] lg:h-auto" style={{scale: mediaMatch ? scale : 1}}>
                    <Adventage image={coin}
                    heading={'Low Prices'}
                    marginFirst={marginFirst}
                    text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae aperiam impedit nesciunt tenetur placeat exercitationem laborum. '}/>
                    <Adventage image={parking}
                    top={top}
                    heading={'Free parking'}
                    text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae aperiam impedit nesciunt tenetur placeat exercitationem laborum. '}/>
                    <Adventage image={wifi}
                    top={top2}
                    marginLast={marginLast}
                    heading={'WiFi'}
                    text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae aperiam impedit nesciunt tenetur placeat exercitationem laborum. '}/>
                </motion.div>
            </div>
        </div>
    )
}

const Adventage = ({image, heading, text, marginFirst, marginLast, top, opacity}) => {
    const mediaMatch = useMediaQuery('(min-width: 992px)');

    const marginValue = marginFirst ? marginFirst : marginLast
    return (
        <motion.div 
        initial={{opacity: 0.3, scale: 0.7}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.4}}
        viewport={{ amount: 0.4 }}
        className='bg-[#E8D7BD] h-[80vh] lg:h-auto rounded-3xl overflow-hidden lg:even:z-10 shadow-lg shadow-gray-300 border border-gray-400 w-full absolute lg:static left-0 flex flex-col justify-center' 
        style={{marginLeft: mediaMatch ? marginValue : 0, top: !mediaMatch ? top : 0}}>
            <div className='w-full h-[50vh] flex justify-center items-center max-h-[450px]'>
                <img src={image} alt={heading} className='object-cover w-[100%] h-[100%]' />
            </div>
            <div className='lg:mt-2 lg:mb-6 p-4 lg:p-6 text-center flex flex-col'>
                <h3 className='font-bold text-3xl mb-2'>{heading}</h3>
                <p className='mb-2'>{text}</p>
            </div>
        </motion.div>
    )
}