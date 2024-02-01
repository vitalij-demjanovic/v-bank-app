export default function CardInformation({
  cardHolder,
  cardNumber,
  expired,
  cardName,
  bank
}: {
  cardHolder: string;
  cardNumber: string;
  expired: string;
  cardName: string;
  bank: string;
}) {
  return (
    <div className='6 w-[400px]'>
      <h3 className='mb-5 text-xl font-bold'>Card Information</h3>
      <div className='flex flex-wrap'>
        <div className='mb-10 mr-10'>
          <span className='text-xs font-light'>Card Name</span>
          <p className='font-bold'>{cardName}</p>
        </div>
        <div className='mb-10 mr-10'>
          <span className='text-xs font-light'>Card Number</span>
          <p className='font-bold'>{cardNumber}</p>
        </div>
        <div className='mr-10'>
          <span className='text-xs font-light'>Bank</span>
          <p className='font-bold'>{bank}</p>
        </div>
        <div className='mr-10'>
          <span className='text-xs font-light'>Name</span>
          <p className='font-bold'>{cardHolder}</p>
        </div>
        <div className='mr-10'>
          <span className='text-xs font-light'>Valid Thru</span>
          <p className='font-bold'>{expired}</p>
        </div>
      </div>
    </div>
  );
}
