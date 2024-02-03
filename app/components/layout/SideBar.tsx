import Logo from '@/app/components/ui/Logo';
import Link from 'next/link';
import {
  HomeIcon,
  CurrencyDollarIcon,
  NewspaperIcon,
  CreditCardIcon,
  ArrowsRightLeftIcon,
  Cog8ToothIcon
} from '@heroicons/react/24/solid';

export default function SideBar() {
  return (
    <div className='h-screen bg-white px-[70px] py-[30px]'>
      <Logo />
      <ul className='mt-[48px]'>
        <li className='mb-[24px] flex items-center text-primary-text duration-300 ease-in-out hover:text-dark-grey'>
          <HomeIcon className='mr-3 h-[30px] w-[30px]' />
          <Link href='/'>Dashboard</Link>
        </li>
        <li className='mb-[24px] flex items-center text-primary-text duration-300 ease-in-out hover:text-dark-grey'>
          <CurrencyDollarIcon className='mr-3 h-[30px] w-[30px]' />
          <Link href={'/balance'}>Balance</Link>
        </li>
        <li className='mb-[24px] flex items-center text-primary-text duration-300 ease-in-out hover:text-dark-grey'>
          <NewspaperIcon className='mr-3 h-[30px] w-[30px]' />
          <Link href={'/invoices'}>Invoices</Link>
        </li>
        <li className='mb-[24px] flex items-center text-primary-text duration-300 ease-in-out hover:text-dark-grey'>
          <CreditCardIcon className='mr-3 h-[30px] w-[30px]' />
          <Link href={'/cards'}>Cards</Link>
        </li>
        <li className='mb-[24px] flex items-center text-primary-text duration-300 ease-in-out hover:text-dark-grey'>
          <ArrowsRightLeftIcon className='mr-3 h-[30px] w-[30px]' />
          <Link href={'/transactions'}>Transactions</Link>
        </li>
        <li className='flex items-center text-primary-text duration-300 ease-in-out hover:text-dark-grey'>
          <Cog8ToothIcon className='mr-3 h-[30px] w-[30px]' />
          <Link href={'/setting'}>Settings</Link>
        </li>
      </ul>
    </div>
  );
}
