import { ArrowRight, Play, Star, Volume2, VolumeOff } from 'lucide-react';
import React, { useState, useRef } from 'react';
export default function ProfileMovie(){
   const videoRef = useRef<HTMLVideoElement>(null); 
   const [isMuted, setIsMuted] = useState(true);
   const videoStyle: React.CSSProperties = {
     position: 'absolute',
     top: 0,
     left: 0,
     width: '100%',
     height: '100%',
     objectFit: 'cover',
     zIndex: -1, 
   };
 
   const overlayStyle: React.CSSProperties = {
     position: 'absolute',
     top: 0,
     left: 0,
     width: '100%',
     height: '100%',
     backgroundColor: 'rgba(0, 0, 0, 0.3)',
     zIndex: 1,
   };
 
   const contentStyle: React.CSSProperties = {
     position: 'absolute',
     top: '60%',
     left: '6%',
     width: '50%',
     color: '#fff',
     zIndex: 2,
     fontSize: '2rem',
   };
 
   const contentRight: React.CSSProperties = {
     position: 'absolute',
     top: '70%',
     right: '10%',
     color: '#fff',
     zIndex: 2,
     fontSize: '2rem',
   };
   const rating = 4;
   const toggleMute = () => {
     if (videoRef.current) {
       videoRef.current.muted = !videoRef.current.muted;
       setIsMuted(videoRef.current.muted); 
     }
   };
  return (
    <div>
       <video ref={videoRef} autoPlay loop muted={isMuted} style={videoStyle}>
          <source src="/video/testvideo.mp4" type="video/mp4" />
          <source src="/path/to/your/video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div style={overlayStyle}></div>
        <div style={contentStyle}>
          <h1 className="text-5xl font-bold">The Dark Knight Collection</h1>
          <p className="text-lg mt-3">
            When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.
          </p>
          <article className="flex items-center gap-3">
            <span className="flex text-sm mt-3">
              <Star color={rating >= 1 ? 'gold' : 'gray'} />
              <Star color={rating >= 2 ? 'gold' : 'gray'} />
              <Star color={rating >= 3 ? 'gold' : 'gray'} />
              <Star color={rating >= 4 ? 'gold' : 'gray'} />
              <Star color={rating >= 5 ? 'gold' : 'gray'} />
            </span>
            <span className="text-sm bg-[#b4ad25] p-1 rounded-xl text-black mt-4">IMDB: 9.0</span>
          </article>
          <div className="flex gap-3 mt-3">
          <button className="border px-3 py-2 rounded-full flex gap-3 items-center bg-[#228EE5] hover:bg-[#1A6CC2] hover:scale-105 transition-all duration-200 ease-in-out">
               <Play size={28} /> 
               <span className="text-base">Xem phim</span>
               </button>
               <button className="border border-[#228EE5] px-3 py-2 rounded-full flex gap-3 items-center hover:bg-[#228EE5] hover:text-white hover:scale-105 transition-all duration-200 ease-in-out">
               <span className="text-base">Thông tin phim</span>
               <ArrowRight />
            </button>
          </div>
        </div>
        <div
          className="flex justify-center items-center 
            p-1 transition-all duration-300 ease-in-out
            hover:border-4 hover:border-yellow-500 hover:rounded-full 
            hover:scale-10 hover:bg-gray-700"
          style={contentRight}
          onClick={toggleMute} 
        >
          {isMuted ? (
            <VolumeOff size={48} />
          ) : (
            <Volume2 size={48} />
          )}
        </div>
    </div>
  )
}
