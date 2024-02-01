'use client';
import Card from '@/app/components/Cards/Card';
import { cards } from '@/content/cards-slider';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-creative';
import { useState } from 'react';
import CardInformation from '@/app/components/Cards/CardInformation';
import CardMovements from '@/app/components/Cards/CardMovements';

export default function CardsSlider() {
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
          {cards.map(cardUser => (
            <SwiperSlide key={cardUser.id}>
              <Card
                balance={cardUser.balance}
                cardNumber={cardUser.cardNumber}
                cardHolder={cardUser.cardHolder}
                expired={cardUser.expired}
                variant={cardUser.variant}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='pl-16'>
        <CardMovements />
        <CardInformation
          cardNumber={cards[slideId].cardNumber}
          cardHolder={cards[slideId].cardHolder}
          expired={cards[slideId].expired}
          cardName={cards[slideId].cardName}
          bank={cards[slideId].bank}
        />
      </div>
    </div>
  );
}
