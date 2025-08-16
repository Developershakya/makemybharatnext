"use client";
import { useState } from "react";
import Image from "@/components/ui/image";
import  Link  from "next/link";
import {
  Plane,
  Hotel,
  Car,
  Bus,
  MapPin,
  Calendar,
  ArrowLeftRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FlightsPage() {

  const [tripType, setTripType] = useState("roundtrip");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [travelClass, setTravelClass] = useState("");

  const displayValue = `${adults} Adult${adults > 1 ? "s" : ""}${
    children > 0 ? `, ${children} Child${children > 1 ? "ren" : ""}` : ""
  }${infants > 0 ? `, ${infants} Infant${infants > 1 ? "s" : ""}` : ""}`;

  const airlines = [
  {
    name: "International",
    logo: "/flights/inter-flight.jpeg", // <-- apni image path use karo (public/airline/airasia.jpg)
  },
  {
    name: "Domestic",
    logo: "/flights/domestic.jpg", // <-- apni image path use karo (public/airline/cathay.jpg)
  },
];

const flights = [
  {
    city: "Chennai Flights",
    routes: "Via - Delhi, Mumbai, Coimbatore, Madurai",
    image: "/flights/Coimbatore.png",
  },
  {
    city: "Goa Flights",
    routes: "Via - Delhi, Mumbai, Bangalore, Ahmedabad",
    image: "/flights/Goa.jpg",
  },
  {
    city: "Mumbai Flights",
    routes: "Via - Delhi, Bangalore, Chennai, Ahmedabad",
    image: "/flights/marine drive.jpeg",
  },
  {
    city: "Hyderabad Flights",
    routes: "Via - Chennai, Mumbai, Bangalore, Delhi",
    image: "/flights/hyderabad.jpeg",
  },
  {
    city: "Delhi Flights",
    routes: "Via - Mumbai, Pune, Bangalore, Chennai",
    image: "/flights/delhi.jpg",
  },
  {
    city: "Pune Flights",
    routes: "Via - Delhi, Bangalore, Chennai, Ahmedabad",
    image: "/flights/pune.jpeg",
  },
  {
    city: "Kolkata Flights",
    routes: "Via - Delhi, Mumbai, Bangalore, Pune",
    image: "/flights/kolkata.jpeg",
  },
  {
    city: "Bangalore Flights",
    routes: "Via - Delhi, Pune, Mumbai, Kolkata",
    image: "/flights/bangalore.jpeg",
  },
  {
    city: "Jaipur Flights",
    routes: "Via - Mumbai, Delhi, Pune, Bangalore",
    image: "/flights/jaipur.png",
  },
];

    return (
    <>
      <Header />
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
        className="absolute inset-0 w-full h-full object-cover"
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
                <div className="space-y-6">
                  {/* Trip Type */}
                  <div className="flex items-center gap-5 mb-6 text-white">
                    <Label className="flex items-center gap-2 ">
                      <input
                        type="radio"
                        name="tripType"
                        value="oneway"
                        checked={tripType === "oneway"}
                        onChange={(e) => setTripType(e.target.value)}
                        className="text-orange-500"
                      />
                      One Way
                    </Label>
                    <Label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="tripType"
                        value="roundtrip"
                        checked={tripType === "roundtrip"}
                        onChange={(e) => setTripType(e.target.value)}
                        className="text-orange-500"
                      />
                      Round Trip
                    </Label>
              
                  </div>

                  {/* Flight Search Form */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
                    <div className="space-y-2   bg-orange-500  rounded-md">
                      <Label htmlFor="from">From</Label>
                      <div className="relative ">
                        <Input
                          id="from"
                          placeholder="Delhi"
                          className="pl-10"
                        />
                        <Plane className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                      </div>
                    </div>

                    <div className="space-y-2 bg-orange-500  rounded-md">
                      <Label htmlFor="to">To</Label>
                      <div className="relative">
                        <Input id="to" placeholder="Mumbai" className="pl-10" />
                        <ArrowLeftRight className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                      </div>
                    </div>

                    <div className="space-y-2 bg-orange-500  rounded-md">
                      <Label htmlFor="departure">Departure</Label>
                      <div className="relative">
                        <Input id="departure" type="date" className="pl-10 text-orange-400 justify-center" />
                        <Calendar className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                      </div>
                    </div>

                    {tripType === "roundtrip" && (
                      <div className="space-y-2 bg-orange-500  rounded-md">
                        <Label htmlFor="return">Return</Label>
                        <div className="relative">
                          <Input id="return" type="date" className="pl-10 text-orange-400 justify-center" />
                          <Calendar className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                        </div>
                      </div>
                    )}

                    <div className="space-y-2 bg-orange-500  rounded-md">
                      <Label htmlFor="travelers">Travelers</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <button className="w-full h-15 justify-start bg-white border border-gray-300 rounded-md px-3 py-2 text-2xl uppercase font-black text-orange-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-50">
                            {displayValue || "Select Travelers"}
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-64 space-y-3">
                          <div>
                            <Label htmlFor="adultCount">Adults</Label>
                            <Input
                              type="number"
                              id="adultCount"
                              min={1}
                              max={9}
                              value={adults}
                              onChange={(e) =>
                                setAdults(Number(e.target.value))
                              }
                            />
                          </div>
                          <div>
                            <Label htmlFor="childCount">Children</Label>
                            <Input
                              type="number"
                              id="childCount"
                              min={0}
                              max={9}
                              value={children}
                              onChange={(e) =>
                                setChildren(Number(e.target.value))
                              }
                            />
                          </div>
                          <div>
                            <Label htmlFor="infantCount">Infants</Label>
                            <Input
                              type="number"
                              id="infantCount"
                              min={0}
                              max={9}
                              value={infants}
                              onChange={(e) =>
                                setInfants(Number(e.target.value))
                              }
                            />
                          </div>

                          {/* Travel Class Selection */}
                          <div>
                            <Label htmlFor="travelClass">Travel Class</Label>
                            <select
                              id="travelClass"
                              value={travelClass}
                              onChange={(e) => setTravelClass(e.target.value)}
                              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
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
                  </div>

                  <div className=" flex justify-center  items-center">
                    <Button className="w-full justify-center md:w-auto bg-orange-500 hover:bg-orange-600 font-bold ">
                      Search Flights
                    </Button>
                  </div>
                </div>
              </TabsContent>

                
              </Tabs>
              </CardContent>
           </Card>
           </div> 
      </section>

        <section className="py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Experience Flying with our Airline Partners
        </h2>

        {/* Airline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {airlines.map((airline) => (
            <div
              key={airline.name}
              className="relative rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <Image
                src={airline.logo}
                alt={airline.name}
                width={600}
                height={300}
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-white text-xl font-semibold">
                  {airline.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

     <section className="py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flights.map((flight) => (
            <div key={flight.city} className="flex items-center space-x-4">
              {/* Circular Image */}
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src={flight.image}
                  alt={flight.city}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* City + Routes */}
              <div>
                <h3 className="font-semibold text-lg">{flight.city}</h3>
                <p className="text-sm text-slate-900">{flight.routes}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      <Footer />
      </>
        )
}
