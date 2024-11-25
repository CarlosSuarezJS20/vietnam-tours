import Image from "next/image";
import tripadvisor from "../../img/pngegg.png";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";

const HomeSearch = () => {
  return (
    <div className='position: absolute bg-white bg-opacity-80 p-3 top-1/2 left-4 hidden md:block w-1/2 '>
      <div className='position: relative '>
        <p className='font-extrabold tracking-widest text-emerald-700 text-xl'>
          START YOUR ADVENTURE NOW
        </p>
        <div className='flex justify-between gap-3  px-3 py-3'>
          <button className='bg-white grow p-1'>
            <div className='flex justify-between items-center px-4 gap-10'>
              <FaRegCalendarAlt />
              <p className='capitalize text-sm'>any time</p>
              <MdKeyboardArrowUp />
            </div>
          </button>
          <button className='bg-white grow'>
            <div className='flex justify-between items-center px-4 py-2 gap-10'>
              <p className='capitalize text-sm'>all tours</p>
              <MdKeyboardArrowUp />
            </div>
          </button>
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
