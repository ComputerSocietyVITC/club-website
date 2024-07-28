import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Album = ({ slug }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const allImages = import.meta.glob("/public/images/events/**/*.webp");
    const imageUrls = Object.keys(allImages);
    const filteredImages = imageUrls.filter((image) =>
      image.includes(`/events/${slug}/`),
    );
    setImages(
      filteredImages.map((url) => ({ src: url, width: 600, height: 450 })),
    );
  }, [slug]);

  return (
    <div className="overflow-x-auto">
      <div className="flex">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt=""
            className="object-cover rounded-2xl m-10"
            style={{ width: "600px", height: "450px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Album;

