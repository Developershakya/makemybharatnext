"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Plane,
  Hotel,
  Car,
  Bus,
  MapPin,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function HeroSection() {
  const [tripType, setTripType] = useState("oneway");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [travelClass, setTravelClass] = useState("");

  const displayValue = `${adults} Adult${adults > 1 ? "s" : ""}${
    children > 0 ? `, ${children} Child${children > 1 ? "ren" : ""}` : ""
  }${infants > 0 ? `, ${infants} Infant${infants > 1 ? "s" : ""}` : ""}`;


  // cab
  const [selected, setSelected] = useState(new Date());
  const [open, setOpen] = useState(false); // ✅ state for calendar visibility
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [pickupTime, setPickupTime] = useState("10:00");
  // const [timezone, setTimezone] = useState("Asia/Kolkata");

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

  return (
    <section
      className="relative  bg-center py-16"
      style={{ backgroundImage: "url('/images/video/v1.mp4')" }}
    > 
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover "
      >
        <source src="/images/video/v2.mp4" type="video/mp4" />
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
            <Tabs defaultValue="flights" className="w-full">
              <TabsList className="grid w-full grid-cols-5  mb-6 bg- ">
                
                  {/* Flights */}
                <TabsTrigger
                  value="flights"
                  className="flex items-center gap-2"
                >
                <Link href="/flight">
                  <Plane className="w-10 h-10" />
                </Link>
                </TabsTrigger>
                
                 {/* Hotels */}
                <TabsTrigger value="hotels" className="flex items-center gap-2">
                <Link href="/hotel">
                  <Hotel className="w-10 h-10" />
                </Link>
                </TabsTrigger>

                  {/* Packages */}
                <TabsTrigger
                  value="packages"
                  className="flex items-center gap-2"
                >
                <Link href="/package">
                  <MapPin className="w-10 h-10" />
                </Link>
                </TabsTrigger>
                
                  {/* Bus */}
                <TabsTrigger value="bus" className="flex items-center gap-2">
                <Link href="/bus">
                  <Bus className="w-10 h-10" />
                </Link>
                </TabsTrigger>

                  {/* Cabs */}
                <TabsTrigger value="cabs" className="flex items-center gap-2">
                <Link href="/cab">
                  <Car className="w-10 h-10" />
                </Link>
                </TabsTrigger>

              </TabsList>

               <TabsContent value="flights">
                  <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-3">
                    {/* Trip Type Tabs */}
                    <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-black mb-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="tripType"
                          value="oneway"
                          checked={tripType === "oneway"}
                          onChange={(e) => setTripType(e.target.value)}
                          className="text-orange-500"
                        />
                        One Way
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="tripType"
                          value="roundtrip"
                          checked={tripType === "roundtrip"}
                          onChange={(e) => setTripType(e.target.value)}
                          className="text-orange-500"
                        />
                        Round Trip
                      </label>

                      <span className="ml-auto text-lg text-black font-bold ">
                        Flights Booking
                      </span>
                    </div>

                    {/* Booking Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                      {/* Pickup Location */}
                      <div>
                        <label className="text-xs uppercase font-medium text-slate-500">
                          From
                        </label>
                        <select
                          value={from}
                          onChange={(e) => setFrom(e.target.value)}
                          className="w-full font-bold text-orange-500 text-sm border rounded-xl px-3 py-4 bg-white shadow-sm cursor-pointer"
                        >
                          <option value="">Delhi</option>
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
                          To
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
                            Mumbai
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

                      {/* Return Date */}
                      {tripType === "roundtrip" && (
                        <div className="relative">
                          <label
                            htmlFor="return"
                            className="text-xs uppercase font-medium text-slate-500"
                          >
                            Return Date
                          </label>
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
                      )}
                      {/* Travelers */}

                      <div className="">
                        <label
                          htmlFor="travelers"
                          className="text-xs uppercase font-medium text-slate-500"
                        >
                          Travelers
                        </label>

                        <Popover>
                          <PopoverTrigger asChild>
                            <button className="w-full justify-start bg-white border border-gray-300 rounded-md px-3 py-3 text-lg font-semibold  shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400">
                              {displayValue || "Select Travelers"}
                            </button>
                          </PopoverTrigger>

                          <PopoverContent className="w-72 space-y-4 p-4">
                            {/* Adults */}
                            <div className="flex items-center justify-between">
                              <label htmlFor="adultCount">Adults</label>
                              <input
                                type="number"
                                id="adultCount"
                                min={1}
                                max={9}
                                value={adults}
                                onChange={(e) =>
                                  setAdults(Number(e.target.value))
                                }
                                className="w-20 w-20 border border-gray-300 rounded-md px-3 py-2  text-center  text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                              />
                            </div>

                            {/* Children */}
                            <div className="flex items-center justify-between">
                              <label htmlFor="childCount">Children</label>
                              <input
                                type="number"
                                id="childCount"
                                min={0}
                                max={9}
                                value={children}
                                onChange={(e) =>
                                  setChildren(Number(e.target.value))
                                }
                                className="w-20 border border-gray-300 rounded-md px-3 py-2  text-center  text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                              />
                            </div>

                            {/* Infants */}
                            <div className="flex items-center justify-between">
                              <label htmlFor="infantCount">Infants</label>
                              <input
                                type="number"
                                id="infantCount"
                                min={0}
                                max={9}
                                value={infants}
                                onChange={(e) =>
                                  setInfants(Number(e.target.value))
                                }
                                className="w-20 border border-gray-300 rounded-md px-3 py-2  text-center  text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                              />
                            </div>

                            {/* Travel Class */}
                            <div>
                              <label htmlFor="travelClass">Travel Class</label>
                              <select
                                id="travelClass"
                                value={travelClass}
                                onChange={(e) => setTravelClass(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                              >
                                <option value="">Choose Travel Class</option>
                                <option value="Economy">Economy</option>
                                <option value="Premium Economy">
                                  Premium Economy
                                </option>
                                <option value="Business">Business</option>
                                <option value="First Class">First Class</option>
                              </select>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>

                      {/* Search Button */}
                      <div className="flex justify-center mt-6">
                        <Button className="w-full md:w-auto px-6 py-3 rounded-sm bg-gray-400 hover:bg-gray-500 text-white font-semibold transition-colors duration-300">
                          SEARCH FLIGHTS
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>

               <TabsContent value="hotels">
                   <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-3">
                                        {/* Trip Type Tabs */}
                        <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-black mb-6">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="tripType"
                            />
                            Upto 4 Rooms
                          </label>
                  
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="tripType"
                              value="round"
                            />
                            Group Deals
                             <span className="absolute -top-3 -right-8 text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded-full">
                              NEW
                            </span>
                          </label>
                  
                  
                          <span className="ml-auto text-lg  font-bold ">
                            Hotels Booking
                          </span>
                        </div>
                        
                              {/* Booking Grid */}
                              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-center">
                                {/* Pickup Location */}
                              <div>
                                <label className="text-xs uppercase font-medium text-slate-500">
                                 City, Country or Category
                                </label>
                                <select
                                  value={from}
                                  onChange={(e) => setFrom(e.target.value)}
                                  className="w-full font-bold text-orange-500 text-sm border rounded-xl px-3 py-4 bg-white shadow-sm cursor-pointer"
                                >
                        
                                  <option value="">Goa</option>
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
                                  To City/Country/Category
                                </label>
                                
                                <select
                                  value={to}
                                  onChange={(e) => setTo(e.target.value)}
                                  className="w-full font-bold text-orange-500 text-sm border rounded-xl px-3 py-4 bg-white shadow-sm cursor-pointer"
                                >
                                  <option value="" className=" flex items-center justify-center ">Mathura</option>
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
                                Check-In Date
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
                                  {selected.toLocaleDateString("en-US", { weekday: "long" })}
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

                            <div className="relative">
                            
                              <label className="text-xs uppercase font-medium text-slate-500">
                                Check-Out Date
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
                                  {selected.toLocaleDateString("en-US", { weekday: "long" })}
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
                  
                                <select name="" id="" className="w-full font-bold text-orange-500 text-sm border rounded-xl px-3 py-4 bg-white shadow-sm cursor-pointer">
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
                        <div className="flex justify-center  mt-6">
                                  <Button className="w-full md:w-auto px-6 py-3 rounded-sm bg-gray-400 hover:bg-gray-500 text-white font-semibold transition-colors duration-300">
                                    SEARCH PACKAGES
                                  </Button>
                                </div>
                               
                              </div>
                                
                            </div>
                </TabsContent>

               <TabsContent value="packages">
        <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-3">
                      {/* Trip Type Tabs */}
      <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-black mb-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="tripType"
          />
          Outstation One-Way
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="tripType"
            value="round"
          />
          Honeymoon
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="tripType"
            value="airport"
          />
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
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
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
                To City/Country/Category
              </label>
              
              <select
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full font-bold text-orange-500 text-sm border rounded-xl px-3 py-4 bg-white shadow-sm cursor-pointer"
              >
                <option value="" className=" flex items-center justify-center ">Mathura</option>
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
                {selected.toLocaleDateString("en-US", { weekday: "long" })}
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
                Rooms& Guests
              </label>

              <select name="" id="" className="w-full font-bold text-orange-500 text-sm border rounded-xl px-3 py-4 bg-white shadow-sm cursor-pointer">
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
      <div className="flex justify-center  mt-6">
                <Button className="w-full md:w-auto px-6 py-3 rounded-sm bg-gray-400 hover:bg-gray-500 text-white font-semibold transition-colors duration-300">
                  SEARCH PACKAGES
                </Button>
              </div>
             
            </div>
              
          </div>
              
              </TabsContent>

             <TabsContent value="bus">
            <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-3">
                <div className="text-lg ml-auto   text-black font-bold ">
          Online Bus Booking
        </div>

      {/* Booking Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
        {/* Pickup Location */}
      <div>
        <label className="text-xs uppercase font-medium text-slate-500">
          From
        </label>
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="w-full font-bold text-orange-500 text-sm border rounded-xl px-3 py-4 bg-white shadow-sm cursor-pointer"
        >

          <option value="">Select Pickup Location</option>
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
          To
        </label>
        
        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="w-full font-bold text-orange-500 text-sm border rounded-xl px-3 py-4 bg-white shadow-sm cursor-pointer"
        >
          <option value="" className=" flex items-center justify-center ">Select Drop Location</option>
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
        Departure 
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
          {selected.toLocaleDateString("en-US", { weekday: "long" })}
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

        {/* Pickup Time */}
       
       {/* Search Button */}
<div className="flex justify-center  mt-6">
          <Button className="w-full md:w-auto px-6 py-3 rounded-sm bg-gray-400 hover:bg-gray-500 text-white font-semibold transition-colors duration-300">
            SEARCH BUSES
          </Button>
        </div>
       
      </div>
        
    </div>
                
              </TabsContent>

              <TabsContent value="cabs">
                  <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-3">
                    {/* Trip Type Tabs */}
                    <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-black mb-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="tripType"
                          value="oneway"
                          checked={tripType === "oneway"}
                          onChange={(e) => setTripType(e.target.value)}
                        />
                        Outstation One-Way
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="tripType"
                          value="round"
                          checked={tripType === "round"}
                          onChange={(e) => setTripType(e.target.value)}
                        />
                        Outstation Round-Trip
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="tripType"
                          value="airport"
                          checked={tripType === "airport"}
                          onChange={(e) => setTripType(e.target.value)}
                        />
                        <span className="">Airport Transfers</span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer relative">
                        <input
                          type="radio"
                          name="tripType"
                          value="hourly"
                          checked={tripType === "hourly"}
                          onChange={(e) => setTripType(e.target.value)}
                        />
                        Hourly Rentals
                        <span className="absolute -top-3 -right-8 text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded-full">
                          NEW
                        </span>
                      </label>

                      <span className="ml-auto text-lg  text-black font-bold ">
                        Online Cab Booking
                      </span>
                    </div>

                    {/* Booking Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                      {/* Pickup Location */}
                      <div>
                        <label className="text-xs uppercase font-medium text-slate-500">
                          From
                        </label>
                        <select
                          value={from}
                          onChange={(e) => setFrom(e.target.value)}
                          className="w-full font-bold text-orange-500 text-sm border rounded-xl px-3 py-4 bg-white shadow-sm cursor-pointer"
                        >
                          <option value="">Select Pickup Location</option>
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
                          To
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
                            Select Drop Location
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
                          Departure
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

                      {/* Pickup Time */}
                      <div className="w-full max-w-md mx-auto space-y-2">
                        {/* Label */}
                        <label className="text-xs uppercase font-medium text-slate-500">
                          Pickup Time
                        </label>

                        {/* Time + Timezone Selector */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 font-bold p-2 border rounded-xl shadow-sm text-base sm:text-lg bg-white">
                          <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />

                          {/* Time Input */}
                          <input
                            type="time"
                            value={pickupTime}
                            onChange={(e) => setPickupTime(e.target.value)}
                            className="w-full sm:w-auto  px-3 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          />

                          {/* Timezone Selector */}
                          {/* <select
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          className="w-full sm:w-auto border rounded-lg px-3 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="Asia/Kolkata">India (IST)</option>
          <option value="America/New_York">New York (EST)</option>
          <option value="Europe/London">London (GMT)</option>
          <option value="Asia/Dubai">Dubai (GST)</option>
        </select> */}
                        </div>

                        {/* Info Text */}
                        {/* <p className="text-sm text-gray-500 text-center sm:text-left md:">
        Pickup time is{" "}
        <span className="font-semibold">{pickupTime}</span> as per{" "}
        <span className="font-semibold">{timezone}</span> timezone
      </p> */}
                      </div>
                      {/* Search Button */}
                      <div className="flex justify-center  mt-6">
                        <Button className="w-full md:w-auto px-6 py-3 rounded-sm bg-gray-400 hover:bg-gray-500 text-white font-semibold transition-colors duration-300">
                          SEARCH CABS
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
  );
}