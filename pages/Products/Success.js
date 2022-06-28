import React from 'react';
import Navbar from "../../Components/Navbar";
import Successshow from '../../Components/Successshow';

const Success = () => {
  return (
    <div className='items-center w-screen h-full bg-blackersmoke flex flex-col overflow-x-hidden'>
        <Navbar/>
        <Successshow/>
    </div>
  )
}

export default Success