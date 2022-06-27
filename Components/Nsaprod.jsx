import React from 'react';
import Image from 'next/image';

const Nsaprod = ({allproducts}) => {

  if(allproducts){
   console.log("vanten")
  }      
  return (
    <div className='w-full h-screen text-whitesmoker'>
        <div className='w-full h-screen bg-blackersmoke  flex flex-col items-center '>
            <div className='flex flex-col basis-1/4 bg-yellow-300 w-full justify-evenly '>
                <div className='text-md pt-16 px-4'><h1>Home/Products/New arrivals</h1></div>
                <div className='text-center'><h1>NEW ARRIVALS</h1></div>
            </div>
            <div className='flex basis-5/6 md:flex-row flex-col bg-green-600 w-full'>
                <div className='flex flex-col basis-1/5 bg-pink-200 w-full gap-2 p-4'>
                  <div className='flex-col flex'>
                  <h1 className='text-lg uppercase pb-2'>Brand</h1>
                  {allproducts?.map((branddatam)=>(
                    <h1 className='text-base antialiased  tracking-wide'>{branddatam.name}</h1>
                  ))}</div>
                </div>
                <div className='basis-4/5 flex bg-pink-500 w-full'>
                  <div className='relative p-6 gap-4 flex flex-wrap'>
                    {[1,2,3,4,5,6,7,8,9,0].map((datass)=>(
                        <div   className='inline-block md:h-[21rem] rounded-lg md:w-60 h-96 w-72 bg-green-500'>
                        <div className='flex relative w-full h-full  rounded-lg flex-col-reverse'>
                          <div className='flex flex-col basis-2/5 w-full bg-stone-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 rounded-lg rounded-t-2xl items-center justify-evenly gap-3'>
                          
                            <h1  className='text-lg'>{datass.name}</h1>
                          <h1 className='text-xl'>{datass.price} $</h1><h1 className="tracking-widest text-2xl">*****</h1>
                          </div>
                        </div>
                        {/* //{datass.price} */}
                        </div>
                  ))}
              </div>
                </div>
            </div>
        </div>
        
        </div>
  )
}

export default Nsaprod;