"use client";

import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";

interface DropMenuProps {
  buttonName: string;
  items?: { itemName: string; href?: string }[];
}

export default function DropMenu({ buttonName, items }: DropMenuProps) {
  return (
    <MenuTrigger>
      <Button
        className=' bg-clip-padding border border-white/20 pressed:font-bold pressed:underline hover:underline hover:font-bold cursor-default outline-none focus-visible:ring-2 focus-visible:ring-white/75'
        aria-label={buttonName}>
        {buttonName}
      </Button>
      <Popover>
        <Menu className='hidden rounded border-l-2 border-l-emerald-500 text-sm p-2 bg-white outline-none md:grid'>
          {items &&
            items.map(({ itemName, href }) => (
              <MenuItem
                href={href}
                className='px-1 py-0.5 outline-none hover:underline hover:font-bold cursor-default'
                key={itemName}>
                {itemName}
              </MenuItem>
            ))}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}
