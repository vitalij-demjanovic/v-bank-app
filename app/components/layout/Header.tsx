import Cog8ToothIcon from '@heroicons/react/24/outline/Cog8ToothIcon';
import Bell from '@heroicons/react/24/outline/BellIcon';
import Chat from '@heroicons/react/24/outline/ChatBubbleOvalLeftEllipsisIcon';
import UserIcon from '@heroicons/react/24/outline/UserIcon';
import MagnifyingGlassIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between bg-light-grey px-[32px] py-[25px] text-dark-grey'>
      <div>
        <form>
          <div className='flex items-center rounded-3xl bg-white p-[8px]'>
            <MagnifyingGlassIcon className='mr-5 h-[20px] w-[20px] text-primary-text' />
            <input
              className='text-primary-text outline-none'
              type='text'
              placeholder='Search here...'
            />
          </div>
        </form>
      </div>
      <div>
        <ul className='flex items-center'>
          <li className='mr-5 rounded-full border border-dark-grey p-[8px]'>
            <Chat className='h-[28px] w-[28px]' />
          </li>
          <li className='mr-5 rounded-full border border-dark-grey p-[8px]'>
            <Bell className='h-[28px] w-[28px]' />
          </li>
          <li className='mr-5 rounded-full border border-dark-grey p-[8px]'>
            <Cog8ToothIcon className='h-[28px] w-[28px]' />
          </li>
          <li>
            <Link href={'/user'}>
              <UserIcon className='h-[28px] w-[28px]' />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
