import React from 'react';
import Image from 'next/image';


const Vredpattern = () => {
  return (
    <div className='text-white flex flex-col text-center md:h-screen h-full w-screen  md:justify-evenly justify-between md:pt-16'>
        <div className='basis-1/6 md:pt-0 pt-28 items-center'>
            <h1 className='font-bold text-2xl'>Shop the World’s Best Selection of Premium Headphones.</h1>
        </div>
        <div className='flex basis-4/6 flex-row justify-start gap-8 md:overflow-hidden md:justify-evenly overflow-x-scroll md:pt-10 pt-20 px-8'>
            <div className='md:h-[22rem] md:w-60 h-96 w-72 bg-gray-800 drop-shadow-xl backdrop-filter bg-clip-padding border border-gray-100 backdrop-blur-md bg-opacity-20 flex flex-col container shrink-0 items-center'>
                <div className='basis-2/5  w-36 h-36  p-2 overflow-hidden relative'>
                    <Image layout='fill' objectFit='cover' className='absolute rounded-full ' src="https://images.unsplash.com/photo-1653463174260-421a58ef7975?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500" alt="" />
                </div>
                <div className='basis-2/5  w-full'>asd</div>
            </div>
            <div className='md:h-[22rem] md:w-60 h-96 w-72 bg-red-500 flex container shrink-0'>sasasd</div>
            <div className='md:h-[22rem] md:w-60 h-96 w-72 bg-red-500 flex container shrink-0'>asdasdgfsgsdf</div>
            <div className='md:h-[22rem] md:w-60 h-96 w-72 bg-red-500 flex container shrink-0'>sasasd</div>
        </div>
        <div className='basis-1/6 pt-4 items-center'>
            <h1 className='text-xl '>We Love Audiophiles and They Love Us Too.</h1>
            <h1 className='text-xl '>Thousands of 5-star reviews on Trustpilot make us audiophile approved.</h1>
        </div>
    </div>
  )
}

export default Vredpattern;