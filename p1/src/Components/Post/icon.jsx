import React from 'react'
import { CiHeart } from "react-icons/ci";
import { SlBubble } from "react-icons/sl";
import { TiArrowForwardOutline } from "react-icons/ti";
import './icon.css';

function Icon() {
    return (
        <div className='posticon' >
            <CiHeart />
            <span>9.8k</span>
            <SlBubble />
            <span>8.0k</span>
            <TiArrowForwardOutline />
            <span>7.2k</span>
        </div>
    )
}

export default Icon;