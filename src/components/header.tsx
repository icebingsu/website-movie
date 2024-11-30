"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ModeToggle } from "@/components/mode-toggle";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, Heart, Search, UserRound } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Movie from './drowdrown-li/movie';
import Category from './drowdrown-li/category';
export default function Header() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  // sử lý input Thông báo và cả user 
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null); 
  const searchRef = useRef<HTMLDivElement>(null); 

  const handleClick = () => {
    setIsOpen((prevIsOpen) => {
      const newIsOpen = !prevIsOpen;
      if (newIsOpen && inputRef.current) {
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }
      return newIsOpen;
    });
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (searchRef.current && !searchRef.current.contains(e.relatedTarget as Node)) {
      setIsOpen(false);
    }
  };
  return (
    <header
      className="container py-2 px-10 border-#228EE5 rounded-3xl flex items-center text-sm fixed top-0 left-0 right-0 z-50"
      style={{
        marginTop: "10px",
        backdropFilter: "blur(70px)", 
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
      }}
    >
      {/* logo */}
      <Link href="/">
        <Image
          src="/images/logo-icon/Logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="p-1 border rounded-full"
        />
      </Link>

      <nav className="ml-20">
        <ul className="flex gap-10 items-center">
        <li className={`relative group ${isClient && pathname === '/' ? 'text-[#228EE5] border-b-2 border-[#228EE5]' : ' hover:text-[#228EE5] hover:border-b-2 hover:border-[#228EE5] transition-colors duration-300 ease-in-out'}`}>
            <Link href="/" className="relative">
            Trang chủ
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#228EE5] transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </li>
          <li className={`relative group ${isClient && pathname === '/pricing' ? 'text-[#228EE5] border-b-2 border-[#228EE5]' : ' hover:text-[#228EE5] hover:border-b-2 hover:border-[#228EE5] transition-colors duration-300 ease-in-out'}`}>
            <Link href="/pricing" className="relative">
              Thanh toán
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#228EE5] transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <Movie/>
          <Category/>
          <li className={`relative group ${isClient && pathname === '/colection' ? 'text-[#228EE5] border-b-2 border-[#228EE5]' : ' hover:text-[#228EE5] hover:border-b-2 hover:border-[#228EE5] transition-colors duration-300 ease-in-out'}`}>
            <Link href="/colection" className="relative">
              Bộ siêu tập
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#228EE5] transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
          <li className={`relative group ${isClient && pathname === '/hotline' ? 'text-[#228EE5] border-b-2 border-[#228EE5]' : ' hover:text-[#228EE5] hover:border-b-2 hover:border-[#228EE5] transition-colors duration-300 ease-in-out'}`}>
            <Link href="/hotline" className="relative">
               Đã Xem
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#228EE5] transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
        </ul>
      </nav>
      <nav className="ml-auto">
        <ul className="flex gap-10 items-center">
        <li className="relative">
          <div ref={searchRef} className="flex items-center">
            {/* Icon Search */}
            <Search
              className={`transition-all duration-300 ease-in-out cursor-pointer hover:text-[#228EE5] hover:scale-110`}
              onClick={handleClick}
            />
            {/* Input */}
            <input
              ref={inputRef} 
              type="text"
              placeholder="Tìm Kiếm Phim ..."
              className={`absolute right-[-10px] py-2 pl-8 pr-4 h-10 border text-xs bg-transparent border-[#228EE5] rounded-full bg-white focus:outline-none transition-all duration-300 ease-in-out
                ${isOpen ? 'w-[250px] opacity-100 visible' : 'w-0 opacity-0 invisible'}
                ml-4`}
              onBlur={handleBlur}
              style={{
                background : "none"
              }}
            />
          </div>
        </li>
        <li className="relative group hover:text-[#228EE5] transition-all duration-300 ease-in-out">
          <DropdownMenu>
            <DropdownMenuTrigger> 
              <Bell className="relative mt-[6px]" />
                {/* Dấu thông báo màu đỏ */}
                <span className="absolute top-1 right-0 w-3 h-3 bg-red-500 text-white text-[8px] rounded-full flex items-center justify-center">
                1
                </span>
            </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-transparent w-60" style={{
                marginTop: "10px",
                backdropFilter: "blur(70px)", 
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
                border : "none"
              }}>
                <DropdownMenuLabel>Thông báo</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Nội dung thông báo 1</DropdownMenuItem>
                <DropdownMenuItem>Nội dung thông báo 2</DropdownMenuItem>
                <DropdownMenuItem>Nội dung thông báo 3</DropdownMenuItem>
                <DropdownMenuItem>Nội dung thông báo 4</DropdownMenuItem>
                <DropdownMenuItem>Nội dung thông báo 5</DropdownMenuItem>
              </DropdownMenuContent>
          </DropdownMenu>
          </li>
        <li className="relative group hover:text-[#228EE5] transition-all duration-300 ease-in-out">
          <DropdownMenu>
            <DropdownMenuTrigger> 
            <Heart className="relative mt-[6px]"/>
                <span className="absolute top-1 right-[-5] w-3 h-3 bg-red-500 text-white text-[8px] rounded-full flex items-center justify-center">
                  1
                </span>
            </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-transparent w-60" style={{
                marginTop: "10px",
                backdropFilter: "blur(70px)", 
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
                border : "none"
              }}>
                <DropdownMenuLabel>Danh sách Phim Yêu thích</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Nội dung Yêu thích 1</DropdownMenuItem>
                <DropdownMenuItem>Nội dung Yêu thích 2</DropdownMenuItem>
                <DropdownMenuItem>Nội dung Yêu thích 3</DropdownMenuItem>
                <DropdownMenuItem>Nội dung Yêu thích 4</DropdownMenuItem>
                <DropdownMenuItem>Nội dung Yêu thích 5</DropdownMenuItem>
              </DropdownMenuContent>
          </DropdownMenu>
          </li>
          <li className="relative group mt-[6px] hover:text-[#228EE5] transition-all duration-300 ease-in-out">
          <DropdownMenu>
            <DropdownMenuTrigger><UserRound /></DropdownMenuTrigger>
            <DropdownMenuContent className="bg-transparent" style={{
                marginTop: "10px",
                backdropFilter: "blur(70px)", 
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
                border : "none"
              }}>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
              
          </li>
          <li><ModeToggle />
          

          </li>
        </ul>
      </nav>
    </header>
  );
}
