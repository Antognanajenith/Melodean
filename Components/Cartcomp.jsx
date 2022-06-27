import React from 'react';
import {useStateContext} from "../Contextlogic/StateContext";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { AiOutlinePlusSquare } from "react-icons/ai";
import getStripe from '../Library/GetStripe';
import toast from 'react-hot-toast';

const Cartcomp = () => {
    const {show,cartitems,totalprice,totalquantity,deconeqt,inconeqt,oneqty,toggleCTquantity,onRemove} = useStateContext();

    const handlecheckout = async() =>{
        const stripe = await getStripe(); 
        
        const response = await fetch("/api/Stripe",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify(cartitems),
        });
       // if(response.statusCode === 500) return;

        const data = await response.json();
        
        toast.loading("Redirecting...");

        stripe.redirectToCheckout({sessionId:data.id});
    };



  return (
    <div className='w-full h-screen bg-blue-200 items-center pt-16 flex md:flex-row flex-col'>
        {}
        <div className='flex flex-col basis-4/6 h-full w-auto bg-yellow-200 opacity-80 p-4 gap-4'>
            <h1 className='text-center text-xl font-semibold'>Cart details</h1>
            {cartitems && cartitems.map((cartitemed,index)=>(
                 <div key={cartitemed._id} className='bg-green-200 w-full h-36 rounded-lg flex p-4 gap-2 '>
                 <div className='bg-yellow-500 h-full basis-1/5'>img</div>
                 <div className='bg-yellow-500 h-full basis-3/5 flex flex-col p-2 gap-2'>
                      <div className='flex flex-row items-center'><h1 className='text-lg'>Category -{cartitemed._id} {cartitemed.Category}</h1></div> 
                     <div className='flex flex-row items-center'><h1 className='text-lg'>Brand{cartitemed.Brand}</h1>-<h1>name{cartitemed.name}</h1></div>
                     <div className='flex flex-row items-center'><h1 className='text-lg'>quantity - {cartitemed.quantitty} X {cartitemed.price}</h1>
                        <div className='flex gap-1 items-center'><AiOutlineMinusSquare onClick={()=>toggleCTquantity(cartitemed._id,'dec')} /><h1>{cartitemed.quantitty}</h1><AiOutlinePlusSquare onClick={()=>toggleCTquantity(cartitemed._id,'inc')}/></div>
                     </div>
                 </div>
                 <div className='bg-yellow-500 h-full basis-1/5 flex flex-col items-center justify-evenly'>
                     <div> total</div> 
                     <div className='rounded-lg px-4 border border-red-500'><button onClick={()=>onRemove(cartitemed)}>remove</button></div>
                 </div>
             </div>
            ))}
           
        </div>
        <div className=' flex flex-col basis-2/6 h-full w-auto bg-yellow-600 opacity-80 items-center justify-between'>
            <div className='relative basis-4/5 w-full bg-green-300 '>
                 <div className='flex flex-col overflow-y-scroll gap-2 h-[30rem] 2xl:h-[48rem] scroll scroll-smooth scrollbar-hide p-2'>
                    <div className='inline-block shrink-0 bg-red-500 rounded-lg w-full h-28'>asdas</div>
                    <div className='inline-block shrink-0 bg-red-500 rounded-lg w-full h-28'>as</div>
                    <div className='inline-block shrink-0 bg-red-500 rounded-lg w-full h-28'>{show}</div>
                    <div className='inline-block shrink-0 bg-red-500 rounded-lg w-full h-28'>totalprice - {totalprice}</div>
                    <div className='inline-block shrink-0 bg-red-500 rounded-lg w-full h-28'>totalquantity - {totalquantity}</div>
                    <div className='inline-block shrink-0 bg-red-500 rounded-lg w-full h-28'></div>
                    <div className='inline-block shrink-0 bg-red-500 rounded-lg w-full h-28'></div>
                    <div className='inline-block shrink-0 bg-red-500 rounded-lg w-full h-28'></div>
                    <div className='inline-block shrink-0 bg-red-500 rounded-lg w-full h-28'></div>
                    <div className='inline-block shrink-0 bg-red-500 rounded-lg w-full h-28'></div>
                    <div className='inline-block shrink-0 bg-red-500 rounded-lg w-full h-28'></div>
                </div>   
                  
            </div>
            <div className='basis-1/5 w-full bg-green-400 flex items-center justify-center shrink-0'><button className=' rounded-lg px-4 border border-red-500' onClick={handlecheckout}>Proceed to checkout</button></div>
        </div>
    </div>
  )
}

export default Cartcomp