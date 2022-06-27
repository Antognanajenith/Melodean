import React,{useRef,useEffect,useState} from 'react';
import Image from 'next/image';
import Heropattern from './Heropattern';
import Vredpattern from './Vredpattern';
import Productsspec from './Productsspec';
import Productsdummy from './productsdummy';

const Hero = (allproducts) => {
 

  const uppref = useRef(null);
  const botref = useRef(null);

  const mvtohome = ()=>{uppref.current?.scrollIntoView()}
  const mvtosec2 = ()=>{botref.current?.scrollIntoView()}
  
  const bgblackStyle = {
    backgroundImage:`url("https://images.unsplash.com/photo-1538505135222-6238e66e7acc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4949&h=3299")`,
    backgroundPosition: "center center",
    backgroundAttachment:"fixed",
    
  };
  const bgredStyle = {
    backgroundImage:`url("https://images.unsplash.com/photo-1538505135222-6238e66e7acc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=3299&h=4949")`,
    backgroundSize:"cover",
  };
  const bgblack2Style = {
    backgroundImage:`url("https://images.unsplash.com/photo-1547932087-59a8f2be576e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=6000&h=4000")`,
    backgroundSize:"cover",
  };

  useEffect(()=>{
    console.log("hello");
  } ,[uppref])
  
  return (
    <div className=' w-screen h-screen snap snap-mandatory snap-y overflow-y-scroll md:overflow-x-hidden scroll-smooth'>
      <div  className="flex items-center h-screen w-full snap-start bg-center"  style={bgblack2Style} ref={uppref}>   
        <Heropattern allproducts={allproducts}/>
        </div>
      <div  className="flex items-center h-screen w-full snap-start bg-center bg-blacksmoke" ref={botref}>
          <Vredpattern/>    
      </div>
      <div  className="flex items-center h-screen w-full snap-start bg-center bg-blacksmoke" ref={botref}>
          <Productsspec allproducts={allproducts}/>  
      </div>
   
      
      <div  className="flex items-center h-screen w-full snap-start bg-center" style={bgredStyle} ref={botref}>
        <button onClick={mvtohome}>click to move </button>

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
      </div> 
      <div  className="flex items-center h-screen w-full snap-start bg-center bg-white" ref={botref}>
      <div className='flex basis-4/6 flex-row justify-start gap-8 md:overflow-hidden md:justify-evenly overflow-x-scroll md:pt-10 pt-20 px-8'>
            <div className='md:h-[22rem] md:w-60 h-96 w-72 bg-white drop-shadow-xl flex flex-col container items-center'>
                <div className='basis-2/5  w-36 h-36  p-2 overflow-hidden relative'>
                    <Image layout='fill' objectFit='cover' className='absolute rounded-full ' src="https://images.unsplash.com/photo-1653463174260-421a58ef7975?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500" alt="" />
                </div>
                <div className='basis-2/5  w-full'>
                
                  
                </div>
            </div>
           
        </div>  
      </div>
    </div>
   
  )
}

export default Hero;

