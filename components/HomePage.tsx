"use client";

import { useState } from "react";
import Header from "./Header";
import Comments from "./Comments";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import FeaturedPost from "./FeaturedPost";
import PostCard from "./PostCard";

const featuredPost = {
  slug: "remarkable-ways-africa's-solar-revolutio-is-changing-lives-today",
  title: "5 Remarkable Ways Africa's Solar Revolution Is Changing Lives Today",
  excerpt:
    "The African continent is experiencing an unprecedented transformation through renewable energy adoption. This solar revolution isn't just changing how people power their homes—it's reshaping entire communities and economies.",
  date: "May 22, 2025",
  images: ["/images/post1a.jpg", "/images/post1b.jpg", "/images/post1c.jpg"],
  tags: ["Educational", "Welcome"],
};

const posts = [
  {
    slug: "stuning-ways-african-coastal",
    title:
      " 9 Stunning Ways African Coastal Cities Are Winning the Climate Battle",
    excerpt:
      "African coastal cities face some of the most severe climate challenges globally, yet many are emerging as unexpected leaders in urban resilience. From Lagos to Maputo, innovative approaches are transforming vulnerable urban areas into models of climate adaptation. These cities aren't just surviving climate challenges—they're pioneering solutions that cities worldwide are now studying.",
    date: "May 18, 2025",
    images: ["/images/post3a.jpg", "/images/post3b.jpg", "/images/post3c.jpg"],
    tags: ["Productivity", "Climate", "Culture"],
  },
  {
    slug: "my-first-post",
    title: "5 Critical AI Regulations That Will Transform Your Business This Year",
    excerpt:
      "The artificial intelligence landscape in America is undergoing a seismic shift as new regulatory frameworks take effect. Companies across industries are navigating a complex web of federal, state, and local requirements while balancing innovation with compliance. Understanding these developments isn't just important for tech companies—it's essential for any business leveraging AI systems.",
    date: "May 17, 2025",
    images: ["/images/post2a.jpg", "/images/post2b.jpg", "/images/post2c.jpg"],
    tags: ["AI", "Educational", "Educational"],
  },
  {
    slug: "powerful-digital",
    title: "8 Powerful Digital Health Breakthroughs Reshaping Care in America",
    excerpt:
      "The American healthcare landscape is experiencing unprecedented transformation through digital innovation. These technological advances aren't just creating incremental improvements—they're fundamentally reimagining how care is delivered, accessed, and experienced. From rural communities to urban centers, digital solutions are addressing longstanding healthcare challenges while creating new possibilities for personalized medicine",
    date: "May 17, 2025",
    images: ["/images/post4a.jpg", "/images/post4b.jpg", "/images/post4c.jpg"],
    tags: ["Health", "Care", "Educational", "AI"],
  },
  {
    slug: "brilliant-transport-solutions",
    title: "10 Brilliant Transport Solutions African Cities Are Using Right Now",
    excerpt:
      "African urban centers are experiencing a transportation renaissance that's reshaping daily life for millions. Far from simply importing solutions from elsewhere, these cities are developing uniquely African approaches to mobility challenges. These innovations aren't just improving how people move—they're transforming economies, enhancing sustainability, and creating more equitable urban environments.",
    date: "May 17, 2025",
    images: ["/images/post5a.jpg", "/images/post5b.jpg", "/images/post5c.jpg"],
    tags: ["Transport", "Africa", "Educational", "Cities"],
  },
];

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const filteredByTag = selectedTag
    ? filteredPosts.filter((post) => post.tags.includes(selectedTag))
    : filteredPosts;

  const POSTS_PER_PAGE = 6;
  const paginatedPosts = filteredByTag.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        <FeaturedPost post={featuredPost} />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedPosts.map((post, idx) => (
            <PostCard key={idx} post={post} />
          ))}
        </div>
      </div>

      <Comments />
      <Footer />
    </div>
  );
};

export default HomePage;