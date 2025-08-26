"use client";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
// import { Calendar as CalendarIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import {
  Plane,
  Hotel,
  Car,
  Bus,
  MapPin,
  Calendar as CalendarIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PackagesPage() {
  const [selected, setSelected] = useState(new Date());
  const [open, setOpen] = useState(false); // ✅ state for calendar visibility
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  //      const [fromCity, setFromCity] = useState("New Delhi");
  // const [toCity, setToCity] = useState("Mathura");
  // const [date, setDate] = useState("2025-08-24");
  // const [adults, setAdults] = useState(2);

  const indianCities = [
    "Delhi",
    "Mumbai",
    "Bengaluru",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Jaipur",
    "Ahmedabad",
    "Lucknow",
    "Chandigarh",
    "Goa",
    "Agra",
    "Varanasi",
    "Patna",
    "Bhopal",
    "Indore",
    "Nagpur",
    "Surat",
    "Amritsar",
  ];

  const packages = [
    {
      city: "Ladakh",
      routes:
        "Ladakh Tour Packages , Ladakh Tourism, Ladakh Honeymoon Packages",
      image: "/hotels/manali.jpg",
    },

    {
      city: "Kerala",
      routes:
        "Kerala Tour Packages , Kerala Tourism, Kerala Honeymoon Packages",
      image: "/flights/marine drive.jpeg",
    },
    {
      city: "Manali",
      routes:
        "Manali Tour Packages , Manali Tourism, Manali Honeymoon Packages",
      image: "/hotels/manali.jpg",
    },
    {
      city: "Goa",
      routes: "Goa Tour Packages , Goa Tourism, Goa Honeymoon Packages",
      image: "/flights/Goa.jpg",
    },
    {
      city: "Delhi ",
      routes: "Delhi Tour Packages , Delhi Tourism, Delhi Honeymoon Packages",
      image: "/flights/delhi.jpg",
    },
  ];

  return (
    <>
      <Header />
      <section
        className="relative  bg-center py-16"
        style={{ backgroundImage: "url('/img/bg/map.png')" }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-fill z-[-1]"
        >
          <source src="/images/video/pkg.MP4" type="video/MP4" />
          Your browser does not support the video tag.
        </video>
        {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-xl lg:text-7xl md:text-4xl sm:text-3xl font-bold captalize text-white mb-4">
              MAKE MY BHARAT YATRA
            </h1>
            <p className="text-xl text-white font-bold mb-8">
              Flights • Hotels • Holiday Packages • Buses • Cabs
            </p>
          </div>

          <Card>
            <CardContent>
              <Tabs defaultValue="packages" className="w-full">
                <TabsList className="flex justify-around w-full grid-cols-5  mb-6 bg- ">
                  {/* Flights */}
                  <Link href="/flight">
                    <TabsTrigger
                      value="flights"
                      className="flex items-center gap-2"
                    >
                      <Plane className="w-10 h-10" />
                    </TabsTrigger>
                  </Link>

                  {/* Hotels */}
                  <Link href="/hotel">
                    <TabsTrigger
                      value="hotels"
                      className="flex items-center gap-2"
                    >
                      <Hotel className="w-10 h-10" />
                    </TabsTrigger>
                  </Link>

                  {/* Packages */}
                  <Link href="/package">
                    <TabsTrigger
                      value="packages"
                      className="flex items-center gap-2"
                    >
                      <MapPin className="w-10 h-10" />
                    </TabsTrigger>
                  </Link>

                  {/* Bus */}
                  <Link href="/bus">
                    <TabsTrigger
                      value="bus"
                      className="flex items-center gap-2"
                    >
                      <Bus className="w-10 h-10" />
                    </TabsTrigger>
                  </Link>

                  {/* Cabs */}
                  <Link href="/cab">
                    <TabsTrigger
                      value="cabs"
                      className="flex items-center gap-2"
                    >
                      <Car className="w-10 h-10" />
                    </TabsTrigger>
                  </Link>
                </TabsList>

                <TabsContent value="packages">
                  <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-3">
                    {/* Trip Type Tabs */}
                    <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-black mb-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="tripType" />
                        Outstation One-Way
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="tripType" value="round" />
                        Honeymoon
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="tripType" value="airport" />
                        <span className="">Book@1</span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer relative">
                        <input
                          type="radio"
                          name="tripTypePackage"
                          value="multi"
                        />
                        Group Tour Packages
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer relative">
                        <input
                          type="radio"
                          name="tripTypePackage"
                          value="multi"
                        />
                        Domestic Sale Packages
                        <span className="absolute -top-3 -right-8 text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded-full">
                          NEW
                        </span>
                      </label>

                      <span className="ml-auto text-lg   font-bold ">
                        Holiday Packages Booking
                      </span>
                    </div>

                    {/* Booking Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-end">
                      {/* Pickup Location */}
                      <div>
                        <label className="text-xs uppercase font-medium text-slate-500">
                          From City
                        </label>
                        <select
                          value={from}
                          onChange={(e) => setFrom(e.target.value)}
                          className="w-full font-bold text-orange-500 text-sm border rounded-xl px-3 py-4 bg-white shadow-sm cursor-pointer"
                        >
                          <option value="">New Delhi</option>
                          <span>india</span>
                          {indianCities.map((city, index) => (
                            <option key={index} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Drop Location */}
                      <div>
                        <label className="text-xs uppercase font-medium text-slate-500">
                          To City/Category
                        </label>

                        <select
                          value={to}
                          onChange={(e) => setTo(e.target.value)}
                          className="w-full font-bold text-orange-500 text-sm border rounded-xl px-3 py-4 bg-white shadow-sm cursor-pointer"
                        >
                          <option
                            value=""
                            className=" flex items-center justify-center "
                          >
                            Mathura
                          </option>
                          {indianCities.map((city, index) => (
                            <option key={index} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Departure Date */}
                      <div className="relative">
                        <label className="text-xs uppercase font-medium text-slate-500">
                          Departure Date
                        </label>

                        {/* Date Display (click to toggle calendar) */}
                        <div
                          className="flex items-center  gap-2 w-full justify-center font-bold text-sm border rounded-xl px-3 p-4 bg-white shadow-sm w-fit cursor-pointer"
                          onClick={() => setOpen(!open)}
                        >
                          <CalendarIcon className="w-5 h-5 text-orange-500 " />
                          <span>
                            {selected
                              ? selected.toLocaleDateString("en-GB", {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                })
                              : "Pick a date"}
                          </span>
                          {/* Show weekday */}
                          {selected && (
                            <p className="text-xs text-orange-500 ">
                              {selected.toLocaleDateString("en-US", {
                                weekday: "long",
                              })}
                            </p>
                          )}
                        </div>

                        {/* Calendar Dropdown */}
                        {open && (
                          <div className="absolute mt-2 p-2 bg-white shadow-lg rounded-xl z-10">
                            <DayPicker
                              mode="single"
                              selected={selected}
                              onSelect={(date) => {
                                setSelected(date);
                                setOpen(false); // ✅ close after selecting date
                              }}
                            />
                          </div>
                        )}
                      </div>

                      {/* Rooms */}
                      <div>
                        <label className="text-xs uppercase font-medium text-slate-500">
                          Rooms & Guests
                        </label>

                        <select
                          name=""
                          id=""
                          className="w-full font-bold text-orange-500 text-sm border rounded-xl px-3 py-4 bg-white shadow-sm cursor-pointer"
                        >
                          <option value="">Select Rooms</option>
                          <option value="">2 Adult 1 Room</option>
                          <option value="">2 Adult 2 Room</option>
                          <option value="">3 Adult 1 Room</option>
                          <option value="">3 Adult 2 Room</option>
                          <option value="">4 Adult 1 Room</option>
                          <option value="">4 Adult 2 Room</option>
                          <option value="">5 Adult 1 Room</option>
                          <option value="">5 Adult 2 Room</option>
                        </select>
                      </div>

                      {/* Search Button */}
                      <div className="col-span-full flex justify-center mt-6">
                        <Button className="w-full sm:w-auto px-8 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors duration-300">
                          SEARCH PACKAGES
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto  rounded-2xl shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.city} className="flex items-center space-x-4">
                {/* Circular Image */}
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.city}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* City + Routes */}
                <div>
                  <h3 className="font-semibold text-lg">{pkg.city}</h3>
                  <p className="text-sm text-slate-900">{pkg.routes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
