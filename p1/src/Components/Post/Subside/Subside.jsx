import React from 'react'
import './Subside.css'
import { AiFillStar } from "react-icons/ai";
function Subside() {
    const image1 = "https://images.unsplash.com/photo-1579965342575-16428a7c8881?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbnRpbmd8ZW58MHx8MHx8fDA%3D";
    
    const image2="https://images.unsplash.com/photo-1596935291488-d73ea9b85a10?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGFydCUyMHdhbGx8ZW58MHx8MHx8fDA%3D";
    
    const image3="https://images.unsplash.com/photo-1559913929-0646f008484b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxoYW5kfGVufDB8fDB8fHww";
    
    const image4="https://images.unsplash.com/photo-1620720192386-7452fdd36a29?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGhvbml8ZW58MHx8MHx8fDA%3D";

    return (
        <div className='Subside'>
            <div className='folder-left'>
                <div className='item1'>
                    <img src={image2} alt='item1' />
                    <p >Modern Wall Decor Framed Painting</p>
                    <p className='money'>$199.99</p>
                </div>
                <div className='ic4'>
                    {[...Array(5)].map(star => {
                        return (
                            <label>
                                <AiFillStar size={20} />
                            </label>
                        );
                    })}
                </div>
                <div className='folder-leftside'>
                    <div className='item1'>
                        <img src={image1} alt='item1' />
                        <p >Modern Wall Decor Framed Painting</p>
                        <p className='money'>$199.99</p>
                    </div>
                    <div className='ic4'>
                        {[...Array(5)].map(star => {
                            return (
                                <label>
                                    <AiFillStar size={20} />
                                </label>
                            );
                        })}
                    </div>
                </div>
                <div className='folder-rightside'>
                    <div className='item1'>
                        <img src={image3} alt='item1' />
                        <p >Modern Wall Decor Framed Painting</p>
                        <p className='money'>$199.99</p>
                    </div>
                    <div className='ic4'>
                        {[...Array(5)].map(star => {
                            return (
                                <label>
                                    <AiFillStar size={20} />
                                </label>
                            );
                        })}
                    </div>
                </div>
                <div className='folder-right'>
                    <div className='item1'>
                        <img src={image4} alt='item1' />
                        <p >Modern Wall Decor Framed Painting</p>
                        <p className='money'>$199.99</p>
                    </div>
                    <div className='ic4'>
                        {[...Array(5)].map(star => {
                            return (
                                <label>
                                    <AiFillStar size={20} />
                                </label>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Subside;