import React from 'react';
import transpicon from "../public/Icons/Melodeon_white.png";
import slogond from "../public/Icons/Melodeon -slogon.png";
import Image from 'next/image';
import Link from 'next/link';
import {BsTwitter,BsLinkedin,BsGithub} from "react-icons/bs";

const Footer = () => {
  return (
    <div className='text-white text-3xl w-screen bg-purpheadph bg-cover bg-center md:h-72 h-[32rem] rounded-t-3xl flex flex-col p-2 gap-4 justify-evenly'>
      <div className='flex flex-row basis-11/12'>
        <div className=' basis-1/4 w-full h-full flex flex-col gap-2 p-6 pt-8'>
          <div className='flex flex-row basis-2/6' >
            <div><Image src={transpicon} alt="logoicon" width="54" height="46" className=" "/></div>
            <div><Image src={slogond} alt="slogoicon" width="110" height="46" className=" "/></div>
          </div>
          <div className='basis-2/6 text-base '><p className='text-left'>Ecommerce site to buy high fidelity gear's</p></div>
        </div>
        <div className=' basis-2/4 w-full h-full flex justify-around p-6 pt-8'>
          <div className='flex flex-col gap-4 text-base justify-center items-start'>
          <h1 className='text-2xl'>Category</h1>
            <h1>abasdsdf</h1>
            <h1>bsdfsdf</h1>
            <h1>csdfsdfsd</h1>
          </div>
          <div className='flex flex-col gap-4 text-base justify-center items-start'>
          <h1 className='text-2xl'>Brands</h1>
            <h1>abasdsdf</h1>
            <h1>bsdfsdf</h1>
            <h1>csdfsdfsd</h1>
          </div>
        </div>
        <div className=' basis-1/4 w-full h-full flex gap-4 flex-col justify-center items-start p-6 pt-8'>
          <h1 className='text-2xl'>Contact</h1>
          <h1 className='text-base'>Antognanajenith@gmail.com</h1>
          <h1 className='text-base'>34398439number</h1>
          <div className='flex flex-row gap-4 '>
            <h1><BsTwitter size="22px"/></h1>
            <h1><BsLinkedin size="22px"/></h1>
            <h1><BsGithub size="22px"/></h1>
          </div>
        </div>
      </div>  
      <div className='basis 1/12'>
         <h1 className='text-center text-sm'>© 2022 Melodean.com | All rights reserved</h1>
      </div>
    </div>
  )
}

export default Footer