import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/solid';

export default function CardMovements() {
  return (
    <div className='mb-10 flex'>
      <div className='flex items-center rounded-l-xl bg-[#4892FE] p-[30px]'>
        <h3 className='mr-10 text-xl font-bold text-white'>Top UP</h3>
        <button className='rounded-full bg-white p-[18px]'>
          <ArrowUpIcon width={24} />
        </button>
      </div>
      <div className='flex items-center rounded-r-xl bg-primary p-[30px]'>
        <h3 className='mr-10 text-xl font-bold text-white'>Withdraw</h3>
        <button className='rounded-full bg-white p-[18px]'>
          <ArrowDownIcon width={24} />
        </button>
      </div>
    </div>
  );
}
