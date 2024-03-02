import React, { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useAnimationControls, useInView, useScroll, useTransform } from 'framer-motion'
import room1 from '../assets/section2/room_1.png'
import room2 from '../assets/section2/room_2.png'
import room3 from '../assets/section2/room_3.png'
import room4 from '../assets/section2/room_4.png'

export const About = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({target: ref})
    const [translateValue, setTranslateValue] = useState('')
    const smoothProgress = useSpring(scrollYProgress, {mass: 0.4})

    const translate = useTransform(smoothProgress, [0.6,1], ['0%', translateValue])
    const width = useTransform(smoothProgress, [0.2, 0.4], ['90%', '100%'])

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
          if (latest > 0.6) {
            const setTranslate = () => {
              const image = document.querySelector('.about-image');
              const text = document.querySelector('.about-text');
      
              const container = document.querySelector('.about-container');
              const styles = window.getComputedStyle(container);
              const margin = parseFloat(styles.getPropertyValue('margin-left'));
              const width = window.innerWidth - (((((image.clientWidth + 20) * 4) + 48) + text.clientWidth + 32) + margin * 2);
      
              setTranslateValue(`${width}px`);
            };
      
            setTranslate();
            window.addEventListener('resize', setTranslate);
      
            return () => {
              window.removeEventListener('resize', setTranslate);
            };
          }
        });
      
        return () => unsubscribe();
      }, []);
    
    return (
        <div className='flex justify-center'>
            <motion.div ref={ref}
            initial={{width: '90%'}}
            style={{width: width}}
            className='h-[300vh] pt-[100vh] relative'>
                <div className='sticky top-0 gradient h-screen rounded-t-3xl border border-b-0 border-gray-300 z-10 overflow-hidden'>
                        <ProgressBar scrollYProgress={smoothProgress}/>
                    <div className="container mx-auto h-full about-container ">
                        <motion.div 
                        style={{translate: translate}}
                        className="flex items-center justify-start h-full gap-8 p-6 relative" >
                            <div className="min-w-[320px] md:min-w-[500px] about-text text-[#7a4924]">
                                <Texts />
                            </div>
                            <div className="h-2/3">
                                <Photos/>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
const Texts = () => {
    const refText = useRef(null)
    const hText = 'About us'.split('')
    const pText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo voluptas laborum vero rerum sequi harum sed animi reiciendis odio sunt, quod tempora ipsam amet quo error, debitis esse corporis iste.'.split('')
    const pSecondText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo voluptas laborum vero rerum sequi harum sed animi reiciendis odio sunt, quod tempora ipsam amet quo error, debitis esse corporis iste.'.split('')

    const animate = useAnimationControls()
    const animate2 = useAnimationControls()
    const animate3 = useAnimationControls()

    const isInView = useInView(refText)

    useEffect(() => {
        if(isInView){
            const startTyping = async () => {
                await animate.start('inView')
                await animate2.start('inView')
                await animate3.start('inView')
            }
            startTyping('inView')
        }
    }, [isInView])
    return (
        <>
            <h2 ref={refText} className='text-3xl uppercase font-bold'>
            <TextTyping text={hText} speed={50} animate={animate} />
            </h2>
            <p className='mt-6'>
                <TextTyping text={pText} speed={200} animate={animate2} />
            </p>
            <p className='mt-6'>
                <TextTyping text={pSecondText} speed={200} animate={animate3} />
            </p>
        </>
    )

}
const TextTyping = ({ text, speed, animate }) => {
    return (
        <>
            {text.map((letter, i) => (
                <motion.span
                key={i}
                initial={{opacity: 0}}
                variants={{inView: {opacity: 1}}}
                animate={animate}
                transition={{ 
                    delay:  i / speed,
                    duration: 0.25
                }}
                >
                    {letter}
                </motion.span>
            ))}
        </>
    )
}
const Photos = () => {
    return (
        <div className='flex items-center justify-start gap-5 p-5 h-full max-w-[100vw]'>
            <motion.img initial={{opacity: 0}} whileInView={{opacity: 1}} src={room1} alt="" className='about-image rounded-3xl border border-gray-300 h-full aspect-square max-w-[100vw]'/>
            <motion.img initial={{opacity: 0}} whileInView={{opacity: 1}} src={room2} alt="" className='about-image rounded-3xl border border-gray-300 h-full aspect-square max-w-[100vw]'/>
            <motion.img initial={{opacity: 0}} whileInView={{opacity: 1}} src={room3} alt="" className='about-image rounded-3xl border border-gray-300 h-full aspect-square max-w-[100vw]'/>
            <motion.img initial={{opacity: 0}} whileInView={{opacity: 1}} src={room4} alt="" className='about-image rounded-3xl border border-gray-300 h-full aspect-square max-w-[100vw]'/>
        </div>
    )
}
const ProgressBar = ({scrollYProgress}) => {
    const path = useTransform(scrollYProgress, [0.6, 1], [0, 1])
    return (
        <svg width="100" height="100" viewBox="0 0 100 100" className='absolute top-4 md:top-12 left-0 md:left-16 min-h-32 min-w-32'>
        <circle cx="50" cy="50" r="30" pathLength="1"
        style={{
            strokeDashoffset: 0,
            strokeWidth: '15%',
            fill: 'none',
            stroke: '#E7CFAD',
            opacity: 0.3
        }} />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
        //   pathLength="1"
          className=""
          style={{ 
              strokeDashoffset: 0,
              strokeWidth: '15%',
              fill: 'none',
              stroke: '#E7CFAD',
              pathLength: path,
            }}
        />
      </svg>
    )
}
