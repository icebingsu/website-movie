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
      <div className="relative group">
         {/* Image with scaling effect */}
         <Image 
            src="/images/upload/1618301042CTBAF7i4v3cXFfn.jpg" 
            alt="Slide 1" 
            width={300} 
            height={400} 
            className="w-48 h-auto transition-transform transform group-hover:scale-110 hover:scale-y-110 duration-300 ease-in-out"
         />
         
         {/* Overlay that appears on hover, covering only the bottom half of the image */}
         <div className="absolute top-[80%] left-0 right-0 bg-opacity-90 opacity-0 bg-black w-full transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
      <div className="flex gap-3 py-2 justify-center items-center m-auto">
         <button className="bg-[#228EE5] text-white py-1 px-2 rounded-full hover:bg-[#1A7DCC]">
            <Play />
         </button>
         <button className=" text-white py-1 px-2 rounded-full hover:bg-red-600">
            <MessageCircleHeart />
         </button>
         <button className=" text-white py-1 px-2 rounded-full hover:bg-red-600">
            <TicketPlus />
         </button>
      </div>
      </div>

      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="relative group">
         {/* Image with scaling effect */}
         <Image 
            src="/images/upload/1618301042CTBAF7i4v3cXFfn.jpg" 
            alt="Slide 1" 
            width={300} 
            height={400} 
            className="w-48 h-auto transition-transform transform group-hover:scale-110 hover:scale-y-110 duration-300 ease-in-out"
         />
         
         {/* Overlay that appears on hover, covering only the bottom half of the image */}
         <div className="absolute top-[80%] left-0 right-0 bg-opacity-90 opacity-0 bg-black w-full transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <div className="flex gap-3 py-2 justify-center items-center m-auto">
               <button className="bg-[#228EE5] text-white py-1 px-2 rounded-full hover:bg-[#1A7DCC]">
                  <Play />
               </button>
               <button className=" text-white py-1 px-2 rounded-full hover:bg-red-600">
                  <MessageCircleHeart />
               </button>
               <button className=" text-white py-1 px-2 rounded-full hover:bg-red-600">
                  <TicketPlus />
               </button>
            </div>
         </div>

      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="relative group">
         {/* Image with scaling effect */}
         <Image 
            src="/images/upload/1618301042CTBAF7i4v3cXFfn.jpg" 
            alt="Slide 1" 
            width={300} 
            height={400} 
            className="w-48 h-auto transition-transform transform group-hover:scale-110 hover:scale-y-110 duration-300 ease-in-out"
         />
         
         {/* Overlay that appears on hover, covering only the bottom half of the image */}
         <div className="absolute top-[80%] left-0 right-0 bg-opacity-90 opacity-0 bg-black w-full transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
      <div className="flex gap-3 py-2 justify-center items-center m-auto">
         <button className="bg-[#228EE5] text-white py-1 px-2 rounded-full hover:bg-[#1A7DCC]">
            <Play />
         </button>
         <button className=" text-white py-1 px-2 rounded-full hover:bg-red-600">
            <MessageCircleHeart />
         </button>
         <button className=" text-white py-1 px-2 rounded-full hover:bg-red-600">
            <TicketPlus />
         </button>
      </div>
      </div>

      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="relative group">
         {/* Image with scaling effect */}
         <Image 
            src="/images/upload/1618301042CTBAF7i4v3cXFfn.jpg" 
            alt="Slide 1" 
            width={300} 
            height={400} 
            className="w-48 h-auto transition-transform transform group-hover:scale-110 hover:scale-y-110 duration-300 ease-in-out"
         />
         
         {/* Overlay that appears on hover, covering only the bottom half of the image */}
         <div className="absolute top-[80%] left-0 right-0 bg-opacity-90 opacity-0 bg-black w-full transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
      <div className="flex gap-3 py-2 justify-center items-center m-auto">
         <button className="bg-[#228EE5] text-white py-1 px-2 rounded-full hover:bg-[#1A7DCC]">
            <Play />
         </button>
         <button className=" text-white py-1 px-2 rounded-full hover:bg-red-600">
            <MessageCircleHeart />
         </button>
         <button className=" text-white py-1 px-2 rounded-full hover:bg-red-600">
            <TicketPlus />
         </button>
      </div>
      </div>

      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="relative group">
         {/* Image with scaling effect */}
         <Image 
            src="/images/upload/1618301042CTBAF7i4v3cXFfn.jpg" 
            alt="Slide 1" 
            width={300} 
            height={400} 
            className="w-48 h-auto transition-transform transform group-hover:scale-110 hover:scale-y-110 duration-300 ease-in-out"
         />
         
         {/* Overlay that appears on hover, covering only the bottom half of the image */}
         <div className="absolute top-[80%] left-0 right-0 bg-opacity-90 opacity-0 bg-black w-full transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
      <div className="flex gap-3 py-2 justify-center items-center m-auto">
         <button className="bg-[#228EE5] text-white py-1 px-2 rounded-full hover:bg-[#1A7DCC]">
            <Play />
         </button>
         <button className=" text-white py-1 px-2 rounded-full hover:bg-red-600">
            <MessageCircleHeart />
         </button>
         <button className=" text-white py-1 px-2 rounded-full hover:bg-red-600">
            <TicketPlus />
         </button>
      </div>
      </div>

      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="relative group">
         {/* Image with scaling effect */}
         <Image 
            src="/images/upload/1618301042CTBAF7i4v3cXFfn.jpg" 
            alt="Slide 1" 
            width={300} 
            height={400} 
            className="w-48 h-auto transition-transform transform group-hover:scale-110 hover:scale-y-110 duration-300 ease-in-out"
         />
         
         {/* Overlay that appears on hover, covering only the bottom half of the image */}
         <div className="absolute top-[80%] left-0 right-0 bg-opacity-90 opacity-0 bg-black w-full transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
      <div className="flex gap-3 py-2 justify-center items-center m-auto">
         <button className="bg-[#228EE5] text-white py-1 px-2 rounded-full hover:bg-[#1A7DCC]">
            <Play />
         </button>
         <button className=" text-white py-1 px-2 rounded-full hover:bg-red-600">
            <MessageCircleHeart />
         </button>
         <button className=" text-white py-1 px-2 rounded-full hover:bg-red-600">
            <TicketPlus />
         </button>
      </div>
      </div>

      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="relative group">
         {/* Image with scaling effect */}
         <Image 
            src="/images/upload/1618301042CTBAF7i4v3cXFfn.jpg" 
            alt="Slide 1" 
            width={300} 
            height={400} 
            className="w-48 h-auto transition-transform transform group-hover:scale-110 hover:scale-y-110 duration-300 ease-in-out"
         />
         
         {/* Overlay that appears on hover, covering only the bottom half of the image */}
         <div className="absolute top-[80%] left-0 right-0 bg-opacity-90 opacity-0 bg-black w-full transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
      <div className="flex gap-3 py-2 justify-center items-center m-auto">
         <button className="bg-[#228EE5] text-white py-1 px-2 rounded-full hover:bg-[#1A7DCC]">
            <Play />
         </button>
         <button className=" text-white py-1 px-2 rounded-full hover:bg-red-600">
            <MessageCircleHeart />
         </button>
         <button className=" text-white py-1 px-2 rounded-full hover:bg-red-600">
            <TicketPlus />
         </button>
      </div>
      </div>

      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="relative group">
         {/* Image with scaling effect */}
         <Image 
            src="/images/upload/1618301042CTBAF7i4v3cXFfn.jpg" 
            alt="Slide 1" 
            width={300} 
            height={400} 
            className="w-48 h-auto transition-transform transform group-hover:scale-110 hover:scale-y-110 duration-300 ease-in-out"
         />
         
         {/* Overlay that appears on hover, covering only the bottom half of the image */}
         <div className="absolute top-[80%] left-0 right-0 bg-opacity-90 opacity-0 bg-black w-full transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
      <div className="flex gap-3 py-2 justify-center items-center m-auto">
         <button className="bg-[#228EE5] text-white py-1 px-2 rounded-full hover:bg-[#1A7DCC]">
            <Play />
         </button>
         <button className=" text-white py-1 px-2 rounded-full hover:bg-red-600">
            <MessageCircleHeart />
         </button>
         <button className=" text-white py-1 px-2 rounded-full hover:bg-red-600">
            <TicketPlus />
         </button>
      </div>
      </div>

      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="relative group">
         {/* Image with scaling effect */}
         <Image 
            src="/images/upload/1618301042CTBAF7i4v3cXFfn.jpg" 
            alt="Slide 1" 
            width={300} 
            height={400} 
            className="w-48 h-auto transition-transform transform group-hover:scale-110 hover:scale-y-110 duration-300 ease-in-out"
         />
         
         {/* Overlay that appears on hover, covering only the bottom half of the image */}
         <div className="absolute top-[80%] left-0 right-0 bg-opacity-90 opacity-0 bg-black w-full transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
      <div className="flex gap-3 py-2 justify-center items-center m-auto">
         <button className="bg-[#228EE5] text-white py-1 px-2 rounded-full hover:bg-[#1A7DCC]">
            <Play />
         </button>
         <button className=" text-white py-1 px-2 rounded-full hover:bg-red-600">
            <MessageCircleHeart />
         </button>
         <button className=" text-white py-1 px-2 rounded-full hover:bg-red-600">
            <TicketPlus />
         </button>
      </div>
      </div>

      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="relative group">
         {/* Image with scaling effect */}
         <Image 
            src="/images/upload/1618301042CTBAF7i4v3cXFfn.jpg" 
            alt="Slide 1" 
            width={300} 
            height={400} 
            className="w-48 h-auto transition-transform transform group-hover:scale-110 hover:scale-y-110 duration-300 ease-in-out"
         />
         
         {/* Overlay that appears on hover, covering only the bottom half of the image */}
         <div className="absolute top-[80%] left-0 right-0 bg-opacity-90 opacity-0 bg-black w-full transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
      <div className="flex gap-3 py-2 justify-center items-center m-auto">
         <button className="bg-[#228EE5] text-white py-1 px-2 rounded-full hover:bg-[#1A7DCC]">
            <Play />
         </button>
         <button className=" text-white py-1 px-2 rounded-full hover:bg-red-600">
            <MessageCircleHeart />
         </button>
         <button className=" text-white py-1 px-2 rounded-full hover:bg-red-600">
            <TicketPlus />
         </button>
      </div>
      </div>

      </div>
      </SwiperSlide>



        <div className="swiper-button-next z-10 w-6 h-6 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-black hover:bg-opacity-70 transition-all"/>
         <div className="swiper-button-prev z-10 w-6 h-6 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-black hover:bg-opacity-70 transition-all" />
      </Swiper>
    </>
  );
}
