import React, { useState, useRef, useEffect } from 'react'
import './Post.css'
import PostDate from './PostDate'
import PostDate1 from './PostDate1'
import { motion } from "framer-motion";
import Subside from './Subside/Subside';

function Post() {
    const [higth, setHieght] = useState(0);

    const carousel = useRef();

    useEffect(() => {
        setHieght(carousel.current.scrollHight - carousel.current.offsetHeight)
    }, []);

    return (
        <motion.div ref={carousel} className='Post'>
            <motion.div div drag="y" dragConstraints={{ bottom: 0, top: higth }} className='PostInput'>
                <PostDate />
                <motion.div className='PostInput1'>
                    <PostDate1 />
                </motion.div>
            <Subside /> 
            </motion.div>
        </motion.div>
    )
}

export default Post