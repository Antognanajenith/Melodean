import React from 'react';
import Image from 'next/image';
import bluepur from "../public/SVGFolder/blurpur.svg";
import Link from 'next/link';

const Vredpattern = () => {

    console.log("feautreslist",featureslist)
    
    const bgblack2Style = {
        backgroundImage:`url("../public/SVGFolder/blurpur.svg")`,
        backgroundSize:"cover",
      };

  return (
    <div className='text-white flex flex-col text-center md:h-screen h-full w-screen  md:justify-evenly justify-between md:pt-16 bg-3pgsvg bg-cover bg-center '>
        <div className='basis-1/6 md:pt-0 pt-16 items-center'>
            <h1 className='font-bold text-[2rem]'>Shop the World’s Best Selection of Premium Headphones.</h1>
        </div>
        <div className='flex basis-4/6 flex-row justify-start gap-8 md:overflow-hidden md:justify-evenly overflow-x-scroll md:pt-2 pt-12 px-8 '>
            {featureslist && featureslist.map((ipems)=>(
                 <div className='md:h-[21rem] md:w-60 h-96 w-72 bg-gray-800 drop-shadow-xl backdrop-filter bg-clip-padding   backdrop-blur-md bg-opacity-20 flex flex-col container shrink-0 items-center p-2 rounded-lg'>
                 <div className='basis-2/5  w-32 h-32  p-2 overflow-hidden relative'>
                     <Image layout='fill' objectFit='contain' className='absolute bg-cover ' src={ipems.image} alt="" />
                 </div>
                 <div className='basis-1/5 py-1 text-lg w-full px-2'>{ipems.head}</div>
                 <div className='basis-2/5 py-1 text-base w-full px-4'>{ipems.briefed}</div>
             </div>
            ))}
            
            
            
                        
        </div>
        <div className='basis-1/6 py-4 items-center'>
            <h1 className='text-xl '>We Love Audiophiles and They Love Us Too</h1>
            <h1 className='text-xl '>Thousands of 5-star reviews on <a className='text-violet-600' href="https://www.trustpilot.com">trustpilot</a> make us audiophile approved.</h1>
        </div>
    </div>
  )
}

export default Vredpattern;

const featureslist =[
    {
        "head":"LOVE AT FIRST (OR SECOND) LISTEN",
        "briefed":"Our unparalleled 365-day return policy* gives you lots of time to fall in love with your new gear",
        "image":"https://cdn.shopify.com/s/files/1/1791/0383/files/return.svg?v=1650649867"
    },
    {
        "head":"BEST PRICE ON PREMIUM HEADPHONES, GUARANTEED",
        "briefed":"Find it cheaper elsewhere? We will match any price from an authorized dealer.",
        "image":"https://cdn.shopify.com/s/files/1/1791/0383/files/price_match.svg?v=16509066x90"
    },
    {
        "head":"WORLD-CLASS SUPPORT EVERY STEP OF THE WAY",
        "briefed":"Receive live customer support from real humans who love headphones as much as you do.",
        "image":"https://cdn.shopify.com/s/files/1/1791/0383/files/Support.svg?v=1650648431"
    },
    {
        "head":"BY AUDIO LOVERS, FOR AUDIO LOVERS",
        "briefed":"We have curated only the best in premium audio from top brands like Focal, Sennheiser, and Hifiman.",
        "image":"https://cdn.shopify.com/s/files/1/1791/0383/files/Audio_Lovers.svg?v=1650648860"
    },

]

