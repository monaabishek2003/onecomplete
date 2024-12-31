import React, { useEffect, useState } from "react";

interface UseCarouselProps {
  totalImages: number;
  interval?: number;
}

const useCarousel = ({ totalImages, interval = 3000 }: UseCarouselProps) => {
  
  const [currentImage, setImage] = useState<number>(0);

  useEffect(() => {
    const updateImage = () => setImage((prev) => (prev + 1) % totalImages);
    const timer = setInterval(updateImage,interval)
    return () => clearInterval(timer)
  },[totalImages,interval]);

  return currentImage;
};

export default useCarousel;

