import React from 'react'
import './Rightbar.css'
import { FaAt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const image1 = "https://images.unsplash.com/photo-1698864467875-96a017dfb2a5?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8";
const image = "https://plus.unsplash.com/premium_photo-1673567872063-ad00f02f7e2d?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBhaW50aW5nfGVufDB8fDB8fHww";

const image2="https://images.unsplash.com/photo-1693493418379-24c57303aedd?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
const image3="https://images.unsplash.com/photo-1698778573572-4eae301f500b?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"


const image4="https://images.unsplash.com/photo-1698854617310-2211e93709be?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8"
const image5="https://images.unsplash.com/photo-1698414126582-96bc9a781e87?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"

function Rightbar() {
    return (
        <div className='Rightbar'>
            <div className='Right-Top'>
                <p> <span style={{ fontSize: "Large", fontFamily: "monospace" }}>Artist</span> Photographers</p>
            </div>
            <div className='Right-center'>
                <div className='Centerbar'>
                    <img
                        src={image}
                        alt=''
                        className='item15'
                    />
                </div>

                <div className='holder' >
                    Leones
                </div>
                <div className='mentioned'>
                    <FaAt size={10} />
                    <span >thewallart</span>
                </div>
                
                <div>
                    <img
                        src={image1}
                        alt=''
                        className='item16'
                    />
                </div>
                <div className='p12'>
                <GoDotFill/>
                </div>

            </div>
            <div className='Right-center1'>
                <div className='Centerbar'>
                    <img
                        src={image3}
                        alt=''
                        className='item15'
                    />
                </div>

                <div className='holder' >
                    Leones
                </div>
                <div className='mentioned'>
                    <FaAt size={10} />
                    <span >thewallart</span>
                </div>
                <div>
                    <img
                        src={image2}
                        alt=''
                        className='item16'
                    />
                </div>
                <div className='p12'>
                <GoDotFill/>
                </div>

            </div>
            <div className='Right-center2'>
                <div className='Centerbar'>
                    <img
                        src={image5}
                        alt=''
                        className='item15'
                    />
                </div>

                <div className='holder' >
                    Leones
                </div>
                <div className='mentioned'>
                    <FaAt size={10} />
                    <span >thewallart</span>
                </div>
                <div>
                    <img
                        src={image4}
                        alt=''
                        className='item16'
                    />
                </div>
                <div className='p12'>
                <GoDotFill/>
                </div>

            </div>
        </div>
    )
}
export default Rightbar;