import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="payment w-full bg-[#f6f7f9] p-4 sm:p-6 flex flex-wrap gap-6 justify-center">
    {/* Cards Section */}
    <div className="cards w-full md:w-[70%] grid grid-cols-1 gap-6">
      {/* Billing Info */}
      <Card className="w-full lg:w-[852px] flex flex-col">
        <CardHeader>
          <CardTitle>Billing Info</CardTitle>
          <CardDescription className="flex justify-between">
            <span>Please enter your billing info</span>
            <span>Step 1 of 4</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-3 w-full lg:w-[46%]">
              <label className="font-bold" htmlFor="name">Name</label>
              <Input placeholder="Your Name" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
            </div>
            <div className="flex flex-col gap-3 w-full lg:w-[50%]">
              <label className="font-bold" htmlFor="num">Phone Number</label>
              <Input placeholder="Your Phone Number" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-3 w-full lg:w-[46%]">
              <label className="font-bold" htmlFor="add">Address</label>
              <Input placeholder="Your Address" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
            </div>
            <div className="flex flex-col gap-3 w-full lg:w-[50%]">
              <label className="font-bold" htmlFor="city">Town/City</label>
              <Input placeholder="Your City" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
            </div>
          </div>
        </CardContent>
      </Card>
  
      {/* Rental Info */}
      <Card className="w-full lg:w-[852px] flex flex-col">
        <CardHeader>
          <CardTitle>Rental Info</CardTitle>
          <CardDescription className="flex justify-between">
            <span>Please select your rental date</span>
            <span>Step 2 of 4</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <Image src="/Pick - Up (1).png" alt="Pick Up" width={92} height={20} />
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-3 w-full lg:w-[46%]">
              <label className="font-bold" htmlFor="pick-location">Locations</label>
              <select className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                <option value="">Select Your City</option>
              </select>
            </div>
            <div className="flex flex-col gap-3 w-full lg:w-[50%]">
              <label className="font-bold" htmlFor="pick-date">Date</label>
              <select className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                <option value="">Select Your Date</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-3 w-full lg:w-[45%]">
              <label className="font-bold" htmlFor="pick-time">Time</label>
              <select className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                <option value="">Select Your Time</option>
              </select>
            </div>
          </div>
          <Image src="/Drop - Off (1).png" alt="Drop Off" width={104} height={20} />
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-3 w-full lg:w-[46%]">
              <label className="font-bold" htmlFor="drop-location">Locations</label>
              <select className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                <option value="">Select Your City</option>
              </select>
            </div>
            <div className="flex flex-col gap-3 w-full lg:w-[50%]">
              <label className="font-bold" htmlFor="drop-date">Date</label>
              <select className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                <option value="">Select Your Date</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-3 w-full lg:w-[45%]">
              <label className="font-bold" htmlFor="drop-time">Time</label>
              <select className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                <option value="">Select Your Time</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>
  
      {/* Payment Method */}
      <Card className="w-full lg:w-[852px] flex flex-col">
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription className="flex justify-between">
            <span>Please enter your payment method</span>
            <span>Step 3 of 4</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <Image src="/Credit Card.png" alt="Credit Card" width={804} height={308} />
          <Image src="/PayPal.png" alt="PayPal" width={804} height={56} />
          <Image src="/Bitcoin.png" alt="Bitcoin" width={804} height={56} />
        </CardContent>
      </Card>
  
      {/* Confirmation */}
      <Card className="w-full lg:w-[852px] flex flex-col">
        <CardHeader>
          <CardTitle>Confirmation</CardTitle>
          <CardDescription className="flex justify-between">
            <span>We are getting to the end. Just a few clicks and your rental is ready</span>
            <span>Step 4 of 4</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-8">
          <Image src="/Confirmation.png" alt="Confirmation" width={804} height={136} />
          <Link href="/admin">
            <button className="bg-[#3563e9] p-2 text-white rounded-xl w-[140px] h-[56px]">Rent Now</button>
          </Link>
          <Image src="/Safe Data.png" alt="Safe Data" width={548} height={100} />
        </CardContent>
      </Card>
    </div>
  
    {/* Rental Summary */}
    <div className="details w-full lg:w-[40%] flex justify-center">
      <Image src="/Rental Summary.png" alt="Rental Summary" width={492} height={568} />
    </div>
  </div>
  )}