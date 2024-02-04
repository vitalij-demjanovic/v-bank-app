import Image from 'next/image';
import StatusTransaction from '@/app/components/ui/StatusTransaction';

export default function LatestTransactionTable() {
  return (
    <div className='rounded-3xl bg-white py-10'>
      <h3 className='mb-8 px-10 text-2xl font-bold'>Latest Transactions</h3>
      <table className='w-full table-auto'>
        <tbody>
          <tr className='odd:bg-light-grey'>
            <td className='flex items-center py-3 pl-10'>
              <Image
                src={'/img/out-transaction.svg'}
                alt={'out'}
                width={48}
                height={48}
                className='mr-3'
              />
              <div>
                <p>Samantha W.</p>
                <span className='block text-primary-text'>Transfer</span>
              </div>
            </td>
            <td>$ 50,036</td>
            <td>25 Jan, 2021</td>
            <td>
              <StatusTransaction />
            </td>
          </tr>
          <tr className='odd:bg-primary'>
            <td className='flex items-center py-3 pl-10'>
              <Image
                src={'/img/in-transaction.svg'}
                alt={'out'}
                width={48}
                height={48}
                className='mr-3'
              />
              <div>
                <p>Samantha W.</p>
                <span className='block text-primary-text'>Transfer</span>
              </div>
            </td>
            <td>$ 50,036</td>
            <td>25 Jan, 2021</td>
            <td>
              <StatusTransaction />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
