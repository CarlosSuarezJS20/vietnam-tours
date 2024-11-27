"use client";
import Image from "next/image";
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  Heading,
} from "react-aria-components";

import tripadvisor from "../../img/pngegg.png";
import { FaArrowAltCircleRight, FaRegCalendarAlt } from "react-icons/fa";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import UniversalCheckBoxGroup from "./universal-checkbox/universal-checkgroup";
import UniversalCheckbox from "./universal-checkbox/universal-checkbox";

import { useState } from "react";

import clsx from "clsx";

const tourType: { id: number; tourType: string }[] = [
  { id: 1, tourType: "Day Tours" },
  { id: 2, tourType: "Package Tours" },
  { id: 3, tourType: "North Of Vietnam" },
  { id: 4, tourType: "South Of Vietnam" },
  { id: 5, tourType: "Center Of Vietnam" },
];

const HomeSearch = () => {
  const [isCalendarTabActive, setIsCalendarTabActive] = useState(false);
  const [isAllToursTabActive, setIsAllToursTabActive] = useState(false);
  // checkbox
  const [selectedBox, setSelectedBox] = useState();

  return (
    <div className='absolute bg-white bg-opacity-80 p-6 top-1/3 left-4 hidden md:block w-1/2 min-w-[550px] lg: w-1/3'>
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
                "absolute bg-white p-4 top-full left-3  shadow-md",
                isCalendarTabActive ? "block" : "hidden"
              )}>
              <Calendar
                className=' bg-white text-center'
                aria-label='Appointment date'>
                <header className='font-bold text-md flex justify-center gap-5 mb-1'>
                  <Button slot='previous'>
                    <FaArrowAltCircleLeft />
                  </Button>
                  <Heading />
                  <Button slot='next'>
                    <FaArrowAltCircleRight />
                  </Button>
                </header>
                <CalendarGrid className='w-[230px] text-sm'>
                  {(date) => <CalendarCell date={date} />}
                </CalendarGrid>
              </Calendar>
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
                  "absolute bg-white p-4 top-full left-3 w- shadow-md",
                  isAllToursTabActive ? "block" : "hidden"
                )}>
                <UniversalCheckBoxGroup
                  className='text-sml'
                  label='Type Of Tour'>
                  {tourType.map(({ tourType, id }) => (
                    <UniversalCheckbox
                      key={`${id}${tourType}`}
                      value={tourType}>
                      {tourType}
                    </UniversalCheckbox>
                  ))}
                </UniversalCheckBoxGroup>
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
