import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<'button'> {
  children: React.ReactNode;
  appearance: 'primary' | 'ghost' | 'transparent';
}

export default function Button({
  children,
  appearance,
  className
}: ButtonProps) {
  return (
    <button
      className={clsx('rounded-3xl py-5', className, {
        'bg-primary duration-300 ease-in-out hover:bg-light-grey hover:text-primary':
          appearance == 'primary',
        'bg-light-grey text-primary duration-300 ease-in-out hover:bg-primary hover:text-white':
          appearance == 'ghost',
        'border border-dark-grey text-primary duration-300 ease-in-out hover:border-primary hover:bg-primary hover:text-white':
          appearance == 'transparent'
      })}
    >
      {children}
    </button>
  );
}
