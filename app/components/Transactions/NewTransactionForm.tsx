'use client';
import Button from '@/app/components/ui/Button';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';

type FormTransaction = {
  recipient: string;
  email: string;
  amount: number;
  services: string;
};

export default function NewTransactionForm() {
  const date = format(new Date(), 'MMM d, y');

  const { register } = useForm<FormTransaction>({
    defaultValues: {
      amount: 0
    }
  });

  return (
    <div className='rounded-2xl bg-white p-10'>
      <h2 className='mb-10 text-2xl font-bold'>Transaction</h2>
      <form>
        <div className='flex justify-between'>
          <div className='mr-5 w-full'>
            <label className='mb-2 block text-primary-text'>
              Transcation Number:
            </label>
            <input
              className='mb-5 w-full rounded-3xl bg-light-grey p-3 text-primary-text outline-0'
              type='text'
              value={'#123-456789'}
              disabled={true}
            />
          </div>
          <div className='w-full'>
            <label className='mb-2 block text-primary-text'>Date:</label>
            <input
              className='mb-5 w-full rounded-3xl bg-light-grey p-3 text-primary-text outline-0'
              type='text'
              value={date}
              disabled={true}
            />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='mr-5 w-full'>
            <label className='mb-2 block text-primary-text'>Recipient:</label>
            <input
              {...register('recipient')}
              className='mb-5 w-full rounded-3xl border border-primary p-3'
              type='text'
              placeholder='Recipient...'
            />
          </div>
          <div className='w-full'>
            <label className='mb-2 block text-primary-text'>Email:</label>
            <input
              {...register('email')}
              className='mb-5 w-full rounded-3xl border border-primary p-3'
              type='email'
              placeholder='Email...'
            />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='relative mr-5 w-full'>
            <label className='mb-2 block text-primary-text'>Amount:</label>
            <span className={'absolute bottom-[33px] left-3 z-10'}>$</span>
            <input
              {...register('amount')}
              className='relative mb-5 w-full rounded-3xl border border-primary p-3 pl-6'
              type='number'
              placeholder='Amount...'
            />
          </div>
          <div className='w-full'>
            <label className='mb-2 block text-primary-text'>Services:</label>
            <input
              {...register('services')}
              className='mb-5 w-full rounded-3xl border border-primary p-3'
              type='text'
              placeholder='Services...'
            />
          </div>
        </div>
        <div className='flex justify-end'>
          <Button
            type='submit'
            className=' w-full max-w-[350px] text-xl font-bold text-white'
            appearance={'primary'}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
