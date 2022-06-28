import React,{useEffect,useState} from 'react';
import { motion } from 'framer-motion';

import {client} from "../Library/Client.js";

const Heropattern = ({allproducts}) => {
  const [titled,setTitled] = useState("");
 useEffect(()=>{
   
 },[])

 const variant1fm ={
  visible: { opacity: 1, scale:1 },
  hidden: { opacity: 0, scale:.75 },
 }
      
  return (
    <div className='relative flex items-center justify-center h-screen w-screen'><div className='absolute  bottom-10 text-white text-xl md:w-2/5 w-4/5'>
      <motion.div animate="visible" initial="hidden" variants={variant1fm} transition={{ duration: 2 ,delay: .2,type: "spring", stiffness: 200}}>
        <p className='text-3xl font-bold uppercase text-center'>So much <code class=" font-sans text-pinkish_violet">moore </code>for so less.Unlock your love ,Passion &  <code class=" font-sans text-pinkish_violet">Ear</code></p>
        <div className='flex md:flex-row flex-col items-center justify-center md:gap-10 gap-3 pt-6'>
          <button className='bg-bluer h-9 rounded-2xl text-whitesmoker border-0 px-3'>NEW-LAUNCHES!</button>
          <button className='bg-slate-700  h-9  rounded-2xl text-whitesmoker border-0 px-3 backdrop-filter backdrop-blur-md bg-opacity-20'>VIEW ALL ➞</button>
        </div></motion.div>
      </div></div>
  )
}

export default Heropattern;



