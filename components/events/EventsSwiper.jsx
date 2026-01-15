"use client";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const EventsSwiper = ({ EventsData }) => {
  return (
    <>
      {/* <h1 className="font-serif md:text-6xl text-2xl md:px-30 px-8 md:py-8 py-2"></h1> */}
      <Swiper
        className="flex w-[82%]"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={60}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1100,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, navigation: false },
          768: { slidesPerView: 2, navigation: true },
          1024: { slidesPerView: 3, navigation: true },
        }}
      >
        {EventsData.map((data) => (
          <SwiperSlide key={data.id}>
            <Link
              href={`/blogs/${data.id}`}
              className="md:mb-10 mb-8 rounded-xl cursor-pointer block
                "
            >
              {/* Image wrapper MUST have height */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative h-90 overflow-hidden block rounded"
              >
                <Image
                  src={data.image}
                  alt={data.id}
                  className="object-cover rounded-xl"
                  fill
                />
              </motion.div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default EventsSwiper;
