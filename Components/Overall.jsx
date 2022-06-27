import React from 'react';
import Hero from "./Hero";
import Navbar from './Navbar';


const Overall = (allproducts) => {

 
  return (
    <div className='text-center'>
        <Navbar/>
        <Hero allproducts={allproducts}/>
        
    </div>
  )
}

export default Overall;