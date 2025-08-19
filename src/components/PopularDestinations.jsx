"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const destinations = [
  {
    name: "Goa",
    image: "/images/Goa-img.png", // ✅ Use starting slash for public folder
    price: "Starting ₹9,999",
    description: "Beaches & Nightlife",
  },
  {
    name: "Uttarakhand",
    image: "/images/uttarakhand-img.png",
    price: "Starting ₹14,999",
    description: "Hills & Spirituality",
  },
  {
    name: "Delhi",
    image: "/images/delhi-img.png",
    price: "Starting ₹15,999",
    description: "Heritage & Culture",
  },
  {
    name: "Himachal Pradesh",
    image: "/images/manali-img.png",
    price: "Starting ₹18,000",
    description: "Hills & Adventure",
  },
  {
    name: "Rajasthan",
    image: "/images/jaipur-img.png",
    price: "Starting ₹25,000",
    description: "Heritage & Culture",
  },
  {
    name: "Kerala",
    image: "/images/Kerala-img.png",
    price: "Starting ₹21,999",
    description: "Backwaters & Nature",
  },
]

export default function PopularDestinations() {
  return (
    <section className="py-16  " style={{ backgroundImage: "url('/img/bg/line-pattern3.png')" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
          <p className="text-lg text-gray-600">Discover amazing places around the world</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <Card key={index}>
              <CardContent>
                <div className="relative overflow-hidden rounded-t-lg h-48 w-full">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    width={600}
                    height={400}
                    priority
                    // fill // takes full width/height of parent
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 bg-opacity-10 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute bottom-2 left-4 text-white">
                    <h3 className="text-xl font-bold">{destination.name}</h3>
                    <p className="text-bold font-semibold  text-slate-50">{destination.description}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-lg font-semibold text-orange-500">{destination.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
