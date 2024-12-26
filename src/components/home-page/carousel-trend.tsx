import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import { Pagination, Navigation } from 'swiper/modules';  
import Image from 'next/image';
import { MessageCircleHeart, Play, TicketPlus } from 'lucide-react';

export default function CarouselHot() {
   return (
     <>
       <Swiper
         slidesPerView={1}
         spaceBetween={1}
         navigation={{
           enabled: true,  
           nextEl: '.swiper-button-next', 
           prevEl: '.swiper-button-prev',  
           disabledClass: 'swiper-button-disabled', 
           hiddenClass: 'swiper-button-hidden',  
           lockClass: 'swiper-button-lock', 
           navigationDisabledClass: 'swiper-navigation-disabled', 
         }}
         breakpoints={{
           0: {
             slidesPerView: 1,
             spaceBetween: 10,
           },
           768: {
             slidesPerView: 2,
             spaceBetween: 20,
           },
           1024: {
             slidesPerView: 6,
             spaceBetween: 40,
           },
         }}
         modules={[Navigation, Pagination]} 
         className="mySwiper relative"
         style={{zIndex: 0}}
       >
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
             <div className="relative w-full h-full overflow-hidden">
               {/* Hình ảnh */}
               <Image
                 src="/images/upload/1618301042CTBAF7i4v3cXFfn.jpg"
                 alt="Slide 1"
                 width={208}
                 height={277}
                 className="rounded-lg w-full h-auto transition-transform transform group-hover:scale-110 duration-300 ease-in-out"
               />
               {/* Nền và các nút */}
               <div
                 className="absolute top-[80%] left-0 right-0 w-full transform translate-y-full group-hover:translate-y-0 group-hover:scale-110 transition-all duration-500 bg-theme"
                 style={{ height: '20%' }}
               >
                 <div className="flex gap-3 justify-center items-center pt-3">
                   <button className="bg-[#228EE5] text-white p-1 rounded-full hover:bg-[#1A7DCC]">
                     <Play size={18} />
                   </button>
                   <button className="text-white p-1 rounded-full border-[1px] border-transparent hover:border-[#228EE5]">
                     <MessageCircleHeart size={18} />
                   </button>
                   <button className="text-white p-1 rounded-full border-[1px] border-transparent hover:border-[#228EE5]">
                     <TicketPlus size={18} />
                   </button>
                 </div>
                
               </div>
             </div>
              {/* Tên phim */}
              <div className="text-[14px] mt-3 font-semibold bg-theme  w-full h-[40px] flex justify-center items-center overflow-hidden text-ellipsis hover:text-[#228EE5]"
               style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2
               }}>
               Jack And Joker: Người Đánh Cắp Trái Tim Tôi!
               </div>
           </div>
          </SwiperSlide>
         {/* Các nút điều hướng */}
         <div className="swiper-button-next z-10 w-6 h-6 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-black hover:bg-opacity-70 transition-all" />
         <div className="swiper-button-prev z-10 w-6 h-6 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-black hover:bg-opacity-70 transition-all" />
       </Swiper>
     </>
   );
 }
 