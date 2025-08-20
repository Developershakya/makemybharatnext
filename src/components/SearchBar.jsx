"use client";
import { useState } from "react";

const BookingSearch = () => {
  const [startingFrom, setStartingFrom] = useState("New Delhi");
  const [travellingOn, setTravellingOn] = useState("Tue, 21 Oct 2025");
  const [roomsGuests, setRoomsGuests] = useState("2 Adults");

  const startingOptions = ["New Delhi", "Mumbai", "Bangalore", "Chennai"];
  const travellingOptions = ["Tue, 21 Oct 2025", "Wed, 22 Oct 2025", "Thu, 23 Oct 2025"];
  const roomsOptions = ["1 Adult", "2 Adults", "3 Adults", "2 Adults, 1 Child"];

  const handleSearch = () => {
    // Example: store data to backend
    console.log({ startingFrom, travellingOn, roomsGuests });
  };

  return (
    <div className="flex items-center gap-3 bg-[#1E2A38] p-4 ">
      {/* Starting From */}
      <div className="flex  gap-4 items-center mx-auto max-w-7xl">


      <div className="relative  bg-[#475566] flex flex-col py-1 rounded-sm pl-2 space-x-8 md:space-x-16 space-y-1">
              <label className="text-xs text-orange-400 font-semibold  block ">STARTING FROM</label>
              <div className="text-white">New Delhi</div>
      </div>

      {/* Travelling On */}
      <div className="relative  bg-[#475566] flex flex-col py-1 rounded-sm pl-2 space-x-8 md:space-x-16 space-y-1">
              <label className="text-xs text-orange-400 font-semibold  block ">TRAVELLING ON</label>
              <div className=" text-white">New Delhi</div>
      </div>

      {/* Rooms & Guests */}
      <div className="relative  bg-[#475566] flex flex-col py-1 rounded-sm pl-2 space-x-8 md:space-x-16 space-y-1">
              <label className="text-xs text-orange-400 font-semibold  block uppercase">Rooms & Guests</label>
              <div className="text-white">2 Adults</div>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="bg-gradient-to-r from-[#1E2A38]-400 to-orange-500 text-white text-2xl rounded-tr-full rounded-br-full px-6 py-2 ml-4 cursor-pointer rounded font-semibold"
      >
        SEARCH
      </button>
            </div>
    </div>
  );
}; 

export default BookingSearch;
