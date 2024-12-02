import { ArrowRight } from 'lucide-react'
import React from 'react'
export default function SearchCategory() {
  return (
   <div className="container mx-auto pt-10 px-10">
   <h2 className="text-2xl font-bold text-[#228EE5] mb-6 flex items-center hover:text-[#1A7DCC] cursor-pointer">
     Chọn lọc danh mục <ArrowRight className="ml-2 mt-1 hover:translate-x-1 transition-all" />
   </h2>
     <ul className="flex flex-wrap  gap-4 list-none">
       <li className="px-4 py-2 rounded-lg transition-all bg-theme border relative overflow-hidden hover:sparkle active:bg-[#228EE5]">
         Hành động
       </li>
       <li className="px-4 py-2 rounded-lg transition-all bg-theme border relative overflow-hidden hover:sparkle active:bg-[#228EE5]">
         Phiêu lưu
       </li>
       <li className="px-4 py-2 rounded-lg transition-all bg-theme border relative overflow-hidden hover:sparkle active:bg-[#228EE5]">
         Kinh dị
       </li>
       <li className="px-4 py-2 rounded-lg transition-all bg-theme border relative overflow-hidden hover:sparkle active:bg-[#228EE5]">
         Hoạt hình
       </li>
       <li className="px-4 py-2 rounded-lg transition-all bg-theme border relative overflow-hidden hover:sparkle active:bg-[#228EE5]">
         Anime
       </li>
       <li className="px-4 py-2 rounded-lg transition-all bg-theme border relative overflow-hidden hover:sparkle active:bg-[#228EE5]">
         Lãng mạn
       </li>
       <li className="px-4 py-2 rounded-lg transition-all bg-theme border relative overflow-hidden hover:sparkle active:bg-[#228EE5]">
         Tâm lý
       </li>
       <li className="px-4 py-2 rounded-lg transition-all bg-theme border relative overflow-hidden hover:sparkle active:bg-[#228EE5]">
         Viễn tưởng
       </li>
       <li className="px-4 py-2 rounded-lg transition-all bg-theme border relative overflow-hidden hover:sparkle active:bg-[#228EE5]">
         Tài liệu
       </li>
       <li className="px-4 py-2 rounded-lg transition-all bg-theme border relative overflow-hidden hover:sparkle active:bg-[#228EE5]">
         Trinh thám
       </li>
       <li className="px-4 py-2 rounded-lg transition-all bg-theme border relative overflow-hidden hover:sparkle active:bg-[#228EE5]">
         Thần thoại
       </li>
       <li className="px-4 py-2 rounded-lg transition-all bg-theme border relative overflow-hidden hover:sparkle active:bg-[#228EE5]">
         Gia đình
       </li>
       <li className="px-4 py-2 rounded-lg transition-all bg-theme border relative overflow-hidden hover:sparkle active:bg-[#228EE5]">
         Hài
       </li>
       <li className="px-4 py-2 rounded-lg transition-all bg-theme border relative overflow-hidden hover:sparkle active:bg-[#228EE5]">
         Thể thao
       </li>
       <li className="px-4 py-2 rounded-lg transition-all bg-theme border relative overflow-hidden hover:sparkle active:bg-[#228EE5]">
         Tình cảm
       </li>
     </ul>
     <div>
         
     </div>
   </div>
  )
}
