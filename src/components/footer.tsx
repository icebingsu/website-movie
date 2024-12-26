import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <div>
          <div className="px-36 border-t-2 mt-32">
                    <h2 className="text-center font-bold text-xl font-[inter] mt-10 text-[#228EE5]">Xem phim hay cập nhập mới nhất chỉ có tại  <span className="text-lg font-bold">Movie4u</span> </h2>
                    <div className="flex gap-10  justify-between mt-10">
                        <div className="first:border-l-0 border-l border-gray-300 pl-10"> {/* Thêm pl-10 để tạo khoảng cách với border */}
                            {/* Nội dung 1 */}
                            <Link href="/" className="flex items-center gap-3">
                                <Image
                                    src="/images/logo-icon/Logo.png"
                                    alt="Logo"
                                    width={50}
                                    height={50}
                                    className="p-1 border rounded-full"
                                />
                                <span className="text-lg font-bold">Movie4u</span>
                            </Link>
                            <div className="flex gap-5 mt-3">
                                <Link href={`/`} className="">
                                    <Image src="/images/logo-icon/fb-normal.png" alt="Facebook-icon" width={30} height={30} className="p-1 border rounded-full"/>
                                </Link>
                                <Link href={`/`} className="">
                                    <Image src="/images/logo-icon/ins-normal.png" alt="instagram-icon" width={30} height={30} className="p-1 border rounded-full"/>
                                </Link>
                                <Link href={`/`} className="">
                                    <Image src="/images/logo-icon/tw-normal.png" alt="twitter-icon" width={30} height={30} className="p-1 border rounded-full"/>
                                </Link>
                            </div>
                        </div>
                        <div className=" border-gray-300 pl-10">
                            <h4 className="font-medium text-sm">Giới thiệu về chúng tôi</h4>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Phim lậu hay</p>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Phim lậu hót nhất</p>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Thông tin chính thống</p>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Thông tin chính thống</p>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Thông tin chính thống</p>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Thông tin chính thống</p>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Thông tin chính thống</p>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Thông tin chính thống</p>
                        </div>
                        <div className=" border-gray-300 pl-10">
                            <h4 className="font-medium text-sm">Giới thiệu về chúng tôi</h4>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Thông tin chính thống</p>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Thông tin chính thống</p>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Thông tin chính thống</p>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Thông tin chính thống</p>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Thông tin chính thống</p>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Thông tin chính thống</p>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Thông tin chính thống</p>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Thông tin chính thống</p>
                        </div>
                        <div className=" border-gray-300 pl-10">
                            <h4 className="font-medium text-sm">Giới thiệu về chúng tôi</h4>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Thông tin chính thống</p>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Thông tin chính thống</p>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Thông tin chính thống</p>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Thông tin chính thống</p>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Thông tin chính thống</p>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Thông tin chính thống</p>
                            <p className="font-extralight text-xs mt-2 hover:text-[#228EE5]">Thông tin chính thống</p>
                            <div className="flex gap-5 mt-3">
                                <Link href={`/`} className="">
                                    <Image src="/images/logo-icon/fb-normal.png" alt="Facebook-icon" width={30} height={30} className="p-1 border rounded-full"/>
                                </Link>
                                <Link href={`/`} className="">
                                    <Image src="/images/logo-icon/ins-normal.png" alt="instagram-icon" width={30} height={30} className="p-1 border rounded-full"/>
                                </Link>
                                <Link href={`/`} className="">
                                    <Image src="/images/logo-icon/tw-normal.png" alt="twitter-icon" width={30} height={30} className="p-1 border rounded-full"/>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
        </div>      
        <p className="px-36 border-t-2 text-xs mt-10 pt-5 text-center">
            Copyright © 2024 Movie4U. chuyên cung cấp nội dung Xem phim trực tuyến chất lượng HD, Full HD. ngoài ra còn cung cấp danh sách đọc truyện giải trí riview phim và 1 số thư mục khác ...
        </p>
        </div>
      

      
    )
}