'use client';
import { useState } from 'react';
import clsx from 'clsx';

export default function Switcher() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current);
  };

  return (
    <div
      className={clsx(
        'relative h-[60px] max-w-[123px] rounded-[40px] px-[19px]',
        { 'bg-primary': isActive },
        { 'bg-light-grey text-primary': !isActive }
      )}
    >
      <div
        className={clsx(
          'absolute top-[5px] h-[50px] w-[50px] cursor-pointer rounded-[50%] duration-500 ease-in-out',
          { 'right-[6px] bg-white': isActive },
          { 'left-[6px] bg-primary': !isActive }
        )}
        onClick={() => handleClick()}
      ></div>
      <div className='flex h-full items-center justify-between'>
        <span>On</span>
        <span>Off</span>
      </div>
    </div>
  );
}
