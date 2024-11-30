import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function CarouselSearch() {
  const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

  const [currentIndex, setCurrentIndex] = useState<number>(0); // Loại dữ liệu là số (number)
  const [isDragging, setIsDragging] = useState<boolean>(false); // Loại dữ liệu là boolean
  const [startX, setStartX] = useState<number>(0); // Loại dữ liệu là số (number)
  const [scrollX, setScrollX] = useState<number>(0); // Loại dữ liệu là số (number)

  const itemsToShow = 12;

  // Hàm chuyển đến slide tiếp theo
  const nextSlide = () => {
    if (currentIndex < items.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Hàm quay lại slide trước
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Hàm xử lý khi bắt đầu kéo
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);  // Lưu vị trí bắt đầu kéo
  };

  // Hàm xử lý khi kéo
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const moveX = e.clientX - startX; // Xác định khoảng cách di chuyển chuột
    setScrollX(moveX); // Cập nhật vị trí kéo
  };

  // Hàm xử lý khi kết thúc kéo
  const handleMouseUp = () => {
    setIsDragging(false);
    // Tính toán slide tiếp theo hoặc slide trước
    if (scrollX > 100) {
      nextSlide();
    } else if (scrollX < -100) {
      prevSlide();
    }
    setScrollX(0); // Reset vị trí kéo
  };

  // Thêm sự kiện vào window khi người dùng kéo
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="relative">
      {/* Nút Prev */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white z-10 rounded-full border border-[white]"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Carousel container */}
      <div
        className="overflow-hidden w-[1250px] mx-auto"
        onMouseDown={handleMouseDown}
        style={{
          cursor: isDragging ? 'grabbing' : 'grab', 
        }}
      >
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <button className="text-center py-1 px-2 bg-transparent border border-[#228EE5] rounded-full mr-1">
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Nút Next */}
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white z-10 rounded-full border border-[white]"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
