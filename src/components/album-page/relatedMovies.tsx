import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Link from 'next/link';
import Image from 'next/image';
import { Clapperboard, Clock3, Languages, MapPin } from 'lucide-react';
import '@/components/album-page/animation.css'
function RelatedMovies() {
    return (
        <div className="container px-10 pt-5">
            <div className=" border-1 border-[#333] border-t-[1px] mt-3"></div>
            <h2 className="text-2xl font-bold mb-4 mt-10">Phim liên quan</h2>
           
                <Carousel
                 opts={{
                    align: "end",
                    loop: true,
                  }}
                >
                    <CarouselContent>
                        <CarouselItem className="basis-1/6">
                            <div className="relative group w-52 h-auto">
                                <Link href="/album/1">
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
                        </CarouselItem>
                        <CarouselItem className="basis-1/6">
                            <div className="relative group w-52 h-auto">
                                <Link href="/album/1">
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
                        </CarouselItem>
                        <CarouselItem className="basis-1/6">
                            <div className="relative group w-52 h-auto">
                                <Link href="/album/1">
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
                        </CarouselItem>
                        <CarouselItem className="basis-1/6">
                            <div className="relative group w-52 h-auto">
                                <Link href="/album/1">
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
                        </CarouselItem>
                        <CarouselItem className="basis-1/6">
                            <div className="relative group w-52 h-auto">
                                <Link href="/album/1">
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
                        </CarouselItem>
                        <CarouselItem className="basis-1/6">
                            <div className="relative group w-52 h-auto">
                                <Link href="/album/1">
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
                        </CarouselItem>
                        <CarouselItem className="basis-1/6">
                            <div className="relative group w-52 h-auto">
                                <Link href="/album/1">
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
                        </CarouselItem>
                        <CarouselItem className="basis-1/6">
                            <div className="relative group w-52 h-auto">
                                <Link href="/album/1">
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
                        </CarouselItem>
                        <CarouselItem className="basis-1/6">
                            <div className="relative group w-52 h-auto">
                                <Link href="/album/1">
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
                        </CarouselItem>
                        <CarouselItem className="basis-1/6">
                            <div className="relative group w-52 h-auto">
                                <Link href="/album/1">
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
                        </CarouselItem>
                        <CarouselItem className="basis-1/6">
                            <div className="relative group w-52 h-auto">
                                <Link href="/album/1">
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
                        </CarouselItem>
                        <CarouselItem className="basis-1/6">
                            <div className="relative group w-52 h-auto">
                                <Link href="/album/1">
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
                        </CarouselItem>
                        <CarouselItem className="basis-1/6">
                            <div className="relative group w-52 h-auto">
                                <Link href="/album/1">
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
                        </CarouselItem>
                        <CarouselItem className="basis-1/6">
                            <div className="relative group w-52 h-auto">
                                <Link href="/album/1">
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
                        </CarouselItem>
                        <CarouselItem className="basis-1/6">
                            <div className="relative group w-52 h-auto">
                                <Link href="/album/1">
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
                        </CarouselItem>
                        
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
        </div>
    );
}

export default RelatedMovies;
