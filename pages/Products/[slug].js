import React from 'react';
import {Productsupper,Productslower} from '../../Components/productsdummy';
import Navbar from '../../Components/Navbar';
import { client } from '../../Library/Client';

const Productdetails = ({allproducts,productone}) => {
    
  return (
    <div className='overflow-x-hidden'>
       <Navbar/>
        <div className='items-center w-screen h-full bg-blackersmoke flex flex-col  '>
        <Productsupper allproducts={allproducts} productone={productone}/>
        <Productslower allproducts={allproducts} productone={productone}/>
        </div>
    </div>
    
  )
}

export async function getStaticPaths() {
  const queryproducts = `*[_type=="product"]{
    slug{
      current
    }
  }`
  const allproducts = await client.fetch(queryproducts);
  

  const paths = allproducts.map((prod)=>({
    params:{
      slug:prod.slug.current
    }
  }));
  return {
    paths,
    fallback: 'blocking' 
  };
}

export async function getStaticProps({params:{slug}}) {
  const queryproducts = '*[_type=="product"]';
  const allproducts = await client.fetch(queryproducts);

  const queryproductone = `*[_type=="product" && slug.current == '${slug}'][0]`;
  const productone = await client.fetch(queryproductone);
  
  return {
     props:{allproducts,productone}
     };
}
export default Productdetails;