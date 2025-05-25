"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface PostCardProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    images: string[];
    tags: string[];
  };
  onClick?: () => void;
}
export default function PostCard({ post }: PostCardProps) {
  return (
    <div
      className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 p-6 flex flex-col h-full cursor-pointer"
    >
      <div>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop
          spaceBetween={10}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={1}
          className="mb-4 rounded-xl overflow-hidden"
        >
          {post.images.map((img, i) => (
            <SwiperSlide key={`${post.slug}-${i}`}>
              <div className="relative w-full h-48 sm:h-56 md:h-64">
                <Image
                  src={img}
                  alt={`Image ${i + 1} of ${post.title}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div onClick={() => (window.location.href = `/blog/${post.slug}`)}>
        <h4 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-1">
          {post.title}
        </h4>
        <p className="text-sm text-gray-400 mb-2">{post.date}</p>
        <p className="text-gray-700 dark:text-gray-300 text-base">{post.excerpt}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-semibold px-3 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}