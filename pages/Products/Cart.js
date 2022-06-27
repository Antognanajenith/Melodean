import React from 'react';
import Cartcomp from '../../Components/Cartcomp';
import Navbar from '../../Components/Navbar';

const Cart = () => {
  return (
    <div className='items-center w-screen h-full bg-blackersmoke flex flex-col overflow-x-hidden'>
        <Navbar/>
        <Cartcomp/>
        
    </div>
  )
}

export default Cart