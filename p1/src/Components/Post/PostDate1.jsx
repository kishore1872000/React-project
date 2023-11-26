import React from 'react';
import { CiHeart } from "react-icons/ci";
import { FiMoreVertical } from "react-icons/fi";
import { FaAt } from "react-icons/fa";

import "./PostDate1.css";
import Icon from './icon';


const imgUser = "https://images.unsplash.com/photo-1682687221248-3116ba6ab483?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D";

const imgphoto = "https://images.unsplash.com/photo-1698615033858-25c422f3e076?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8";

function PostDate1() {
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

export default PostDate1;