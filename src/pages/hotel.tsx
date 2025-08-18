"use client";
import { useState } from "react";
import  Link  from "next/link";
import {
  Plane,
  Hotel,
  Car,
  Bus,
  MapPin,
  Calendar,
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
import Header from "@/components/Header";
import Footer from "@/components/Footer";




export default function HotelsPage() {
  
  // const [tripType, setTripType] = useState("roundtrip");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [travelClass, setTravelClass] = useState("");

  const displayValue = `${adults} Adult${adults > 1 ? "s" : ""}${
    children > 0 ? `, ${children} Child${children > 1 ? "ren" : ""}` : ""
  }${infants > 0 ? `, ${infants} Infant${infants > 1 ? "s" : ""}` : ""}`;
 

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
        <source src="/images/video/hotel.mp4" type="video/mp4" />
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
            <Tabs defaultValue="hotels" className="w-full">
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

              </Tabs>
              </CardContent>
           </Card>
           </div> 
      </section>

      <Footer />
      </>
  );
}
