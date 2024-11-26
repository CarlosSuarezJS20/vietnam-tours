"use client";
import Image from "next/image";
import tripadvisor from "../../img/pngegg.png";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

import clsx from "clsx";

const HomeSearch = () => {
  const [isCalendarTabActive, setIsCalendarTabActive] = useState(false);
  const [isAllToursTabActive, setIsAllToursTabActive] = useState(false);

  return (
    <div className='absolute bg-white bg-opacity-80 p-6 top-1/3 left-4 hidden md:block w-1/2 min-w-[550px]'>
      <div className='relative'>
        <p className='font-extrabold tracking-widest text-emerald-700 text-xl'>
          PLAN YOUR ADVENTURE NOW
        </p>
        <div className=' flex justify-between gap-4 p-3'>
          <div className='relative flex justify-between bg-white px-2 py-1'>
            <button
              onClick={() => {
                if (isAllToursTabActive) {
                  setIsAllToursTabActive(false);
                }
                setIsCalendarTabActive(!isCalendarTabActive);
              }}
              className='top-0 left-0 grow'>
              <div className='flex justify-between items-center px-4 gap-10'>
                <FaRegCalendarAlt />
                <span className='capitalize text-sm'>any time</span>
                {isCalendarTabActive ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </div>
            </button>
            <div
              className={clsx(
                "absolute bg-white p-4 top-full left-3 w-48 shadow-md",
                isCalendarTabActive ? "block" : "hidden"
              )}>
              calendar
            </div>
          </div>
          <div className='flex justify-between bg-white px-2 py-1'>
            <div className='relative flex justify-between bg-white px-2 py-1'>
              <button
                onClick={() => {
                  if (isCalendarTabActive) {
                    setIsCalendarTabActive(false);
                  }
                  setIsAllToursTabActive(!isAllToursTabActive);
                }}
                className='top-0 left-0 grow'>
                <div className='flex justify-between items-center px-4 gap-10'>
                  <FaRegCalendarAlt />
                  <span className='capitalize text-sm'>all tours</span>
                  {isAllToursTabActive ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </div>
              </button>
              <div
                className={clsx(
                  "absolute bg-white p-4 top-full left-3 w-48 shadow-md",
                  isAllToursTabActive ? "block" : "hidden"
                )}>
                List of tours
              </div>
            </div>
          </div>
        </div>
        <div className='position: absolute bottom-0 right-0 translate-x-20 translate-y-20 bg-white p-2 flex items-center justify-center  rounded-full border-4 border-tripadvisor'>
          <Image
            className='object-contain'
            src={tripadvisor}
            alt='tripadvisor'
            width={80}
            height={80}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSearch;
