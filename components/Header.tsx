"use client";
import Link from "next/link";
import { useState } from "react";

const blogLinks = [
  { title: "9 Stunning Ways African Coastal Cities Are Winning the Climate Battle", slug: "stuning-ways-african-coastal" },
  { title: "5 Critical AI Regulations That Will Transform Your Business This Year", slug: "my-first-post" },
  { title: "8 Powerful Digital Health Breakthroughs Reshaping Care in America", slug: "powerful-digital" },
  { title: "10 Brilliant Transport Solutions African Cities Are Using Right Now", slug: "brilliant-transport-solutions" },
  { title: "5 Remarkable Ways Africa's Solar Revolution Is Changing Lives Today", slug: "remarkable-ways-africa's-solar-revolutio-is-changing-lives-today" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [blogMenuOpen, setBlogMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Logo" className="h-12 w-auto rounded-md shadow-md" />
          <span className="text-2xl font-extrabold text-white tracking-wide select-none">
            DIGITAL DOSE
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-white font-semibold tracking-wide relative">
          <Link href="/" className="hover:text-pink-300 transition-colors duration-300">
            Home
          </Link>

          {/* Blog dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setBlogMenuOpen(true)}
            onMouseLeave={() => setBlogMenuOpen(false)}
          >
            <Link
              href="/blog"
              className="hover:text-pink-300 transition-colors duration-300"
            >
              Blog
            </Link>

            {/* Dropdown */}
            {blogMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white text-gray-800 rounded-lg shadow-lg z-50">
                <ul>
                  {blogLinks.map((blog, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="block px-4 py-2 text-sm hover:bg-pink-100"
                      >
                        {blog.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/blog"
                      className="block px-4 py-2 text-sm text-blue-600 font-medium border-t border-gray-200 hover:bg-pink-100"
                    >
                      View All Blogs →
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-pink-300 transition-colors duration-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-pink-300 transition-colors duration-300">
            Contact
          </Link>
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden text-white p-2 rounded-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-white transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 px-6 py-6 space-y-4 border-t border-pink-400">
          {["/", "/blog", "/about", "/contact"].map((href, idx) => {
            const labels = ["Home", "Blog", "About", "Contact"];
            return (
              <Link
                key={href}
                href={href}
                className="block text-white text-lg font-semibold hover:text-pink-300 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {labels[idx]}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Header;