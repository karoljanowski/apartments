import React, { useRef } from 'react'
import coin from '../assets/section3/coin.png'
import parking from '../assets/section3/parking.png'
import wifi from '../assets/section3/wifi.webp'
import { motion, useScroll, useTransform } from 'framer-motion'

export const Adventages = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({target: ref})
    const scale = useTransform(scrollYProgress, [0,1], [0.8, 1])
    const marginFirst = useTransform(scrollYProgress, [0,1], ['70%', '-5%'])
    const marginLast = useTransform(scrollYProgress, [0,1], ['-70%', '5%'])

    return (
        <div ref={ref} className='gradient h-[150vh] w-full relative z-20'>
            <div className="text-[#7a4924] sticky top-0 h-screen flex items-center justify-center flex-col container mx-auto">
                <h2 className='text-6xl uppercase font-bold mb-12'>Adventages</h2>
                <motion.div className="grid grid-cols-3 relative" style={{scale: scale}}>
                    <Adventage image={coin}
                    heading={'Low Prices'}
                    marginFirst={marginFirst}
                    text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae aperiam impedit nesciunt tenetur placeat exercitationem laborum. Recusandae quibusdam mollitia, tenetur optio ex expedita in error veritatis doloremque. Cum, dolore. Delectus.'}/>
                    <Adventage image={parking}
                    heading={'Free parking'}
                    text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae aperiam impedit nesciunt tenetur placeat exercitationem laborum. Recusandae quibusdam mollitia, tenetur optio ex expedita in error veritatis doloremque. Cum, dolore. Delectus.'}/>
                    <Adventage image={wifi}
                    marginLast={marginLast}
                    heading={'WiFi'}
                    text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae aperiam impedit nesciunt tenetur placeat exercitationem laborum. Recusandae quibusdam mollitia, tenetur optio ex expedita in error veritatis doloremque. Cum, dolore. Delectus.'}/>
                </motion.div>
            </div>
        </div>
    )
}

const Adventage = ({image, heading, text, marginFirst, marginLast}) => {
    const marginValue = marginFirst ? marginFirst : marginLast
    return (
        <motion.div className='bg-[#E8D7BD] rounded-3xl overflow-hidden even:z-30 shadow-lg shadow-gray-300 border border-gray-400 w-full ' style={{marginLeft: marginValue}}>
            <div className='w-full h-[50vh] flex justify-center items-center max-h-[450px]'>
                <img src={image} alt={heading} className='object-cover w-[100%] h-[100%]' />
            </div>
            <div className='mt-2 mb-6 p-6 text-center'>
                <h3 className='font-bold text-3xl'>{heading}</h3>
                <p className='mt-4'>{text}</p>
            </div>
        </motion.div>
    )
}