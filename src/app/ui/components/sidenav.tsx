import { IoSearchOutline } from "react-icons/io5";
import VietLogo from "../viet-tour-logo";
import { FaShoppingCart } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

import Link from "next/link";
import DropMenu from "./dropmenu";

export default function SideNav() {
  const navElements = [
    {
      linkName: "Tours & Activities",
      href: "/our-tours",
      items: ["Day Tours", "Package Tours", "North Tours", "South Tours"],
    },
    {
      linkName: "Private Tours",
      href: "/private-tours",
    },
    {
      linkName: "Halong Bay",
      href: "/our-cruises",
    },
    {
      linkName: "About",
      href: "/about",
    },
  ];

  return (
    <nav className='flex w-full fixed items-center justify-between bg-white px-11 py-3 shadow-lg text-sm'>
      <div className='flex items-center'>
        <VietLogo />
        <div className='px-3 hidden md:block'>
          {navElements.map((link) => {
            if (link.linkName === "Tours & Activities") {
              console.log("created menu");
              return <DropMenu buttonName={link.linkName} items={link.items} />;
            } else {
              return (
                <Link
                  className='px-2 hover:font-bold hover:underline'
                  href={link.href}>
                  {link.linkName}
                </Link>
              );
            }
          })}
        </div>
      </div>
      <div className='flex items-center px-2'>
        <button className='pr-2 text-xl hover:text-lg '>
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
}
