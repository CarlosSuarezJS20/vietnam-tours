import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

import clsx from "clsx";

type openTab = string | null;

interface DropDownProps {
  children: React.ReactElement;
  openTab: openTab;
  onToggle: (openTab: openTab) => void;
  date?: string;
  Icon: React.ReactNode;
  currentTab: string;
}

const DropDown: React.FC<DropDownProps> = ({
  children,
  openTab,
  currentTab,
  date,
  onToggle,
  Icon,
}) => {
  const spanTexts: Record<string, string> = {
    calendar: date ? date : "Any Type",
    tours: "type of tour",
  };

  return (
    <div className='relative flex justify-between bg-white px-2 py-3'>
      <button
        onClick={() => {
          if (openTab === currentTab) {
            return onToggle(null);
          }
          onToggle(currentTab);
        }}
        className='top-0 left-0 grow'>
        <div className='flex justify-between items-center px-2 gap-10'>
          {Icon}
          <span
            className={clsx(
              "capitalize text-sm",
              date?.toString() && "font-bold"
            )}>
            {spanTexts[currentTab]}
          </span>
          {openTab === currentTab ? (
            <MdKeyboardArrowUp />
          ) : (
            <MdKeyboardArrowDown />
          )}
        </div>
      </button>
      <div
        className={clsx(
          "absolute bg-white p-4 top-full left-3  shadow-md",
          openTab === currentTab ? "block" : "hidden"
        )}>
        {children}
      </div>
    </div>
  );
};

export default DropDown;
