"use client";
import Image from "next/image";
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  Heading,
} from "react-aria-components";
import { getLocalTimeZone, today } from "@internationalized/date";

import tripadvisor from "../../img/pngegg.png";
import { FaArrowAltCircleRight, FaRegCalendarAlt } from "react-icons/fa";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import UniversalCheckBoxGroup from "./universal-checkbox/universal-checkgroup";
import UniversalCheckbox from "./universal-checkbox/universal-checkbox";

import { useState } from "react";

import clsx from "clsx";

import { tv } from "tailwind-variants";
import { focusRing } from "../utils";

const tourType: { id: number; tourType: string }[] = [
  { id: 1, tourType: "Day Tours" },
  { id: 2, tourType: "Package Tours" },
  { id: 3, tourType: "North Of Vietnam" },
  { id: 4, tourType: "South Of Vietnam" },
  { id: 5, tourType: "Center Of Vietnam" },
];

const cellStyles = tv({
  extend: focusRing,
  base: "w-9 h-9 text-sm cursor-default rounded-full flex items-center justify-center forced-color-adjust-none",
  variants: {
    isSelected: {
      false:
        "text-zinc-900 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-700 pressed:bg-gray-200 dark:pressed:bg-zinc-600",
      true: "bg-blue-600 invalid:bg-red-600 text-white forced-colors:bg-[Highlight] forced-colors:invalid:bg-[Mark] forced-colors:text-[HighlightText]",
    },
    isDisabled: {
      true: "text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]",
    },
  },
});

const HomeSearch = () => {
  const [isCalendarTabActive, setIsCalendarTabActive] = useState(false);
  const [isAllToursTabActive, setIsAllToursTabActive] = useState(false);
  // checkbox
  const [selectedBox, setSelectedBox] = useState();

  return (
    <div className='absolute bg-white bg-opacity-80 p-6 top-1/3 left-40 hidden md:block w-1/2 min-w-[550px] lg: w-1/3'>
      <div className='relative'>
        <p className='font-extrabold tracking-widest text-emerald-700 text-[2rem]'>
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
                minValue={today(getLocalTimeZone())}
                className=' bg-white text-center'
                aria-label='Appointment date'>
                <header className='font-bold text-md flex justify-between gap-5 mb-1'>
                  <Button slot='previous'>
                    <FaArrowAltCircleLeft />
                  </Button>
                  <Heading />
                  <Button slot='next'>
                    <FaArrowAltCircleRight />
                  </Button>
                </header>
                <CalendarGrid className='w-[230px]'>
                  {(date) => (
                    <CalendarCell className={cellStyles} date={date} />
                  )}
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
                <UniversalCheckBoxGroup label='Type Of Tour'>
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
