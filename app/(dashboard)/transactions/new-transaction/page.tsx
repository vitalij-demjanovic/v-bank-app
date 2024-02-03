import NewTransactionForm from '@/app/components/Transactions/NewTransactionForm';

export default function Page() {
  return (
    <div className='pl-16'>
      <h1 className='mb-8 text-3xl font-bold'>Add new transaction</h1>
      <NewTransactionForm />
    </div>
  );
}
