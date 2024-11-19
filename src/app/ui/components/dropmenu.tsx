"use client";

import { ReactNode } from "react";
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";

interface DropMenuProps {
  buttonName: string;
  items?: string[];
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
        <Menu>
          {items.map((item) => (
            <MenuItem key={item}>{item}</MenuItem>
          ))}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}
