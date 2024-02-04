import Button from '@/app/components/ui/Button';
import Link from 'next/link';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import LatestTransactionTable from '@/app/components/Transactions/LatestTransactionTable';

export default function Page() {
  return (
    <div className='pl-16 pr-8'>
      <div className='mb-8 flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>Transactions</h1>
        <Link href={'/transactions/new-transaction'}>
          <Button appearance={'transparent'} className='flex items-center px-3'>
            <PlusCircleIcon className='mr-1 h-[20px] w-[20px]' />
            New transaction
          </Button>
        </Link>
      </div>
      <div>
        <LatestTransactionTable />
      </div>
    </div>
  );
}
