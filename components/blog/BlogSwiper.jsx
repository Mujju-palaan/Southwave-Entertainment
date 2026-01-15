"use client";

import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogData from "../../app/data/BlogData";
import { MdArrowOutward } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const BlogSwiper = () => {
  return (
    <Swiper
      className="w-[90%] flex m-4"
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 1200,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1, navigation: false },
        768: { slidesPerView: 2, navigation: true,},
        1024: { slidesPerView: 3, navigation: true, },
      }}
    >
      {BlogData.map((data) => (
        <SwiperSlide key={data.id}>
          <Link
            href={`/blogs/${data.id}`}
            className="md:m-8 mb-8 flex flex-col gap-2 rounded-xl cursor-pointer
              border-b border-stone-300 p-4 shadow-lg transition-shadow duration-300"
          >
            {/* Image wrapper MUST have height */}
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={data.image}
                alt={data.venue}
                className="object-cover h-55"
                height={250}
                width={300}
                //   unoptimized
              />
            </div>

            <div className="font-semibold text-xs flex gap-2 text-stone-700">
              <span>{data.name}</span>
              <span className="flex items-center">
                <GoDotFill className="mx-1" />
                {data.date}
              </span>
            </div>

            <span className="flex justify-between items-center">
              <h2 className="font-semibold">{data.venue}</h2>
              <MdArrowOutward className="text-2xl" />
            </span>

            <p className="text-xs line-clamp-3">{data.description}</p>
            <div className="flex flex-wrap gap-2">
              {data.categories.map((e, idx) => (
                <span
                  key={idx}
                  className="rounded-lg border border-stone-700 text-stone-700 
                       text-xs px-2 py-0.5"
                >
                  {e}
                </span>
              ))}
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BlogSwiper;
