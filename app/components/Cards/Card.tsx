export default function Card({
  balance,
  cardNumber,
  cardHolder,
  expiredMonth,
  expiredYear,
  variant
}: CardI) {
  return (
    <div
      style={{ background: `${variant}` }}
      className='w-[400px] rounded-[40px] p-[42px] text-white'
    >
      <span className='mb-6 text-xs font-light'>My balance</span>
      <h3 className='mb-12 text-2xl font-bold'>${balance}</h3>
      <span className='mb-8 block text-right text-xl'>{cardNumber}</span>
      <div className='flex'>
        <div className='mr-16'>
          <span className='text-xs font-light'>Card holder</span>
          <p className='font-bold'>{cardHolder}</p>
        </div>
        <div>
          <span className='text-xs font-light'>Valid Thru</span>
          <p className='font-bold'>
            {expiredMonth}/{expiredYear}
          </p>
        </div>
      </div>
    </div>
  );
}
