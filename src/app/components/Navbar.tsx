import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="w-full bg-white h-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-8 border-b-2 border-b-[#e7eef6]">
    {/* Logo and Input Section */}
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-16">
      <h1 className="text-[#3563e9] text-4xl font-bold">MORENT</h1>
      <div className="relative w-full md:w-auto">
        <Image 
          src="/search-normal.png" 
          alt="Search Icon" 
          width={24} 
          height={24} 
          className="absolute top-1/2 left-3 -translate-y-1/2" 
        />
        <input
          type="text"
          title="search"
          placeholder="Say something here"
          className="border-2 border-[#e7eef6] w-full md:w-[492px] h-[44px] rounded-full pl-10 pr-12"
        />
        <Image 
          src="/filter.png" 
          alt="Filter Icon" 
          width={24} 
          height={24} 
          className="absolute top-1/2 right-3 -translate-y-1/2" 
        />
      </div>
    </div>
  
    {/* Profile & Notification Section */}
    <div className="mt-4 md:mt-0">
      <Image 
        src="/Profil & Notification.png" 
        alt="Profile and Notification" 
        width={236} 
        height={44} 
      />
    </div>
  </div>
  
  );
}
