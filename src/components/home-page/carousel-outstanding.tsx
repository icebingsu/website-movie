import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import { Pagination, Navigation } from 'swiper/modules';  
import Image from 'next/image';
import '@/components/home-page/animation.css'
import { Clapperboard, Clock3, Languages, MapPin } from 'lucide-react';
import Link from 'next/link';
export default function CarouselOutstanding() {
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
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         <SwiperSlide>
           <div className="relative group w-52 h-auto">
               <Link href="album/1">
             <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/upload/poster-561x800.jpg"
                  alt="Slide 1"
                  width={208}
                  height={277}
                  className="rounded-sm w-full h-auto transition-transform transform duration-200 ease-in-out"
                />
               
               <div
                  className="absolute top-[0%] left-0 right-0 w-full animationBgMovie transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500  rounded-sm"
                  style={{ height: '100%' }}
                >
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 rounded-sm z-10"></div>
                  
                  <div className="relative z-20 flex items-center pt-[40%] pl-[20px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-mono font-bold text-base text-white">Miền bắc(18+)</h3>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clapperboard size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Clock3 size={16} className='text-[#228ee5]'/><span>102&prime;</span>                      </span>
                      <span className="flex items-center gap-2 text-sm font-normal"><MapPin  size={16} className='text-[#228ee5]'/><span>Việt nam</span></span>
                      <span className="flex items-center gap-2 text-sm font-normal"><Languages size={16} className='text-[#228ee5]'/><span>Chích kịch</span></span>
                    </div>
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
               </Link>
           </div>
          </SwiperSlide>
         {/* Các nút điều hướng */}
         <div className="swiper-button-next z-10 w-6 h-6 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-black hover:bg-opacity-70 transition-all" />
         <div className="swiper-button-prev z-10 w-6 h-6 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-black hover:bg-opacity-70 transition-all" />
       </Swiper>
     </>
   );
 }
 