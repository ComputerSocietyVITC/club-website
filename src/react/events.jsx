import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { eventData } from "../data/eventsdata";

const EventsSlider = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-transparent flex flex-col items-center justify-center mx-4">
      {isMobile ? (
          <div className="w-full max-w-6xl px-8">
            {Object.keys(eventData).map((eventName, index) => (
              <div key={index} className="my-16">
                <div className="flex justify-center">
                  <img
                    src={eventData[eventName].imageUrl}
                    alt={eventData[eventName].title}
                    className="w-auto h-auto rounded-xl my-8"
                  />
                </div>
                <div className="rounded-[24px] p-0.5 bg-gradient-to-b flex justify-center from-b_col3 to-b_col4 h-auto w-full md:w-auto md:h-auto shadow-2xl shadow-[#7ac4ec]/30 mt-4">
                  <div className="rounded-[calc(24px-1px)] p-6 md:p-8 bg-gradient-to-b md:w-full from-[#061b24] from-2% via-[#072031] to-[#000b11] to-9% h-full flex flex-col justify-between text-center text-white max-w-[700px]">
                    <h2 className="text-[5vw] text-b_col3 font-semibold mb-2">
                      {eventData[eventName].title}
                    </h2>
                    <p className="text-[2.5vw]">{eventData[eventName].description}</p>
                    <div className="pt-10 pb-8">
                            <a className="border-2 border-solid border-teal-500 p-4 rounded-full bg-gradient-to-r from-b_col1 to-b_col2 cursor-pointer" href={eventData[eventName].galleryLink}>
                                <span className="text-teal-500 font-light text-lg cursor-pointer">
                                View Gallery &gt;
                                </span>
                            </a>
                        </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      ) : (
        <section className="grid grid-cols-1">
          <div className="w-full">
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={50}
              slidesPerView={1}
              speed={600}
              loop={true}
            >
                {
              Object.keys(eventData).map((eventName, index) => (
                <div class="my-16">
                  <a href={eventData[eventName].galleryLink}>
                    {eventData[eventName].title}
                  </a>
                  <SwiperSlide key={index}>
                  <div className="grid grid-cols-1 xl:grid-cols-2 mx-40 items-center place-items-center">
                    <img
                      src={eventData[eventName].imageUrl}
                      alt={eventData[eventName].title}
                      className="max-w-[550px] w-full max-h-[450px] object-cover md:{max-h-[346px] w-full max-w-[559px]} rounded-xl shadow-2xl shadow-[#7ac4ec]/30 sm:{max-h-[346px] max-w-[59px]}"
                    />
                    <div className="rounded-[36px] p-0.5 bg-gradient-to-b flex justify-center from-b_col3 to-b_col4 h-auto lg:w-[500px] md:w-[400px] shadow-2xl shadow-[#7ac4ec]/30">
                      <div className="rounded-[calc(36px-1px)] p-6 md:p-12 md:h-auto bg-gradient-to-b md:w-full from-[#061b24] via-[#072031] to-[#000b11] flex flex-col text-center text-white max-w-[559px]">
                        <h2 className="text-[1vw] md:text-[3vw] lg:text-[2vw] xl:text-[2.25vw] text-b_col3 font-semibold mb-4">
                          {eventData[eventName].title}
                        </h2>
                        <p className="text-[1.5vh] md:text-[1.6vh] lg:text-[1.75vh] xl:text-[2vh]">
                          {eventData[eventName].description}
                        </p>
                        <div className="pt-10">
                            <a className="border-2 border-solid border-teal-500 p-4 rounded-full bg-gradient-to-r from-b_col1 to-b_col2 cursor-pointer" href={eventData[eventName].galleryLink}>
                                <span className="text-teal-500 text-lg cursor-pointer monospace-font">
                                View Gallery &gt;
                                </span>
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                </div>
              ))
            }
            </Swiper>
          </div>
        </section>
      )}
    </div>
  );
};

export default EventsSlider;
