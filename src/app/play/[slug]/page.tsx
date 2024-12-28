import { Button } from '@/components/ui/button';
import {
    ToggleGroup,
    ToggleGroupItem,
  } from "@/components/ui/toggle-group"
import { Dot, Share, Share2, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,

  } from "@/components/ui/carousel"
interface PlayMovieProps {
  params: { slug: string };
}

const PlayMovie: React.FC<PlayMovieProps> = ({ params }) => {
  const { slug } = params;
  console.log(slug);
  
  return (
    <div className="pt-28 container px-10 relative ">
        <div className="flex">
            <iframe
                className="w-full aspect-video"
                src="/video/traillerMovie.mp4"
                title="Trailer phim"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen" // Thêm fullscreen vào allow
                allowFullScreen
            />
           <div className="w-[400px] bg-black relative">
                <div className="absolute inset-0 bg-black bg-opacity-90 backdrop-blur-0">
                    <div className="p-5">
                        <h2 className="text-xl font-bold text-white">Thanh gươm diệt quỷ</h2>
                        <div className="mt-5 flex justify-evenly">
                            <Button variant={'outline'} className="text-white border border-white hover:bg-gray-700 hover:border-gray-700 active:bg-gray-800">
                                Tập phim
                            </Button>
                            <Button variant={'outline'} className="text-white">
                                Session
                            </Button>
                        </div>
                    </div>
                    <div className="mt-2 border-white border-t-[1px] border-1">
                        <div className="p-5">
                        <p className="text-gray-500">Chọn tập 1 - 24</p>
                        <ToggleGroup type="single" className="grid grid-cols-6 gap-4 mt-5">
                            <ToggleGroupItem value="1" className="border-white border-[1px]" aria-label="Toggle bold">
                                1
                            </ToggleGroupItem>
                            <ToggleGroupItem value="2" className="border-white border-[1px]" aria-label="Toggle italic">
                                2
                            </ToggleGroupItem>
                            <ToggleGroupItem value="3" className="border-white border-[1px]" aria-label="Toggle strikethrough">
                                3
                            </ToggleGroupItem>
                            <ToggleGroupItem value="4" className="border-white border-[1px]" aria-label="Toggle strikethrough">
                                4
                            </ToggleGroupItem>
                            <ToggleGroupItem value="5" className="border-white border-[1px]" aria-label="Toggle strikethrough">
                                5
                            </ToggleGroupItem>
                            <ToggleGroupItem value="6" className="border-white border-[1px]" aria-label="Toggle strikethrough">
                                6
                            </ToggleGroupItem>
                            <ToggleGroupItem value="7" className="border-white border-[1px]" aria-label="Toggle strikethrough">
                                7
                            </ToggleGroupItem>
                            <ToggleGroupItem value="8" className="border-white border-[1px]" aria-label="Toggle strikethrough">
                                8
                            </ToggleGroupItem>
                            <ToggleGroupItem value="9" className="border-white border-[1px]" aria-label="Toggle strikethrough">
                                9
                            </ToggleGroupItem>
                            <ToggleGroupItem value="10" className="border-white border-[1px]" aria-label="Toggle strikethrough">
                                10
                            </ToggleGroupItem>
                            <ToggleGroupItem value="11" className="border-white border-[1px]" aria-label="Toggle strikethrough">
                                11
                            </ToggleGroupItem>
                            <ToggleGroupItem value="12" className="border-white border-[1px]" aria-label="Toggle strikethrough">
                                12
                            </ToggleGroupItem>
                            <ToggleGroupItem value="13" className="border-white border-[1px]" aria-label="Toggle strikethrough">
                                13
                            </ToggleGroupItem>
                            <ToggleGroupItem value="14" className="border-white border-[1px]" aria-label="Toggle strikethrough">
                                14
                            </ToggleGroupItem>
                            <ToggleGroupItem value="15" className="border-white border-[1px]" aria-label="Toggle strikethrough">
                                15
                            </ToggleGroupItem>
                            <ToggleGroupItem value="16" className="border-white border-[1px]" aria-label="Toggle strikethrough">
                                16
                            </ToggleGroupItem>
                            <ToggleGroupItem value="17" className="border-white border-[1px]" aria-label="Toggle strikethrough">
                                17
                            </ToggleGroupItem>
                            <ToggleGroupItem value="18" className="border-white border-[1px]" aria-label="Toggle strikethrough">
                                18
                            </ToggleGroupItem>
                            <ToggleGroupItem value="19" className="border-white border-[1px]" aria-label="Toggle strikethrough">
                                19
                            </ToggleGroupItem>
                            <ToggleGroupItem value="20" className="border-white border-[1px]" aria-label="Toggle strikethrough">
                                20
                            </ToggleGroupItem>
                            <ToggleGroupItem value="21" className="border-white border-[1px]" aria-label="Toggle strikethrough">
                                21
                            </ToggleGroupItem>
                            <ToggleGroupItem value="22" className="border-white border-[1px]" aria-label="Toggle strikethrough">
                                22
                            </ToggleGroupItem>
                            <ToggleGroupItem value="23" className="border-white border-[1px]" aria-label="Toggle strikethrough">
                                23
                            </ToggleGroupItem>
                            <ToggleGroupItem value="24" className="border-white border-[1px]" aria-label="Toggle strikethrough">
                                24
                            </ToggleGroupItem>
                        </ToggleGroup>

                        </div>
                    </div>
                </div>
                <Image width={290} height={333} src="/images/upload/BgMovie.png" alt="Background Image" className="w-full h-full object-cover" />
            </div>
        </div>
        <div className="w-full relative flex gap-10">
            <div className="flex items-center gap-2 p-3 hover:text-[#228ee5]">
                <ThumbsUp strokeWidth={2.5} size={18} />
                <span className="text-sm">Like</span>
            </div>
            <div className="flex items-center gap-2 p-3 hover:text-[#228ee5]">
            <Share2 size={18} strokeWidth={2.5} />
                <span className="text-sm">Chia sẻ</span>
            </div>
            <div className="flex items-center gap-2 p-3 hover:text-[#228ee5]">
                <Share size={18} strokeWidth={2.5}   />
                <span className="text-sm">Thêm vào bộ sưu tập</span>
            </div>
        </div>
        <div className="mt-5 flex">
            <div>
            <div className="flex gap-3 text-xl font-bold">
                 <h3 className="">Thanh gươm diệt quỷ </h3> <Dot size={20} strokeWidth={2.5} /><span>Tập 1</span>
            </div>
            <div className="flex mt-5  items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFD700" className="w-5 h-5">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFD700" className="w-5 h-5">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFD700" className="w-5 h-5">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFD700" className="w-5 h-5">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFD700" className="w-5 h-5">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="text-gray-400 text-sm">(5 sao)</span>
                  <div style={{ borderRight: '2px solid #333', height: '14px', margin: '20px 0', marginLeft: "10px" }} />
                  <span className="text-gray-400 text-sm">2020</span>
                  <div style={{ borderRight: '2px solid #333', height: '14px', margin: '20px 0', marginLeft: "10px" }} />
                  <span className="text-gray-400 text-sm">1 giờ 20 Phút</span>
            </div>
            <div className='flex flex-col'>
            <span className="mt-3 text-gray-600">Tác giả : <span className="text-gray-400 text-sm">Nguyễn Kim Hùng</span></span>
            <span className="mt-3 text-gray-600 w-full">Mô tả : <span className="text-gray-400 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis harum ullam molestias id iusto sed, sequi in? Obcaecati, veritatis soluta. Repudiandae, quibusdam enim. Maxime autem rem aperiam doloribus molestiae eaque!</span></span>
            </div>
            <div>
                <h3 className="text-xl font-bold mt-5">Đề xuất cho bạn</h3>
                <div>
                    tại đây bỏ 1 dạng danh sách phim đề xuất
                </div>
            </div>
            </div>
            <div className='w-[470px]'>
                <h3 className="text-xl font-bold pb-5">yêu thích nhất</h3>
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        orientation="vertical"
                        className="w-full max-w-xs"
                        >
                       <CarouselContent className="h-[600px]">
                        <CarouselItem className="mt-3 basis-1/2 h-[90px] flex md:basis-1/6 items-center space-x-2">
                                <div className="relative w-[150px] h-[85px]">
                                    <Image
                                        src={'/images/upload/bgMovieBottom.jpg'}
                                        alt="bgMovieBottom.jpg"
                                        width={150}
                                        height={19}
                                        className="rounded-lg object-cover w-full"
                                    />
                                    <span className="absolute bottom-0 left-0 text-white bg-black opacity-90 rounded-md px-2 py-1 text-xs">19:24</span>
                                </div>
                                <p className="text-sm text-gray-300 w-[140px]">Đông trùng hạ thảo tiên nhân sắp chết</p>
                            </CarouselItem>
                        <CarouselItem className="mt-3 basis-1/2 h-[90px] flex md:basis-1/6 items-center space-x-2">
                                <div className="relative w-[150px] h-[85px]">
                                    <Image
                                        src={'/images/upload/bgMovieBottom.jpg'}
                                        alt="bgMovieBottom.jpg"
                                        width={150}
                                        height={19}
                                        className="rounded-lg object-cover w-full"
                                    />
                                    <span className="absolute bottom-0 left-0 text-white bg-black opacity-90 rounded-md px-2 py-1 text-xs">19:24</span>
                                </div>
                                <p className="text-sm text-gray-300 w-[140px]">Đông trùng hạ thảo tiên nhân sắp chết</p>
                            </CarouselItem>
                        <CarouselItem className="mt-3 basis-1/2 h-[90px] flex md:basis-1/6 items-center space-x-2">
                                <div className="relative w-[150px] h-[85px]">
                                    <Image
                                        src={'/images/upload/bgMovieBottom.jpg'}
                                        alt="bgMovieBottom.jpg"
                                        width={150}
                                        height={19}
                                        className="rounded-lg object-cover w-full"
                                    />
                                    <span className="absolute bottom-0 left-0 text-white bg-black opacity-90 rounded-md px-2 py-1 text-xs">19:24</span>
                                </div>
                                <p className="text-sm text-gray-300 w-[140px]">Đông trùng hạ thảo tiên nhân sắp chết</p>
                            </CarouselItem>
                        <CarouselItem className="mt-3 basis-1/2 h-[90px] flex md:basis-1/6 items-center space-x-2">
                                <div className="relative w-[150px] h-[85px]">
                                    <Image
                                        src={'/images/upload/bgMovieBottom.jpg'}
                                        alt="bgMovieBottom.jpg"
                                        width={150}
                                        height={19}
                                        className="rounded-lg object-cover w-full"
                                    />
                                    <span className="absolute bottom-0 left-0 text-white bg-black opacity-90 rounded-md px-2 py-1 text-xs">19:24</span>
                                </div>
                                <p className="text-sm text-gray-300 w-[140px]">Đông trùng hạ thảo tiên nhân sắp chết</p>
                            </CarouselItem>
                            <CarouselItem className="mt-3 basis-1/2 h-[90px] flex md:basis-1/6 items-center space-x-2">
                                <div className="relative w-[150px] h-[85px]">
                                    <Image
                                        src={'/images/upload/bgMovieBottom.jpg'}
                                        alt="bgMovieBottom.jpg"
                                        width={150}
                                        height={19}
                                        className="rounded-lg object-cover w-full"
                                    />
                                    <span className="absolute bottom-0 left-0 text-white bg-black opacity-90 rounded-md px-2 py-1 text-xs">19:24</span>
                                </div>
                                <p className="text-sm text-gray-300 w-[140px]">Đông trùng hạ thảo tiên nhân sắp chết</p>
                            </CarouselItem>
                            <CarouselItem className="mt-3 basis-1/2 h-[90px] flex md:basis-1/6 items-center space-x-2">
                                <div className="relative w-[150px] h-[85px]">
                                    <Image
                                        src={'/images/upload/bgMovieBottom.jpg'}
                                        alt="bgMovieBottom.jpg"
                                        width={150}
                                        height={19}
                                        className="rounded-lg object-cover w-full"
                                    />
                                    <span className="absolute bottom-0 left-0 text-white bg-black opacity-90 rounded-md px-2 py-1 text-xs">19:24</span>
                                </div>
                                <p className="text-sm text-gray-300 w-[140px]">Đông trùng hạ thảo tiên nhân sắp chết</p>
                            </CarouselItem>

                        </CarouselContent>


                    </Carousel>
            </div>
        </div>
       
    </div>
  );
};

export default PlayMovie;
