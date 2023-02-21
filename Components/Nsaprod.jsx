import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

const Nsaprod = ({ allproducts }) => {
  //internal states
  const [brandselected, setBrandselected] = useState([]);
  const [Categoryselected, setCategoryselected] = useState([]);
  const [newList, setNewList] = useState([]);

  //img styling for products in tailwind with nextjs;
  const divbgimgStyle = (imgSrc) => ({
    backgroundImage: `url(${imgSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  });

  let newProductFiltered = [];
  let uniqueBrand = [];
  let uniqueCategory = [];

  if (allproducts) {
    newProductFiltered = allproducts;
    uniqueBrand = [...new Set(allproducts.map((item) => item.Brand))];

    uniqueCategory = [...new Set(allproducts.map((item) => item.Category))];
  }

  const itemSelectionFunc = (itemChecked, itemSelected, setItemSelected) => {
    if (itemSelected.includes(itemChecked)) {
      setItemSelected(itemSelected.filter((w) => w != itemChecked));
      if (itemSelected === Categoryselected) {
        console.log("category iruku aam,newlist", newList);
        setNewList(newList.filter((w) => w.Category != itemChecked));
      } else {
        console.log("Brand iruku aam,newlist", newList);
        setNewList(newList.filter((w) => w.Brand != itemChecked));
      }
    } else {
      setItemSelected((itemSelected) => [...itemSelected, itemChecked]);
      if (itemSelected === Categoryselected) {
        console.log("category than aam,newlist", newList);
        setNewList((newList) => [
          ...newList,
          ...newProductFiltered.filter((es) => es.Category === itemChecked)
        ]);
      } else {
        console.log("Brand than aam,newlist", newList);
        setNewList((newList) => [
          ...newList,
          ...newProductFiltered.filter((es) => es.Brand === itemChecked)
        ]);
      }
    }
  };

  return (
    <div className='w-full h-screen bg-blackersmoke text-whitesmoker flex flex-col items-center '>
      <div className='flex flex-col basis-1/6 w-full justify-evenly '>
        <div className='text-md pt-16 px-4'>
          <h1>Home/Products/New arrivals</h1>
        </div>
        <div className='text-center flex flex-col'>
          <h1 className='text-xl font-bold tracking-wide	'>NEW ARRIVALS</h1>
        </div>
      </div>
      <div className='flex basis-5/6 md:flex-row flex-col bg-blackersmoke w-full'>
        {/* ///multiple selection section */}
        <div className='flex flex-col basis-1/5  w-full gap-2 p-4 border-r-2 border-slate-300'>
          <div className='flex-col flex'>
            <h1 className='text-lg uppercase pb-2'>Brand</h1>
            {uniqueBrand?.map((datam) => (
              <div className='flex flex-row gap-2'>
                <input
                  type='checkbox'
                  value={datam}
                  className='rounded-lg accent-blue'
                  // checked={branddatam.Brand}
                  onChange={() =>
                    itemSelectionFunc(datam, brandselected, setBrandselected)
                  }
                />
                <h1 className='text-base antialiased cursor-pointer tracking-wide'>
                  {datam}
                </h1>
              </div>
            ))}
          </div>
          <div className='flex-col flex pt-4'>
            <h1 className='text-lg uppercase pb-2'>Category</h1>
            {uniqueCategory?.map((datam) => (
              <div className='flex flex-row gap-2'>
                <input
                  type='checkbox'
                  className='rounded-lg accent-blue'
                  value={datam}
                  onChange={() =>
                    itemSelectionFunc(
                      datam,
                      Categoryselected,
                      setCategoryselected
                    )
                  }
                />
                <h1 className='text-base antialiased  tracking-wide'>
                  {datam}
                </h1>
              </div>
            ))}
          </div>
          {/* ///multiple selection section ended */}
        </div>
        <div className='basis-4/5 flex  w-full'>
          <div className='relative p-6 gap-6 flex flex-wrap'>
            {newList.length > 0
              ? newList?.map((datass, i) => (
                  <div
                    key={i}
                    style={divbgimgStyle(datass.Imglnk2)}
                    className='inline-block md:h-[21rem] cursor-pointer rounded-lg md:w-60 h-96 w-72 bg-red-300 border-2 border-slate-800'
                  >
                    <Link href={`/Products/${datass.slug.current}`}>
                      <div className='flex relative w-full h-full  rounded-lg flex-col-reverse'>
                        <div className='flex flex-col basis-2/5 w-full bg-stone-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-lg rounded-t-2xl items-center justify-evenly gap-3'>
                          <h1 className='text-lg break-all max-w-xs px-4 '>
                            {datass.name}
                          </h1>
                          <h1 className='text-xl'>{datass.price} $</h1>
                          <h1 className='tracking-widest text-2xl'>*****</h1>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              : newProductFiltered?.map((datass, i) => (
                  <Link href={`/Products/${datass.slug.current}`}>
                    <div
                      key={i}
                      style={divbgimgStyle(datass.Imglnk2)}
                      className='inline-block md:h-[21rem] cursor-pointer rounded-lg md:w-60 h-96 w-72 bg-red-300 border-2 border-slate-800'
                    >
                      <div className='flex relative w-full h-full  rounded-lg flex-col-reverse'>
                        <div className='flex flex-col basis-2/5 w-full bg-stone-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 rounded-lg rounded-t-2xl items-center justify-evenly gap-3'>
                          <h1 className='text-lg break-all max-w-xs px-4 '>
                            {datass.name}
                          </h1>
                          <h1 className='text-xl'>{datass.price} $</h1>
                          <h1 className='tracking-widest text-2xl'>*****</h1>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nsaprod;
