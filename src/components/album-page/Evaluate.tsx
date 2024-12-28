import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { Textarea } from '../ui/textarea'
import { Dot, Heart, MessageSquare } from 'lucide-react'

function RelatedInformation() {
    return (
            <div className="container px-10  pt-5">
                <div className=" border-1 border-[#333] border-t-[1px]">
                    <h3 className="mt-5 font-medium text-xl">Nhận xét</h3>
                    <p className="text-gray-600 text-xs ">để lại nhận xét của bạn sẽ giúp chúng tôi trong qua trình chọn lọc phim</p>
                    <div className="mt-5">
                        <div className="flex gap-5 justify-center">
                            <Avatar>
                                <AvatarImage src="https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474079cnT/anh-hotboy-viet-nam_085753800.jpg" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Textarea placeholder="Để lại nhận xét của bạn" />
                        </div>
                        <div className="flex justify-end gap-3 mt-3">
                            <button className=" bg-[#228ee5] px-4 rounded-md">Hủy</button>
                            <button className=" bg-[#228ee5] px-4 rounded-md">Gửi</button>
                        </div>
                        <div className="pl-[60px]"><div className=" border-1 border-[#333] border-t-[1px] mt-3"></div></div>
                        <div className="flex gap-5 mt-7 items-center">
                            <Avatar>
                                <AvatarImage src="https://vcdn1-dulich.vnecdn.net/2021/07/16/3-1-1626444927.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=KU8IkmrM5HbtYIyyS5k1qQ" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className='flex flex-col gap-2'>
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-500 text-base font-bold">Nguyễn Kim Hùng</span>
                                    <Dot strokeWidth={1.5} />
                                    <span className="text-xs text-gray-500">Vừa xong</span>
                                </div>
                                <p className="text-sm">kkk</p>
                                <div className="flex gap-5">
                                    <div className="flex gap-2 items-center hover:text-blue-600">
                                        <button className=""><Heart size={16}/></button> <span className="text-base">9862</span>
                                    </div>
                                    <div className="flex gap-2 items-center hover:text-blue-600">
                                        <button className="hover:text-blue-600"><MessageSquare  size={16}/></button> <span className="text-base">trả lời</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="flex gap-5 mt-7 items-center">
                            <Avatar>
                                <AvatarImage src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className='flex flex-col gap-2'>
                                <div className="flex items-center">
                                    <span className="text-gray-500 text-base font-bold">Mỹ tiên xinh đẹp</span>
                                    <Dot strokeWidth={1.5} />
                                    <span className="text-xs text-gray-500"> 18 phút</span>
                                </div>
                                <p className="text-sm">Phần 2 đâu ad</p>
                                <div className="flex gap-5">
                                    <div className="flex gap-2 items-center">
                                        <button className="">
                                            <Heart size={16} color="red" fill="red" />
                                        </button> 
                                        <span className="text-base text-red-500">5</span>
                                    </div>
                                    <div className="flex gap-2 items-center hover:text-blue-600">
                                        <button className="hover:text-blue-600"><MessageSquare  size={16}/></button> <span className="text-base">trả lời</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-5 mt-7 items-center">
                            <Avatar>
                                <AvatarImage src="https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/avatar-dep-cho-nam-1.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className='flex flex-col gap-2'>
                                <div className="flex items-center">
                                    <span className="text-gray-500 text-base font-bold">Trần thị ái mỹ</span>
                                    <Dot strokeWidth={1.5} />
                                    <span className="text-xs text-gray-500">20/15/2024</span>
                                </div>
                                <p className="text-sm">Phần 2 bác ơi</p>
                                <div className="flex gap-5">
                                    <div className="flex gap-2 items-center hover:text-blue-600">
                                        <button className="">
                                            <Heart size={16} />
                                        </button> 
                                        <span className="text-base ">Thích</span>
                                    </div>
                                    <div className="flex gap-2 items-center hover:text-blue-600">
                                        <button className="hover:text-blue-600"><MessageSquare  size={16}/></button> <span className="text-base">trả lời</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pl-[60px]"><div className=" border-1 border-[#333] border-t-[1px] mt-3"></div></div>
                        <p className="text-center text-gray-600 hover:text-[#228ee5] mt-10">Xem thêm đánh giá ...</p>
                    </div>
                </div>
            </div>

    )
}

export default RelatedInformation
