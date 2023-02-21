import React from 'react';
import {useStateContext} from "../Contextlogic/StateContext";


const Successshow = () => {
  const {cartitems} = useStateContext();
  console.log("cartitems from success page uh ",cartitems);
  return (
    <div className='w-full h-screen pt-20 text-white text-center bg-blackersmoke'>Success,your product is on the way!!
      <div className='flex flex-col gap-2 items-center justify-center'>
        {cartitems && cartitems.map((iper)=>(
          <div className='text-white text-xl p-5 gap-3' key={iper._id}>{iper.name}asdasd</div>
        ))}
      </div>
    </div>
  )
}

export default Successshow