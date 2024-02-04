'use client';
import Card from '@/app/components/Cards/Card';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-creative';
import { useState } from 'react';
import CardInformation from '@/app/components/Cards/CardInformation';
import CardMovements from '@/app/components/Cards/CardMovements';

type Card = {
  balance: number;
  cardNumber: string;
  validMonth: string;
  validYear: string;
  cardName: string;
  bankName: string;
  id: number;
  cardHolderName: string;
  cards: [];
};

type Cards = {
  cards: Card[];
};

export default function CardsSlider({ cards }: Cards) {
  const [slideId, setSlideId] = useState(0);

  const handleSlideChange = (swiper: any) => {
    const activeIndex = swiper.realIndex;
    setSlideId(activeIndex);
  };

  return (
    <div className='flex'>
      <div className='max-w-[400px]'>
        <Swiper
          initialSlide={slideId}
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={30}
          onSlideChange={handleSlideChange}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          {cards.map((cardUser, index) => (
            <SwiperSlide key={index}>
              <Card
                balance={cardUser.balance}
                cardNumber={cardUser.cardNumber}
                cardHolder={cardUser.cardHolderName}
                expiredMonth={cardUser.validMonth}
                expiredYear={cardUser.validYear}
                variant={'#6160DC'}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='pl-16'>
        <CardMovements />
        <CardInformation
          cardNumber={cards[slideId]?.cardNumber}
          cardHolder={cards[slideId]?.cardHolderName}
          expiredMonth={cards[slideId]?.validMonth}
          expiredYear={cards[slideId]?.validYear}
          cardName={cards[slideId]?.cardName}
          bank={cards[slideId]?.bankName}
        />
      </div>
    </div>
  );
}
