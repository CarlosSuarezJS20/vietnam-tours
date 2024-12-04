"use client";
import Image from "next/image";
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  Heading,
} from "react-aria-components";
import type { DateValue } from "react-aria-components";
import { getLocalTimeZone, today } from "@internationalized/date";

import tripadvisor from "../../img/pngegg.png";
import { FaArrowAltCircleRight, FaRegCalendarAlt } from "react-icons/fa";
import { MdTour } from "react-icons/md";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

import UniversalCheckBoxGroup from "./universal-checkbox/universal-checkgroup";

import { useState } from "react";

import { tv } from "tailwind-variants";
import { focusRing } from "../utils";
import DropDown from "./drop-down-component";
import RippleButton from "./rippled-button";

//for now before building API
const tourType: { id: number; tourType: string }[] = [
  { id: 1, tourType: "Day Tours" },
  { id: 2, tourType: "Package Tours" },
  { id: 3, tourType: "North Of Vietnam" },
  { id: 4, tourType: "South Of Vietnam" },
  { id: 5, tourType: "Center Of Vietnam" },
];

type TabType = string | null;

const cellStyles = tv({
  extend: focusRing,
  base: "w-9 h-9 text-sm cursor-default rounded-full flex items-center justify-center forced-color-adjust-none",
  variants: {
    isSelected: {
      false:
        "text-zinc-900 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-700 pressed:bg-gray-200 dark:pressed:bg-zinc-600",
      true: "bg-black invalid:bg-red-600 text-white forced-colors:bg-[Highlight] forced-colors:invalid:bg-[Mark] forced-colors:text-[HighlightText]",
    },
    isDisabled: {
      true: "text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]",
    },
  },
});

const HomeSearch: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>(null);
  // calendar
  const [date, setDate] = useState<DateValue | null>(null);
  // checkbox
  const [selectedBox, setSelectedBox] = useState<string[]>([]);

  const isActiveHandler: (activeTab: TabType) => void = (activeTab) => {
    if (activeTab) {
      setActiveTab(null);
    }
    setActiveTab(activeTab);
  };

  return (
    <div className='z-20 absolute bg-white bg-opacity-80 p-6 sm:top-1/4 top-1/3 left-40 hidden md:block w-1/2 min-w-[550px] lg:w-1/3'>
      <div className='relative'>
        <div className='position: absolute bottom-0 right-0 translate-x-20 translate-y-20 bg-white p-2 flex items-center justify-center  rounded-full border-4 border-tripadvisor'>
          <Image
            className='object-contain'
            src={tripadvisor}
            alt='tripadvisor'
            width={80}
            height={80}
          />
        </div>
        <p className='font-extrabold tracking-widest text-emerald-700 text-[2rem]'>
          PLAN YOUR ADVENTURE NOW
        </p>
        <div className='flex flex-row-reverse px-2'>
          <RippleButton
            isDisabled={date || selectedBox.length > 0 ? false : true}>
            Search
            <FaPaperPlane />
          </RippleButton>
        </div>
        <div className=' flex justify-between px-1 py-1'>
          <DropDown
            openTab={activeTab}
            currentTab={"calendar"}
            onToggle={isActiveHandler}
            Icon={<FaRegCalendarAlt />}
            date={date?.toString()}>
            <Calendar
              minValue={today(getLocalTimeZone())}
              value={date}
              onChange={setDate}
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
                {(date) => <CalendarCell className={cellStyles} date={date} />}
              </CalendarGrid>
              {date?.toString() && (
                <p
                  className='text-right font text-xs underline hover:text-emerald-700 cursor-pointer'
                  onClick={() => {
                    setDate(null);
                    isActiveHandler(null);
                  }}>
                  Clear
                </p>
              )}
            </Calendar>
          </DropDown>
          <div className='flex justify-between bg-white px-2 py-1'>
            <DropDown
              openTab={activeTab}
              currentTab={"tours"}
              onToggle={isActiveHandler}
              Icon={<MdTour />}>
              <UniversalCheckBoxGroup
                checkboxes={tourType}
                onChange={setSelectedBox}
                label='Type Of Tour'
              />
            </DropDown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSearch;
