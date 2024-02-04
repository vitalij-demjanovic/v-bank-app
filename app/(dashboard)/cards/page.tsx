import { getCards } from '@/lib/cards/cards';
import CardsSlider from '@/app/components/Cards/CardsSlider';

export default async function Page() {
  const data = await getCards();

  return (
    <div className='pl-16 pr-8'>
      <h1 className='mb-8 text-3xl font-bold'>Cards</h1>
      <CardsSlider cards={data} />
    </div>
  );
}
