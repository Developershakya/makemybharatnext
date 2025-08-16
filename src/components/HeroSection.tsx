"use client";
import { useState } from "react";
import Link from "next/link";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

export default function HeroSection() {
  const [tripType, setTripType] = useState("roundtrip");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [travelClass, setTravelClass] = useState("");

  const displayValue = `${adults} Adult${adults > 1 ? "s" : ""}${
    children > 0 ? `, ${children} Child${children > 1 ? "ren" : ""}` : ""
  }${infants > 0 ? `, ${infants} Infant${infants > 1 ? "s" : ""}` : ""}`;

  // export function TravelerSelector() {

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

              <TabsContent value="hotels">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
                    {/* City */}
                    <div className="space-y-2 bg-orange-500  rounded-md">
                      <Label htmlFor="city">City or Property</Label>
                      <div className="relative">
                        <Input id="city" placeholder="Goa" className="pl-10" />
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                      </div>
                    </div>

                    {/* Check-in */}
                    <div className="space-y-2 bg-orange-500  rounded-md">
                      <Label htmlFor="checkin">Check-in</Label>
                      <div className="relative">
                        <Input id="checkin" type="date" className="pl-10 text-orange-400 justify-center" />
                        <Calendar className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                      </div>
                    </div>

                    {/* Check-out */}
                    <div className="space-y-2 bg-orange-500  rounded-md">
                      <Label htmlFor="checkout">Check-out</Label>
                      <div className="relative">
                        <Input id="checkout" type="date" className="pl-10 text-orange-400 justify-center" />
                        <Calendar className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                      </div>
                    </div>

                    {/* Guests & Rooms */}
                    <div className="space-y-2 bg-orange-500  rounded-md">
                      <Label htmlFor="guests">Guests & Rooms</Label>
                      <Select
                        // onValueChange={(value) => setTravelDetails(value)}
                      >
                        <SelectTrigger className="w-full h-15 border border-gray-300 rounded-md px-3 py-2 text-2xl uppercase text-orange-400 justify-center font-black bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400">
                          <SelectValue placeholder="2 Adults, 1 Room" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1A-1R">1 Adult, 1 Room</SelectItem>
                          <SelectItem value="2A-1R">
                            2 Adults, 1 Room
                          </SelectItem>
                          <SelectItem value="4A-2R">
                            4 Adults, 2 Rooms
                          </SelectItem>
                          <SelectItem value="2A-1C-1R">
                            2 Adults, 1 Child, 1 Room
                          </SelectItem>
                          <SelectItem value="2A-2C-1R">
                            2 Adults, 2 Children, 1 Room
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Search Button */}
                  <div className="flex justify-center items-center">
                    <Button className="w-full justify-center md:w-auto bg-orange-500 hover:bg-orange-600 font-bold">
                      Search Hotels
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="packages">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
                    <div className="space-y-2 bg-orange-500  rounded-md">
                      <Label htmlFor="from-city">From</Label>
                      <div className="relative">
                        <Input
                          id="from-city"
                          placeholder="Delhi"
                          className="pl-10"
                        />
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                      </div>
                    </div>

                    <div className="space-y-2 bg-orange-500  rounded-md">
                      <Label htmlFor="to-destination">To</Label>
                      <div className="relative">
                        <Input
                          id="to-destination"
                          placeholder="Goa"
                          className="pl-10"
                        />
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                      </div>
                    </div>

                    <div className="space-y-2 bg-orange-500  rounded-md">
                      <Label htmlFor="travel-date">Travel Date</Label>
                      <div className="relative">
                        <Input id="travel-date" type="date" className="pl-10 text-orange-400 justify-center" />
                        <Calendar className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                      </div>
                    </div>
                  </div>

                  <div className=" flex justify-center  items-center">
                    <Button className="w-full justify-center md:w-auto bg-orange-500 hover:bg-orange-600 font-bold ">
                      Search Packages
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="bus">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
                    {/* From Location */}
                    <div className="space-y-2 bg-orange-500  rounded-md">
                      <Label htmlFor="from-location">From</Label>
                      <div className="relative">
                        <Input
                          id="from-location"
                          placeholder="Delhi"
                          className="pl-10"
                        />
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                      </div>
                    </div>

                    {/* To Location */}
                    <div className="space-y-2 bg-orange-500  rounded-md">
                      <Label htmlFor="to-location">To</Label>
                      <div className="relative">
                        <Input
                          id="to-location"
                          placeholder="Manali"
                          className="pl-10"
                        />
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                      </div>
                    </div>

                    {/* Journey Date */}
                    <div className="space-y-2 bg-orange-500  rounded-md">
                      <Label htmlFor="journey-date">Journey Date</Label>
                      <div className="relative">
                        <Input
                          id="journey-date"
                          type="date"
                          className="pl-10 text-orange-400 justify-center"
                        />
                        <Calendar className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                      </div>
                    </div>

                    {/* Return Date (Optional) */}
                    <div className="space-y-2  bg-orange-500  rounded-md">
                      <Label htmlFor="return-date">
                        Return Date (Optional)
                      </Label>
                      <div className="relative">
                        <Input id="return-date" type="date" className="pl-10 text-orange-400 justify-center" />
                        <Calendar className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                      </div>
                    </div>
                  </div>

                  <div className=" flex justify-center  items-center">
                    <Button className="w-full justify-center md:w-auto bg-orange-500 hover:bg-orange-600 font-bold ">
                      Search Buses
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="cabs">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
                    <div className="space-y-2 bg-orange-500  rounded-md">
                      <Label htmlFor="pickup">Pickup Location</Label>
                      <div className="relative">
                        <Input
                          id="pickup"
                          placeholder="Delhi Airport"
                          className="pl-10"
                        />
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                      </div>
                    </div>

                    <div className="space-y-2 bg-orange-500  rounded-md">
                      <Label htmlFor="drop">Drop Location</Label>
                      <div className="relative">
                        <Input
                          id="drop"
                          placeholder="Connaught Place"
                          className="pl-10"
                        />
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                      </div>
                    </div>

                    <div className="space-y-2 bg-orange-500  rounded-md">
                      <Label htmlFor="pickup-date">Pickup Date</Label>
                      <div className="relative">
                        <Input id="pickup-date" type="date" className="pl-10 text-orange-400 justify-center" />
                        <Calendar className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                      </div>
                    </div>

                    <div className="space-y-2 bg-orange-500  rounded-md">
                      <Label htmlFor="pickup-time">Pickup Time</Label>
                      <div className="relative">
                        <Input id="pickup-time" type="time" className="pl-10 text-orange-400 justify-center" />
                        <Calendar className="absolute left-3 top-3 w-4 h-4 text-orange-500" />
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-center  items-center">
                    <Button className="w-full justify-center md:w-auto bg-orange-500 hover:bg-orange-600 font-bold ">
                      Search Cabs
                    </Button>
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