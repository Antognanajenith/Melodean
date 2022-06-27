import React,{useEffect,useState} from 'react';

import {client} from "../Library/Client.js";

const Heropattern = ({allproducts}) => {
  const [titled,setTitled] = useState("");
 useEffect(()=>{
   
 },[])
 
      //const perenna  = process.env.NEXT_PUBLIC_SANITY_TOKEN
  // const jasonholderapi = async() =>{
  //   try{
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  //     const datam = await res.json();
  //     console.log(datam)
  //   }catch(e){
  //     console.log("mudinchu failure")
  //   }
  // };
  // useEffect(()=>{
  //   jasonholderapi();
  // },[])

     
  return (
    <div className='relative flex items-center justify-center h-screen w-screen'><div className='absolute  bottom-10 text-white text-xl md:w-2/5 w-4/5'>
        <p className='text-3xl font-bold uppercase text-center'>So much <code class=" font-sans text-pinkish_violet">moore </code>for so less.Unlock your love ,Passion &  <code class=" font-sans text-pinkish_violet">Ear</code></p>
        <div className='flex md:flex-row flex-col items-center justify-center md:gap-10 gap-3 pt-6'>
          <button className='bg-bluer h-9 rounded-2xl text-whitesmoker border-0 px-3'>NEW-LAUNCHES!</button>
          <button className='bg-slate-700  h-9  rounded-2xl text-whitesmoker border-0 px-3 backdrop-filter backdrop-blur-md bg-opacity-20'>VIEW ALL ➞</button>
        </div>
      </div></div>
  )
}

export default Heropattern;



