import React,{useRef,useEffect,useState} from 'react';
import Image from 'next/image';
import Heropattern from './Heropattern';
import Vredpattern from './Vredpattern';
import Productsspec from './Productsspec';
import Productsdummy from './productsdummy';
import Footer from './Footer';

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
      <div  className="flex items-center h-screen w-full snap-start bg-center bg-raisinblack" ref={botref}>
          <Vredpattern/>    
      </div>
      <div  className="flex items-center h-screen w-full snap-start bg-center bg-purpleblack" ref={botref}>
          <Productsspec allproducts={allproducts}/>  
      </div>
   
      
      <div  className="flex items-center h-screen w-full snap-start bg-center bg-purpheadph bg-cover" ref={botref}>
        {/* <button onClick={mvtohome}>click to move </button> */}
sadf
        
      </div> 
      <div  className="flex items-center h-screen w-full snap-start bg-center flex-col-reverse bg-purpleblack" ref={botref}>
          <Footer/>
      </div>
     
    </div>
   
  )
}

export default Hero;

