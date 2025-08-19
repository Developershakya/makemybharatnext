"use client";
import NextImage from 'next/image';

// Custom loader function
const customLoader = ({ src }) => {
  return src; // You can customize the URL if needed
};

// Custom Image component
const Image = ({ width, height, ...props }) => {
  // Ensure width and height are passed to avoid warnings
  if (!width || !height) {
    console.warn("Image component requires 'width' and 'height' properties.");
  }

  return (
    <NextImage
      {...props}
      loader={customLoader}
      width={width}
      height={height}
    />
  );
};

export default Image;