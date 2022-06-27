import React from 'react';
import Nsaprod from '../../Components/Nsaprod';
import Navbar from '../../Components/Navbar';
import { client } from '../../Library/Client';

const NewArrivals = ({allproducts}) => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <div className='w-screen h-full  bg-blackersmoke flex flex-col  items-center'>
            <Nsaprod allproducts={allproducts}/>
        </div>
    </div>
  )
}

export async function getServerSideProps() {
    const queryproducts = '*[_type=="product"]';
    const allproducts = await client.fetch(queryproducts);
    
    return { props:
       {allproducts}
       };
  }

export default NewArrivals;