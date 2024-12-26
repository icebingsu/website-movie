import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import { Pagination, Navigation } from 'swiper/modules';  
import Image from 'next/image';
import { CirclePlay } from 'lucide-react';

export default function CarouselViewMore() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation, Pagination]} 
        className="mySwiper relative"
      >
        <SwiperSlide>
          <div className="group">
            <div className="relative group w-[333px] h-[190px]">
              <Image
                src="/images/upload/anhvideo1920x1080.png"
                alt="Slide 1"
                width={333}
                height={190}
                className="rounded-lg w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
              <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 z-20">
                <CirclePlay className="w-12 h-12 text-white transform scale-100 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <span className="absolute top-0 right-0 text-white bg-[#228EE5] bg-opacity-70 px-2 py-1 text-xs z-30 rounded-tr-lg">Đã Full</span>
              <span className="absolute bottom-0 left-0 text-white bg-gray-800 bg-opacity-70 px-2 py-1 text-xs z-30 rounded-bl-lg">Trọn bộ 24 tập</span>
            </div>
            <div className="mt-4 text-white text-sm font-normal group-hover:opacity-100 group-hover:text-[#228EE5]">
              Tên Phim: Đây là tên phim
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group">
            <div className="relative group w-[333px] h-[190px]">
              <Image
                src="/images/upload/anhvideo1920x1080.png"
                alt="Slide 1"
                width={333}
                height={190}
                className="rounded-lg w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
              <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 z-20">
                <CirclePlay className="w-12 h-12 text-white transform scale-100 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <span className="absolute top-0 right-0 text-white bg-[#228EE5] bg-opacity-70 px-2 py-1 text-xs z-30 rounded-tr-lg">Đã Full</span>
              <span className="absolute bottom-0 left-0 text-white bg-gray-800 bg-opacity-70 px-2 py-1 text-xs z-30 rounded-bl-lg">Trọn bộ 24 tập</span>
            </div>
            <div className="mt-4 text-white text-sm font-normal group-hover:opacity-100 group-hover:text-[#228EE5]">
              Tên Phim: Đây là tên phim
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group">
            <div className="relative group w-[333px] h-[190px]">
              <Image
                src="/images/upload/anhvideo1920x1080.png"
                alt="Slide 1"
                width={333}
                height={190}
                className="rounded-lg w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
              <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 z-20">
                <CirclePlay className="w-12 h-12 text-white transform scale-100 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <span className="absolute top-0 right-0 text-white bg-[#228EE5] bg-opacity-70 px-2 py-1 text-xs z-30 rounded-tr-lg">Đã Full</span>
              <span className="absolute bottom-0 left-0 text-white bg-gray-800 bg-opacity-70 px-2 py-1 text-xs z-30 rounded-bl-lg">Trọn bộ 24 tập</span>
            </div>
            <div className="mt-4 text-white text-sm font-normal group-hover:opacity-100 group-hover:text-[#228EE5]">
              Tên Phim: Đây là tên phim
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group">
            <div className="relative group w-[333px] h-[190px]">
              <Image
                src="/images/upload/anhvideo1920x1080.png"
                alt="Slide 1"
                width={333}
                height={190}
                className="rounded-lg w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
              <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 z-20">
                <CirclePlay className="w-12 h-12 text-white transform scale-100 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <span className="absolute top-0 right-0 text-white bg-[#228EE5] bg-opacity-70 px-2 py-1 text-xs z-30 rounded-tr-lg">Đã Full</span>
              <span className="absolute bottom-0 left-0 text-white bg-gray-800 bg-opacity-70 px-2 py-1 text-xs z-30 rounded-bl-lg">Trọn bộ 24 tập</span>
            </div>
            <div className="mt-4 text-white text-sm font-normal group-hover:opacity-100 group-hover:text-[#228EE5]">
              Tên Phim: Đây là tên phim
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group">
            <div className="relative group w-[333px] h-[190px]">
              <Image
                src="/images/upload/anhvideo1920x1080.png"
                alt="Slide 1"
                width={333}
                height={190}
                className="rounded-lg w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
              <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 z-20">
                <CirclePlay className="w-12 h-12 text-white transform scale-100 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <span className="absolute top-0 right-0 text-white bg-[#228EE5] bg-opacity-70 px-2 py-1 text-xs z-30 rounded-tr-lg">Đã Full</span>
              <span className="absolute bottom-0 left-0 text-white bg-gray-800 bg-opacity-70 px-2 py-1 text-xs z-30 rounded-bl-lg">Trọn bộ 24 tập</span>
            </div>
            <div className="mt-4 text-white text-sm font-normal group-hover:opacity-100 group-hover:text-[#228EE5]">
              Tên Phim: Đây là tên phim
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group">
            <div className="relative group w-[333px] h-[190px]">
              <Image
                src="/images/upload/anhvideo1920x1080.png"
                alt="Slide 1"
                width={333}
                height={190}
                className="rounded-lg w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
              <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 z-20">
                <CirclePlay className="w-12 h-12 text-white transform scale-100 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <span className="absolute top-0 right-0 text-white bg-[#228EE5] bg-opacity-70 px-2 py-1 text-xs z-30 rounded-tr-lg">Đã Full</span>
              <span className="absolute bottom-0 left-0 text-white bg-gray-800 bg-opacity-70 px-2 py-1 text-xs z-30 rounded-bl-lg">Trọn bộ 24 tập</span>
            </div>
            <div className="mt-4 text-white text-sm font-normal group-hover:opacity-100 group-hover:text-[#228EE5]">
              Tên Phim: Đây là tên phim
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group">
            <div className="relative group w-[333px] h-[190px]">
              <Image
                src="/images/upload/anhvideo1920x1080.png"
                alt="Slide 1"
                width={333}
                height={190}
                className="rounded-lg w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
              <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 z-20">
                <CirclePlay className="w-12 h-12 text-white transform scale-100 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <span className="absolute top-0 right-0 text-white bg-[#228EE5] bg-opacity-70 px-2 py-1 text-xs z-30 rounded-tr-lg">Đã Full</span>
              <span className="absolute bottom-0 left-0 text-white bg-gray-800 bg-opacity-70 px-2 py-1 text-xs z-30 rounded-bl-lg">Trọn bộ 24 tập</span>
            </div>
            <div className="mt-4 text-white text-sm font-normal group-hover:opacity-100 group-hover:text-[#228EE5]">
              Tên Phim: Đây là tên phim
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group">
            <div className="relative group w-[333px] h-[190px]">
              <Image
                src="/images/upload/anhvideo1920x1080.png"
                alt="Slide 1"
                width={333}
                height={190}
                className="rounded-lg w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
              <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 z-20">
                <CirclePlay className="w-12 h-12 text-white transform scale-100 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <span className="absolute top-0 right-0 text-white bg-[#228EE5] bg-opacity-70 px-2 py-1 text-xs z-30 rounded-tr-lg">Đã Full</span>
              <span className="absolute bottom-0 left-0 text-white bg-gray-800 bg-opacity-70 px-2 py-1 text-xs z-30 rounded-bl-lg">Trọn bộ 24 tập</span>
            </div>
            <div className="mt-4 text-white text-sm font-normal group-hover:opacity-100 group-hover:text-[#228EE5]">
              Tên Phim: Đây là tên phim
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group">
            <div className="relative group w-[333px] h-[190px]">
              <Image
                src="/images/upload/anhvideo1920x1080.png"
                alt="Slide 1"
                width={333}
                height={190}
                className="rounded-lg w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
              <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 z-20">
                <CirclePlay className="w-12 h-12 text-white transform scale-100 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <span className="absolute top-0 right-0 text-white bg-[#228EE5] bg-opacity-70 px-2 py-1 text-xs z-30 rounded-tr-lg">Đã Full</span>
              <span className="absolute bottom-0 left-0 text-white bg-gray-800 bg-opacity-70 px-2 py-1 text-xs z-30 rounded-bl-lg">Trọn bộ 24 tập</span>
            </div>
            <div className="mt-4 text-white text-sm font-normal group-hover:opacity-100 group-hover:text-[#228EE5]">
              Tên Phim: Đây là tên phim
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="group">
            <div className="relative group w-[333px] h-[190px]">
              <Image
                src="/images/upload/anhvideo1920x1080.png"
                alt="Slide 1"
                width={333}
                height={190}
                className="rounded-lg w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
              <button className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 z-20">
                <CirclePlay className="w-12 h-12 text-white transform scale-100 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <span className="absolute top-0 right-0 text-white bg-[#228EE5] bg-opacity-70 px-2 py-1 text-xs z-30 rounded-tr-lg">Đã Full</span>
              <span className="absolute bottom-0 left-0 text-white bg-gray-800 bg-opacity-70 px-2 py-1 text-xs z-30 rounded-bl-lg">Trọn bộ 24 tập</span>
            </div>
            <div className="mt-4 text-white text-sm font-normal group-hover:opacity-100 group-hover:text-[#228EE5]">
              Tên Phim: Đây là tên phim
            </div>
          </div>
        </SwiperSlide>

        {/* Nút điều hướng */}
        <div className="swiper-button-next z-10 w-6 h-6 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-black hover:bg-opacity-70 transition-all" />
        <div className="swiper-button-prev z-10 w-6 h-6 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-black hover:bg-opacity-70 transition-all" />
      </Swiper>
    </>
  );
}
