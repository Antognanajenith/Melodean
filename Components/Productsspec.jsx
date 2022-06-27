
import Link from 'next/link';
import Image from 'next/image';
import React,{useRef,useEffect,useState} from 'react';


const Productsspec = ({allproducts}) => {
    const infopass = "balae balae";
    const scrollbars = useRef();
    const dintaarray1 = [1,2,3,4,5,6,7,8,9];
    const dintaarray2 = [2,3,4,5,6,7,8,9,1];
    const dintaarray3 = [3,4,5,6,7,8,9,1,2];
    const dintaarray4 = [4,5,6,7,8,9,1,2,3];
    const [ctgselection,setCtgselection]=useState(1);
    const slideLeft = ()=>{const toplace = scrollbars.current;toplace.scrollLeft = toplace.scrollLeft - 500;}
    const slideRight = ()=>{const toplace = scrollbars.current;toplace.scrollLeft = toplace.scrollLeft + 500;}

    const firstbutton =()=>{setCtgselection("1")}
    const secbutton =()=>{setCtgselection("2")}
    const thirdbutton =()=>{setCtgselection("3")}
    const fourbutton =()=>{setCtgselection("4")}
  
    const divbgimgStyle = (imgSrc) => ({
      backgroundImage: `url(${imgSrc})`,
      backgroundSize:'cover',
      backgroundPosition:'center',
      backgroundRepeat: 'no-repeat',
    })

  return (
    <div className='text-white flex flex-col text-center md:h-screen h-full w-screen  md:justify-evenly justify-between md:pt-16'>
        <div className='basis-1/6 md:pt-0 pt-28 md:items-center'>
            <h1 className='md:pt-8 bg-gradient-to-b from-darkorange to-lightorange text-transparent bg-clip-text font-bold text-3xl text-center'>Our Best Sellers</h1>
        </div>
        <div className=' flex items-center justify-center md:space-x-4 space-x-2 md:mb-6'>
            <button className='font-medium rounded-md px-2 py-1 focus:underline focus:underline-offset-4 ' onClick={firstbutton}>BUDGETED</button>
            <button className='font-medium rounded-md px-2 py-1 focus:underline focus:underline-offset-4 ' onClick={secbutton}>ENTRY </button>
            <button className='font-medium rounded-md px-2 py-1 focus:underline focus:underline-offset-4 ' onClick={thirdbutton}>MEDIUM</button>
            <button className='font-medium rounded-md px-2 py-1 focus:underline focus:underline-offset-4 ' onClick={fourbutton}>HIGH END</button>
        </div>
        <div className='relative  flex md:basis-4/6 basis-3/6 bg-green-200 items-center '>
            <button onClick={slideLeft} className='absolute h-20 w-20 bg-orange-500 items-center left-2 rounded-full'>right po</button>
             <div ref={scrollbars} className="flex-nowrap w-full h-full space-x-4 md:overflow-y-hidden overflow-x-scroll whitespace-nowrap md:pt-4 pt-10 px-8 md:pl-12 scrollbar-hide scroll scroll-smooth transition ease-in-out delay-500">
            {ctgselection>0 && ctgselection<2 && allproducts.allproducts.allproducts.map((datass,i)=>(
               <Link href={`/Products/${datass.slug.current}`}>
                    <div key={i} style={divbgimgStyle(datass.Imglnk2)} className='inline-block md:h-[21rem] cursor-pointer rounded-lg md:w-60 h-96 w-72 bg-red-300'>
                     <div className='flex relative w-full h-full  rounded-lg flex-col-reverse'>
                      <div className='flex flex-col basis-2/5 w-full bg-stone-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-lg rounded-t-2xl items-center justify-evenly gap-3'>
                       
                        <h1  className='text-lg'>{datass.name}</h1>
                       <h1 className='text-xl'>{datass.price} $</h1><h1 className="tracking-widest text-2xl">*****{datass.slug.current}</h1>
                      </div>
                     </div>
                     
                    </div></Link>
              ))}
            {ctgselection>1 && ctgselection<3 && dintaarray2.map((datass)=>(
                    <div className='inline-block md:h-[21rem] md:w-60 h-96 w-72 bg-green-500 '>{datass}</div>
              ))} 
            {ctgselection>2 && ctgselection<4 && dintaarray3.map((datass)=>(
                    <div className='inline-block md:h-[21rem] md:w-60 h-96 w-72 bg-blue-500 '>{datass}</div>
              ))}
            {ctgselection>3 && dintaarray4.map((datass)=>(
                    <div className='inline-block md:h-[21rem] md:w-60 h-96 w-72 bg-yellow-500 '>{datass}</div>
              ))}     
     
            </div>
            <button onClick={slideRight} className='absolute h-20 w-20 bg-orange-500 items-center right-5 rounded-full'>left po</button>
        </div>
        <div className='basis-1/6 pt-4 items-center'>
        <Link href={{
            pathname: '/Products/&[slug]',
            query: { slug: infopass },
          }}>
            <button>click me to navigate to products details</button>
        </Link>
        </div>
    </div>
  )
}

export default Productsspec