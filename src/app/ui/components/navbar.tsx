import { IoSearchOutline } from "react-icons/io5";
import VietLogo from "../viet-tour-logo";
import { FaShoppingCart } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

import Link from "next/link";
import DropMenu from "./dropmenu";

const NavBar = () => {
  // Refactored to separate concerns
  const navElements = [
    {
      linkName: "Tours & Activities",
      items: [
        { itemName: "Day Tours", href: "/day-tours" },
        { itemName: "Package Tours", href: "/package-tours" },
        { itemName: "North Tours", href: "/north-tours" },
        { itemName: "South Tours", href: "/south-tours" },
      ],
      hasDropdown: true, // Added for better control
    },
    { linkName: "Private Tours", href: "/private-tours" },
    { linkName: "Halong Bay", href: "/our-cruises" },
    { linkName: "About", href: "/about" },
  ];

  return (
    <nav className='flex w-full fixed items-center justify-between bg-white px-11 py-3 shadow-lg text-sm'>
      <div className='flex items-center'>
        <VietLogo />
        <div className='px-3 hidden md:block'>
          {navElements.map(({ linkName, href, items, hasDropdown }) =>
            hasDropdown ? (
              <DropMenu key={linkName} buttonName={linkName} items={items} />
            ) : (
              <Link
                key={linkName}
                className='px-2 hover:font-bold hover:underline'
                href={href!}>
                {linkName}
              </Link>
            )
          )}
        </div>
      </div>
      <div className='flex items-center px-2'>
        <button className='pr-2 text-xl hover:text-lg'>
          <IoSearchOutline />
        </button>
        <Link href='/my-bookings' className='pr-2 hidden md:block'>
          <button className='px-2 border-2 border-emerald-500 rounded-full hover:bg-emerald-500 hover:text-white'>
            My Bookings
          </button>
        </Link>
        <div className='text-xl'>
          <FaShoppingCart />
        </div>
        <div className='pl-2 text-xl md:hidden'>
          <CiMenuFries />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
