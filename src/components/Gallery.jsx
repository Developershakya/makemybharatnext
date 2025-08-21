"use client";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { FiArrowLeft } from "react-icons/fi";

export default function Gallery({ images, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState(images[0]?.category);
  const [fullImage, setFullImage] = useState(null);

  const currentImages =
    images.find((img) => img.category === selectedCategory)?.photos || [];

  return (
    <div className="fixed inset-0 z-9990 bg-blue-50 bg-opacity-70 flex flex-col items-center overflow-auto ">
      {/* Modal Header */}
      <div className="w-full flex bg-white justify-between items-center mb-4">
        <button onClick={onClose} className="flex items-center p-3 ">
          <FiArrowLeft className="text-gray-500 text-2xl" />
        </button>
      </div>

      {/* Category Slider */}
      <div className="w-full max-w-7xl mb-4 overflow-x-auto flex gap-4">
        {images.map((img) => (
          <div
            key={img.category}
            className={`flex rounded-lg border-2 overflow-hidden ${
              selectedCategory === img.category
                ? "border-blue-500"
                : "border-transparent"
            }`}
            onClick={() => setSelectedCategory(img.category)}
          >
            <div className=" text-gray-800 font-semibold   bg-opacity-50 flex items-center ">
              <p className="px-2 text-sm flex py-1 flex-col ">
               
                {img.category}
                <span className="text-gray-500">Photos ({img.photos.length})</span>
              </p>

              <div>
                
                <img
                  src={img.cover}
                  alt={img.category}
                  className="w-20 h-17 object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Images Grid */}
      <div className="w-full max-w-7xl grid gap-4 mb-4 md:grid-cols-3">
        {currentImages.map((photo, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => setFullImage(photo)}
          >
            <img
              src={photo}
              alt={`Gallery ${index}`}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Full Image Modal */}
      {fullImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setFullImage(null)}
          >
            <RiCloseLine />
          </button>
          <img
            src={fullImage}
            alt="Full"
            className="max-h-full w-auto max-w-full object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
