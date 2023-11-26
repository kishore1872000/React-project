import React, { useState, useRef, useEffect } from 'react'
import './Logo.css'
import { motion } from "framer-motion";
function Logo() {
    const [higth, setHieght] = useState(0);

    const carousel = useRef();

    useEffect(() => {
        setHieght(carousel.current.scrollHight - carousel.current.offsetHeight)
    }, []);
    return (
        <motion.div ref={carousel} className='Logo'>
            <motion.div div drag="y" dragConstraints={{ bottom: 0, top: higth }} className='LogoWord'>
                <h2>LOGO</h2>
            </motion.div>
        </motion.div>
    )
}

export default Logo;