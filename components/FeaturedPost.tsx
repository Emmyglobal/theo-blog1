"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface FeaturedPostProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    images: string[];
  };
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <div className="cursor-pointer rounded-3xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        spaceBetween={10}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={1}
        className="h-64"
      >
        {post.images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-64">
              <Image
                src={img}
                alt={`Featured image ${i + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-none"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="p-6" onClick={() => (window.location.href = `/blog/${post.slug}`)}>
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <p className="text-sm text-gray-500 mb-2">{post.date}</p>
        <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
      </div>
    </div>
  );
}
