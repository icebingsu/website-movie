'use client'
import CarouselOutstanding from "@/components/home-page/carousel-outstanding";
import CarouselHot from "@/components/home-page/carousel-trend";
import ProfileMovie from "@/components/home-page/profile-movie";
import SearchCategory from "@/components/home-page/search-category";
import { ArrowRight } from "lucide-react";
export default function Home() {
  return (
    <main>
      <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
        <ProfileMovie/>
        <div 
          style={{
            position: 'absolute',
            top: '50%', 
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 9))',
            zIndex: 1, 
          }} 
        />
      </div>
      <div className="container">
          <div className="pt-10 flex justify-between px-10">
            <h1 className="text-2xl font-bold">Đề xuất hot</h1>
            <span className="flex items-center gap-3 text-[#228EE5] hover:text-[#1A7DCC] cursor-pointer transition-all duration-300 hover:scale-105">
              <p>Xem thêm</p> 
              <ArrowRight size="16"/>
            </span>
          </div>
          <div className="px-10 mt-10">
            <CarouselHot/>
          </div>
      </div>
      <SearchCategory/>
      <div className="container">
          <div className="pt-10 flex justify-between px-10">
            <h1 className="text-2xl font-bold">Nổi bật</h1>
            <span className="flex items-center gap-3 text-[#228EE5] hover:text-[#1A7DCC] cursor-pointer transition-all duration-300 hover:scale-105">
              <p>Xem tât cả</p> 
              <ArrowRight size="16"/>
            </span>
          </div>
          <CarouselOutstanding/>
      </div>
      <div className="h-[500px]"></div>
    </main>
  );
}
