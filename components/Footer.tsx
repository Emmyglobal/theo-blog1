"use client";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold text-white">Digital Dose</h2>
          <p className="text-sm mt-2">
            Your daily source of tech, innovation, and African impact stories.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Navigation</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Tags or Categories (optional) */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Popular Tags</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            {["AI", "Climate", "Health", "Transport", "Africa", "Innovation"].map((tag) => (
              <span key={tag} className="bg-gray-800 px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Newsletter / Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
          <p className="text-sm mb-3">Subscribe to our newsletter for updates.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-md text-black"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {currentYear} Digital Dose. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
