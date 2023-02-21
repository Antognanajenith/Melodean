import React, { useState } from "react";
import { AiOutlineMinusSquare } from "react-icons/ai";

import { AiOutlinePlusSquare } from "react-icons/ai";
import { useStateContext } from "../Contextlogic/StateContext";

export const Productsupper = ({ allproducts, productone }) => {
  const { show, oneqty, deconeqt, inconeqt, onadd, cartitems } =
    useStateContext();
  if (cartitems) {
    console.log("hi from cartitems");
    console.log(cartitems);
  }
  return (
    <div className='flex md:flex-row flex-col text-white  h-screen w-full bg-green-400  md:p-16 py-16 px-6 md:space-x-4 gap-4 items-center'>
      <div className='basis-1/2 bg-red-200 h-full w-full flex  flex-col p-6 grow-0 gap-1'>
        <div className='justify-start'>
          <h1>Headphones\AKG</h1>
        </div>
        <div className='basis-4/6 bg-stone-400 rounded-2xl w-full h-full items-center justify-center '>
          hmm
        </div>
        <div className='relative basis-2/6 flex bg-yellow-200 md:w-[34rem] 2xl:w-[52rem] w-full h-full items-center  py-3  '>
          <div className='  space-x-2 h-full overflow-x-scroll flex-nowrap whitespace-nowrap '>
            <div className='inline-block bg-green-300 h-full w-40 rounded-md'>
              ones
            </div>
            <div className='inline-block bg-green-300 h-full w-40'>ones</div>
            <div className='inline-block bg-green-300 h-full w-40'>ones</div>
            <div className='inline-block bg-green-300 h-full w-40'>ones</div>
            <div className='inline-block bg-green-300 h-full w-40'>ones</div>
          </div>
        </div>
      </div>
      <div className='basis-1/2 bg-red-400 h-full w-full items-center flex flex-col flex-shrink-0 p-4 gap-4'>
        <div className='basis-1/4 w-full flex flex-col justify-around p-2 bg-violet-200'>
          <h1>Brand</h1>
          <h1>PRODUCT NAME{productone.name}</h1>
          <h1>product full abbreviation</h1>
        </div>
        <div className='basis-1/4 w-full  bg-violet-400 flex flex-col justify-around p-2'>
          <h1>Rating in star</h1>
          <h1>Price</h1>
          <h1>In stock!</h1>
        </div>
        <div className='basis-1/4 w-full  bg-violet-400 flex flex-col justify-around p-2'>
          <h1>choose variety</h1>
          <div className='flex gap-1 items-center'>
            <AiOutlineMinusSquare onClick={() => deconeqt()} />
            <h1>{oneqty}</h1>
            <AiOutlinePlusSquare onClick={() => inconeqt()} />
          </div>
        </div>
        <div className='basis-1/4 w-full  bg-violet-400 flex items-center justify-around'>
          <button className='bg-bluer h-14 w-60 rounded-xl'>BUY NOW</button>
          <button
            className='border-2 border-bluer text-bluer h-14 w-60 rounded-xl'
            onClick={() => onadd(productone, oneqty)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export const Productslower = ({ allproducts }) => {
  const [ftselection, setFtselection] = useState("1");
  let kanrad;

  if (ftselection) {
    kanrad = (
      <div className='text-3xl p-20'>
        from Productslower{allproducts[1].details}
      </div>
    );
  }
  return (
    <div className='flex text-white  h-screen w-full  overflow-x-hidden bg-green-700 '>
      {kanrad}
    </div>
  );
};
