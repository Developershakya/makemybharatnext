"use client";
import Link from "next/link";
import { Plane, Hotel, Car, Bus, MapPin, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function CabsPage() {
  const [tripType, setTripType] = useState("airport");
  const cabs = [
    {
      city: "Cabs From Chennai To",
      cabroutes: "Vellore, Pondicherry, Bangalore, Tirupati, Coimbatore",
      image: "/flights/Coimbatore.png",
    },
    {
      city: "Cabs From Mumbai To",
      cabroutes: "Pune, Nasik, Shirdi, Lonavala, Mahabaleshwar",
      image: "/flights/marine drive.jpeg",
    },
    {
      city: "Cabs From Chandigarh To",
      cabroutes: "New Delhi, Shimla, Manali, Dharamshala, Gurgaon, Noida",
      image: "/hotels/manali.jpg",
    },
    {
      city: "Cabs From Delhi To",
      cabroutes: "Agra, Jaipur, Dehradun, Haridwar, Chandigarh",
      image: "/flights/delhi.jpg",
    },
    {
      city: "Cabs From Pune To",
      cabroutes: "Mumbai, Shirdi, Mahabaleshwar, Nasik, Aurangabad",
      image: "/flights/pune.jpeg",
    },
    {
      city: "Cabs From Bangalore To",
      cabroutes: "Ooty, Madikeri, Coorg, Vellore, Mysore",
      image: "/flights/bangalore.jpeg",
    },
    {
      city: "Cabs From Ahmedabad To",
      cabroutes: "Mumbai, Rajkot, Surat, Pune, Indore",
      image: "/flights/ahmedabad.jpeg",
    },
  ];

  return (
    <>
      <Header />

      <section
        className="relative bg-center py-16"
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
          <source src="/images/video/cab.MP4" type="video/MP4" />
        </video>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              MAKE MY BHARAT YATRA
            </h1>
            <p className="text-lg text-white font-semibold">
              Flights • Hotels • Holiday Packages • Buses • Cabs
            </p>
          </div>

          {/* Booking Form UI */}
          <Card>
            <CardContent>
              <Tabs defaultValue="cabs" className="w-full ">
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

                <TabsContent value="cabs">
                  <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6">
      {/* Trip Type Tabs */}
      <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-700 mb-6">
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
          <span className="text-blue-600 font-semibold">Airport Transfers</span>
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
          <span className="absolute -top-3 -right-8 text-[10px] bg-pink-500 text-white px-2 py-0.5 rounded-full">
            NEW
          </span>
        </label>

        <span className="ml-auto text-sm text-gray-500 font-medium">
          Online Cab Booking
        </span>
      </div>

      {/* Booking Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        {/* Pickup Location */}
        <div>
          <label className="text-xs uppercase font-medium text-gray-600">
            From
          </label>
          <Input
            placeholder="Pick up Location"
            className="font-bold text-lg border-0 border-b border-gray-300 rounded-none focus:ring-0 px-0"
          />
        </div>

        {/* Drop Location */}
        <div>
          <label className="text-xs uppercase font-medium text-gray-600">
            To
          </label>
          <Input
            placeholder="Drop Location"
            className="font-bold text-lg border-0 border-b border-gray-300 rounded-none focus:ring-0 px-0"
          />
        </div>

        {/* Departure Date */}
        <div>
          <label className="text-xs uppercase font-medium text-gray-600">
            Departure
          </label>
          <div className="flex items-center gap-2 font-bold text-lg">
            <Calendar className="w-5 h-5 text-gray-500" />
            <span>22 Aug'25</span>
          </div>
          <p className="text-sm text-gray-400">Friday</p>
        </div>

        {/* Pickup Time */}
        <div>
          <label className="text-xs uppercase font-medium text-gray-600">
            Pickup Time
          </label>
          <div className="flex items-center gap-2 font-bold text-lg">
            <Clock className="w-5 h-5 text-gray-500" />
            <span>10:00 AM</span>
          </div>
          <p className="text-sm text-gray-400">
            pick up time as per journey city timezone
          </p>
        </div>

        {/* Search Button */}
        <div className="flex justify-center md:justify-end">
          <Button className="w-full md:w-auto px-8 py-6 rounded-full bg-gray-400 hover:bg-gray-500 text-white font-bold text-lg">
            SEARCH
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

      {/* Routes Section */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto rounded-2xl shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cabs.map((cab) => (
              <div key={cab.city} className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={cab.image}
                    alt={cab.city}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{cab.city}</h3>
                  <p className="text-sm text-slate-900">{cab.cabroutes}</p>
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
