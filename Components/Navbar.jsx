import React, { useState } from "react";
import transpicon from "../public/Icons/Melodeon_white.png";
import slogond from "../public/Icons/Melodeon -slogon.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
//icons
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

//icons-end
const blurpinkblue = "";

const DropDownContainer = () => {
  return (
    <div className='absolute top-16 h-32 w-32 bg-fuchsia-600 rounded-b-2xl'></div>
  );
};
const Navbar = () => {
  //internal states
  const [showCategoryDrown, setShowCategoryDrown] = useState(false);
  const [showBrandDrown, setShowBrandDrown] = useState(false);

  const DropDownHandler = (toDropDown, setToDropDown) => {
    setToDropDown(!toDropDown);
  };

  return (
    <div className='fixed flex flex-row  w-screen h-16 items-center  md:px-8 px-3 bg-stone-900 rounded-b-xl bg-clip-padding z-20  backdrop-filter backdrop-blur-xl bg-opacity-10  '>
      <div className='flex p-4 md:basis-2/6 basis-2/6 gap-1'>
        <Link href='/'>
          <Image
            src={transpicon}
            alt='logoicon'
            width='54'
            height='46'
            className=' '
          />
        </Link>
        <div className='hidden md:flex'>
          <Image
            src={slogond}
            alt='slogoicon'
            width='90'
            height='40'
            className=' '
          />
        </div>
      </div>
      <div className='flex flex-row basis-4/6 justify-between'>
        <div className='md:flex flex-row items-center gap-x-5 text-whitesmoker hidden md:basis-2/6'>
          <motion.div
            whileHover={{ scale: 1.1, Y: -1 }}
            transition={{ duration: 0.1, type: "spring", stiffness: 200 }}
          >
            <button
              className=''
              onClick={() =>
                DropDownHandler(showCategoryDrown, setShowCategoryDrown)
              }
            >
              Category
            </button>
          </motion.div>
          {showCategoryDrown && <DropDownContainer />}
          <motion.div whileHover={{ scale: 1.1, Y: -1 }}>
            <button>Brands</button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, Y: -1 }}>
            <Link href='/Products/NewArrivals'>
              <h1 className='cursor-pointer'>New Arrivals!</h1>
            </Link>
          </motion.div>
        </div>
        <div className='flex '>
          <form>
            <label
              htmlfor='default-search'
              class='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'
            >
              Search
            </label>
            <div class='relative '>
              <div class='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                <svg
                  class='w-5 h-5 text-gray-600  dark:text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  ></path>
                </svg>
              </div>
              <input
                type='search'
                id='default-search'
                class='block p-2.5 pl-8 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:opacity-75 backdrop-filter backdrop-blur-xl  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Search Products'
                required=''
              />
              <button
                type='submit'
                class='text-white absolute right-2 bottom-1 bg-bluer hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-1 my-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className='flex items-center md:gap-5 gap-1  divide-x-2  '>
          <div className='cursor-pointer md:px-2 px-1'>
            <motion.div whileHover={{ scale: 1.1, Y: -1 }}>
              <FaUserAlt color='white' />
            </motion.div>
          </div>
          <Link href='/Products/Cart'>
            <div className='cursor-pointer md:px-6 px-2'>
              <motion.div whileHover={{ scale: 1.1, Y: -1 }}>
                <FaShoppingCart color='white' />{" "}
              </motion.div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
