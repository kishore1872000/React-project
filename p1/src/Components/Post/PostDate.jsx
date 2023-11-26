import React from 'react';
import { CiHeart } from "react-icons/ci";
import { FiMoreVertical } from "react-icons/fi";
import { FaAt } from "react-icons/fa";

import "./PostDate.css";
import Icon from './icon';


const imgUser = "https://images.unsplash.com/photo-1695760832442-6e4f479f8786?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const imgphoto = "https://images.unsplash.com/photo-1698611227506-b01ec7158cb8?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D";

function PostDate() {
    return (
        <div className='PostDate'>
            <div className='img1'>
                <div className='container'>
                    <img
                        src={imgUser}
                        alt=''
                    />
                    <span className='Username'>Lara Leones</span>
                    <div className='username2'>
                        <FaAt />
                        <span >thewallart</span>
                    </div>
                </div>
                <FiMoreVertical className='menu' />
            </div>
            <div className='thought' >
                <p>it is a long fact established that a reader will be distracted by the content of a page
                    when looking at its layout. <span>Read More</span></p>
                <img
                    src={imgphoto}
                    alt=''
                />
            </div>
            <CiHeart className='icon3' />

        <Icon/>
        </div>
    )
}

export default PostDate