import React, { useEffect, useState, useRef }  from 'react'
import { Apartments } from './Apartments'
import { Footer } from './Footer'
import { useScroll, motion, useTransform } from 'framer-motion'

export const BottomSection = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll()
    const bg = useTransform(scrollYProgress, [0.9,1], ['#E8D7BD', '#302217'])
    const [height, setHeight] = useState(0)
    useEffect(() => {
        
        if (!ref.current) return;
        const resizeObserver = new ResizeObserver(() => {
            setHeight(-ref.current.clientHeight - 100)
        });
        resizeObserver.observe(ref.current);
        return () => resizeObserver.disconnect();
    }, [])
    return (
        <motion.div 
        style={{backgroundColor: bg, bottom: height}}
        className={`z-10 w-full h-[500vh] absolute`}>
            <div ref={ref} className="sticky top-0">
                <Apartments/>
                <Footer/>
            </div>
        </motion.div>
    )
}
