import ProfileMovie from "@/components/album-page/ProfileMovie";
import Evaluate from "@/components/album-page/Evaluate";
import { Button } from "@/components/ui/button";
import { DollarSign, MessageCircleHeart, TicketPlus } from "lucide-react";
import Link from "next/link";
import RelatedMovies from "@/components/album-page/relatedMovies";
import PlayMovie from "@/components/album-page/PlayMovie";
  export default async  function AlbumDetails({ params }: { params: { profileMovie: string } }) {
      const { profileMovie } = await params;
      console.log(profileMovie);
      return (
        <div className="relative">
          <div className="flex container pt-36 px-10 relative justify-between">
              <div className="flex flex-col">
                <h3 className="text-3xl font-bold">Tuyệt Địa Đào Vong</h3>
                <span className="flex items-center space-x-1">
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
                  <div style={{ borderRight: '2px solid #333', height: '14px', margin: '20px 0', marginLeft: "10px" }} />
                  <span className="text-gray-400 text-sm">2020</span>
                  <div style={{ borderRight: '2px solid #333', height: '14px', margin: '20px 0', marginLeft: "10px" }} />
                  <span className="text-gray-400 text-sm">1 giờ 20 Phút</span>
                </span>
                <div className="flex gap-2 items-center flex-wrap max-w-[600px]">
                  <Link href={`/moviesBycategory`} className="text-sm text-gray-500 hover:text-blue-500 border-[1px] border-gray-300 rounded px-2 py-1">
                    Hành động
                  </Link>
                  <Link href={`/moviesBycategory`} className="text-sm text-gray-500 hover:text-blue-500 border-[1px] border-gray-300 rounded px-2 py-1">
                    Hài
                  </Link>
                  <Link href={`/moviesBycategory`} className="text-sm text-gray-500 hover:text-blue-500 border-[1px] border-gray-300 rounded px-2 py-1">
                    Chính kịch
                  </Link>
                  <Link href={`/moviesBycategory`} className="text-sm text-gray-500 hover:text-blue-500 border-[1px] border-gray-300 rounded px-2 py-1">
                    Hoạt hình
                  </Link>
                  <Link href={`/moviesBycategory`} className="text-sm text-gray-500 hover:text-blue-500 border-[1px] border-gray-300 rounded px-2 py-1">
                    Đạo chích
                  </Link>
                  <Link href={`/moviesBycategory`} className="text-sm text-gray-500 hover:text-blue-500 border-[1px] border-gray-300 rounded px-2 py-1">
                    Đạo chích
                  </Link>
                  <Link href={`/moviesBycategory`} className="text-sm text-gray-500 hover:text-blue-500 border-[1px] border-gray-300 rounded px-2 py-1">
                    Đạo chích
                  </Link>
                  <Link href={`/moviesBycategory`} className="text-sm text-gray-500 hover:text-blue-500 border-[1px] border-gray-300 rounded px-2 py-1">
                    Đạo chích
                  </Link>
                  <Link href={`/moviesBycategory`} className="text-sm text-gray-500 hover:text-blue-500 border-[1px] border-gray-300 rounded px-2 py-1">
                    Đạo chích
                  </Link>
                  <Link href={`/moviesBycategory`} className="text-sm text-gray-500 hover:text-blue-500 border-[1px] border-gray-300 rounded px-2 py-1">
                    Đạo chích
                  </Link>
                </div>
                <Button variant={"default"} className="flex items-center border hover:bg-slate-400 border-gray-300 rounded transition duration-300 w-[150px] mt-5 p-2">
                  <DollarSign className="w-5 h-5" />
                  <span>Donate</span>
                </Button>
                <span className="mt-3 text-gray-600">Tác giả : <span className="text-gray-400 text-sm">Nguyễn Kim Hùng</span></span>
                <span className="mt-3 text-gray-600 w-[600px]">Mô tả : <span className="text-gray-400 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis harum ullam molestias id iusto sed, sequi in? Obcaecati, veritatis soluta. Repudiandae, quibusdam enim. Maxime autem rem aperiam doloribus molestiae eaque!</span></span>
                <div className="flex gap-3">
                  <PlayMovie/>
                  <Button className="mt-3  border hover:bg-slate-400 border-gray-300 rounded transition duration-300 w-[150px]">
                    <TicketPlus />
                    sưu tập
                  </Button>
                  <Button className="mt-3  border hover:bg-slate-400 border-gray-300 rounded transition duration-300 w-[150px]">
                  <MessageCircleHeart />
                    Yêu thích
                  </Button>
                </div>
              </div>
              <div>
                <ProfileMovie/>
              </div>
          </div>
          <Evaluate/>
          <RelatedMovies/>
        </div>
        
      );
    }
    