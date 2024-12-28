'use client';
import React, { useState } from 'react';
import { Swiper as SwiperInstance, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper } from 'swiper'; 
import Image from 'next/image';

export default function ProfileMovie() {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null); 

  return (
    <div style={{ maxWidth: '300px', margin: '0 100px' }}>
      <SwiperInstance
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as React.CSSProperties}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }} 
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image
            src={`/images/upload/5-buoc-thiet-ke-poster-phim-5.png`}
            alt='5-buoc-thiet-ke-poster-phim-5'
            width={300}
            height={100}
            className="rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image
            src={`/images/upload/poster-561x800.jpg`}
            alt='5-buoc-thiet-ke-poster-phim-5'
            width={300}
            height={100}
            className="rounded-xl"
          />
        </SwiperSlide>
      </SwiperInstance>

      <SwiperInstance
        onSwiper={setThumbsSwiper} 
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-3"
      >
       <SwiperSlide>
            <Image
                className="h-[50px] w-[300px] rounded-lg" 
                src={`/images/upload/5-buoc-thiet-ke-poster-phim-5.png`} 
                alt='5-buoc-thiet-ke-poster-phim-5' 
                width={100} 
                height={100} 
            />
        </SwiperSlide>
        <SwiperSlide>
        <Image
            className="h-[50px] w-[300px] rounded-lg" 
            src={`/images/upload/poster-561x800.jpg`}
            alt='5-buoc-thiet-ke-poster-phim-5'
            width={100}
            height={100}
          />
        </SwiperSlide>
      </SwiperInstance>
    </div>
  );
}
