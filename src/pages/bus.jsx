// "use client";

// import Link from "next/link";
// import { useSearchParams } from "next/navigation";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// export default function BusPage() {
//   const p = useSearchParams();
//   const from = p.get("from");
//   const to = p.get("to");
//   const date = p.get("date");
//   const ret = p.get("return");

//   return (
//     <div className="max-w-5xl mx-auto p-6 space-y-6">
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl font-bold text-orange-600">Bus Tickets</h1>
//         <Link href="/" className="text-sm underline">← Modify Search</Link>
//       </div>

//       <Card>
//         <CardHeader><CardTitle>Search Summary</CardTitle></CardHeader>
//         <CardContent >
//           <div><strong>From:</strong> {from}</div>
//           <div><strong>To:</strong> {to}</div>
//           <div><strong>Journey Date:</strong> {date}</div>
//           {ret && <div><strong>Return Date:</strong> {ret}</div>}
//         </CardContent>
//       </Card>

//       {/* TODO: Bus API */}
//       <Card>
//         <CardHeader><CardTitle>Available Buses</CardTitle></CardHeader>
//         <CardContent>
//           <p>Connect your API to list buses...</p>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }




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
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";




export default function BusPage() {
  
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
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/images/video/buss.MP4" type="video/MP4" />
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
            <Tabs defaultValue="bus" className="w-full">
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

              </Tabs>
              </CardContent>
           </Card>
           </div> 
      </section>
      <Footer />
      </>
  );
}
