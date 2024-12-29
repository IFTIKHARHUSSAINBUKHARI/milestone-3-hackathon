import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full flex flex-col md:flex-row">
    {/* Sidebar Navigation */}
    <Image
      src="/Nav Bar.png"
      alt="Nav Bar"
      width={360}
      height={1600}
      className="hidden md:block w-[25%] lg:w-[20%]"
    />
  
    {/* Main Content for Larger Screens */}
    <div className="hidden md:flex w-full md:w-[75%] lg:w-[80%] bg-[#f6f7f9] p-4 sm:p-6 gap-7 justify-center">
      {Array(2).fill(
        <Image
          src="/Details Rental.png"
          alt="Details Rental"
          width={534}
          height={836}
          className="w-full md:w-[45%] lg:w-[534px]"
        />
      )}
    </div>
  
    {/* Content for Small Screens */}
    <div className="md:hidden bg-[#f6f7f9] p-4 sm:p-6 flex flex-col gap-6">
      {[
        { src: "/Detail Rental.png", alt: "Detail Rental", height: 1272 },
        { src: "/Top 5.png", alt: "Top 5", height: 508 },
        { src: "/Recent Transaction.png", alt: "Recent Transaction", height: 352 },
      ].map((item, idx) => (
        <Image
          key={idx}
          src={item.src}
          alt={item.alt}
          width={327}
          height={item.height}
          className="w-full"
        />
      ))}
    </div>
  </div>
  )}