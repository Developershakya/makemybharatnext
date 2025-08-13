"use client";
import NextImage, { ImageProps, ImageLoaderProps } from 'next/image';

// Custom loader function
const customLoader = ({ src }: ImageLoaderProps) => {
  return src; // You can customize the URL if needed
};

// Custom Image component
const Image = ({ width, height, ...props }: ImageProps) => {
  // Ensure width and height are passed to avoid warnings
  if (!width || !height) {
    console.warn("Image component requires 'width' and 'height' properties.");
  }

  return (
    <NextImage
      {...props}
      loader={customLoader}
      width={width}   // Ensure width is passed
      height={height} // Ensure height is passed
    />
  );
};

export default Image;