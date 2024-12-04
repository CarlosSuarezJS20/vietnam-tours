import { Button } from "react-aria-components";
import { useEffect, useRef, useState } from "react";
import type { ButtonProps } from "react-aria-components";

import { PressEvent } from "@react-aria/interactions";

interface RippleButtonProps extends Omit<ButtonProps, "children"> {
  children?: React.ReactNode;
}

const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  isDisabled,
}) => {
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);

  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  let onPress = (e: PressEvent) => {
    setCoords({ x: e.x, y: e.y });
    if (e.x !== -1 && e.y !== -1) {
      const timeoutID = window.setTimeout(() => {}, 100);
      clearTimeout(timeoutID);
      timeout.current = setTimeout(() => setCoords(null), 500);
    }
  };

  useEffect(() => {
    const timeoutID = window.setTimeout(() => {}, 100);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  console.log(isDisabled);

  return (
    <Button
      isDisabled={isDisabled}
      onPress={onPress}
      className={`
      relative overflow-hidden
      inline-flex items-center justify-center rounded-md bg-black bg-opacity-50 bg-clip-padding border border-white/20 px-3 py-2 text-white text-lg
      hover:bg-opacity-60 pressed:bg-opacity-70 transition-colors cursor-default outline-none focus-visible:ring-2 focus-visible:ring-white/75 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-80`}>
      {coords && (
        <div
          key={`${coords.x},${coords.y}`}
          className='absolute h-8 w-8 rounded-full opacity-100 bg-white/60 animate-ripple'
          style={{
            left: coords.x - 25,
            top: coords.y - 25,
          }}
        />
      )}
      <span className='flex items-center gap-4'>{children}</span>
    </Button>
  );
};

export default RippleButton;
