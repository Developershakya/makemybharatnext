"use client";
// import { useState } from "react";
import  Link  from "next/link";
import {
  Plane,
  Hotel,
  Car,
  Bus,
  MapPin,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function PackagesPage() {
 
  const packages = [
  {
    city: "Ladakh",
    routes: "Ladakh Tour Packages , Ladakh Tourism, Ladakh Honeymoon Packages",
    image: "/hotels/manali.jpg",
  },

  {
    city: "Kerala",
    routes: "Kerala Tour Packages , Kerala Tourism, Kerala Honeymoon Packages",
    image: "/flights/marine drive.jpeg",
  },
   {
      city: "Manali",
      routes: "Manali Tour Packages , Manali Tourism, Manali Honeymoon Packages",
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

                <TabsTrigger value="hotels" className="flex items-center gap-2">
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

                <TabsTrigger value="bus" className="flex items-center gap-2">
                  <Bus className="w-10 h-10" />
                </TabsTrigger>
                </Link>


                  {/* Cabs */}
                <Link href="/cab">

                <TabsTrigger value="cabs" className="flex items-center gap-2">
                  <Car className="w-10 h-10" />
                </TabsTrigger>
                </Link>


              </TabsList>
    

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

              </Tabs>
              </CardContent>
           </Card>
           </div> 
      </section>

<section className="py-10 px-4">
      <div className="max-w-7xl mx-auto  rounded-2xl shadow-md p-6" >
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
