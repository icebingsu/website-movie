'use client'
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

export default function Category() {
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const dropdownRef = useRef<HTMLDivElement | null>(null);
   const menuRef = useRef<HTMLLIElement | null>(null);
   const timeoutRef = useRef<NodeJS.Timeout | null>(null);
   const handleDropdownClick = (e: React.MouseEvent) => {
     e.stopPropagation();
     setIsDropdownOpen((prev) => !prev); 
   };
   const handleClickOutside = (e: MouseEvent) => {
     if (
       dropdownRef.current && !dropdownRef.current.contains(e.target as Node) &&
       !menuRef.current?.contains(e.target as Node)
     ) {
       setIsDropdownOpen(false);
     }
   };
   useEffect(() => {
     document.addEventListener("click", handleClickOutside);
     return () => {
       document.removeEventListener("click", handleClickOutside);
     };
   }, []);
   const handleMouseEnter = () => {
     if (timeoutRef.current) {
       clearTimeout(timeoutRef.current);
     }
     setIsDropdownOpen(true);
   };
   const handleMouseLeave = () => {
     timeoutRef.current = setTimeout(() => {
       setIsDropdownOpen(false); 
     }, 300);
   };
   const handleDropdownMouseEnter = () => {
     if (timeoutRef.current) {
       clearTimeout(timeoutRef.current);
     }
     setIsDropdownOpen(true); 
   };
   const handleDropdownMouseLeave = () => {
     timeoutRef.current = setTimeout(() => {
       setIsDropdownOpen(false); 
     }, 300);
   };
  return (
      <li
         ref={menuRef}
         className={`relative group ${isDropdownOpen ? 'text-[#228EE5] border-b-2 border-[#228EE5]' : 'hover:text-[#228EE5] hover:border-b-2 hover:border-[#228EE5] transition-colors duration-200 ease-in-out'}`}
         onClick={handleDropdownClick}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         style={{ padding: '0 15px' }}
      >
      <button>Thể loại</button>
       <div
       ref={dropdownRef}
       className={`absolute left-0 mt-1 w-[100px] shadow-lg rounded-lg z-10 transition-all duration-300 ease-out
         ${isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
       style={{
         marginTop: "10px",
         backdropFilter: "blur(10px)", 
         backgroundColor: "rgba(255, 255, 255, 0.9)", 
         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
       }}
       onMouseEnter={handleDropdownMouseEnter}
       onMouseLeave={handleDropdownMouseLeave}
     >
       <ul>
         <li className="px-4 py-2 text-sm">
           <Link href="/">Link 1</Link>
         </li>
         <li className="px-4 py-2 text-sm">
           <Link href="/">Link 2</Link>
         </li>
         <li className="px-4 py-2 text-sm">
           <Link href="/">Link 3</Link>
         </li>
       </ul>
     </div>

   <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#228EE5] transition-all duration-300 ease-in-out group-hover:w-full"></span>
 </li>
  )
}
