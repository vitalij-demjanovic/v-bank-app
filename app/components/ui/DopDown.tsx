'use client';
import { useState } from 'react';
import clsx from 'clsx';

export default function DopDown() {
  const [choice, setChoice] = useState('Select choice');
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(current => !current);
  };

  return (
    <div className='relative'>
      <div
        onClick={() => handleClick()}
        className='flex cursor-pointer items-center justify-between rounded-3xl border border-primary px-[43px] py-[16px]'
      >
        {choice}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='33'
          height='32'
          viewBox='0 0 33 32'
          fill='none'
          className={clsx('ease-in-out◊ duration-300', {
            'rotate-180': isOpen
          })}
        >
          <path
            d='M26.6761 11.4875L17.2361 21.9515C16.8521 22.3995 16.1481 22.3995 15.7641 21.9515L6.32415 11.4875C5.71615 10.8155 6.16415 9.72754 7.06015 9.72754L25.9401 9.72754C26.8361 9.72754 27.2841 10.8155 26.6761 11.4875Z'
            fill='#4D44B5'
          />
        </svg>
      </div>
      <div
        className={clsx(
          'd-none absolute top-[110%] w-full overflow-hidden rounded-3xl border border-primary',
          { 'block ': isOpen },
          { 'hidden ': !isOpen }
        )}
      >
        <div
          onClick={() => setIsOpen(false)}
          className='cursor-pointer overflow-auto px-[43px] py-[16px] duration-300 ease-in-out hover:bg-primary'
        >
          first
        </div>
        <div
          onClick={() => setIsOpen(false)}
          className='hover:text-whitecursor-pointer px-[43px] py-[16px] duration-300 ease-in-out hover:bg-primary'
        >
          second
        </div>
        <div
          onClick={() => setIsOpen(false)}
          className='hover:text-whitecursor-pointer px-[43px] py-[16px] duration-300 ease-in-out hover:bg-primary'
        >
          third
        </div>
      </div>
    </div>
  );
}
