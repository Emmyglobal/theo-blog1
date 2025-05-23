import Link from "next/link";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export const metadata = {
  title: "Blog",
  description: "Browse articles on tech and innovation",
};

// Blog post data (from your earlier content)
const blogPosts = [
  {
    title: "9 Stunning Ways African Coastal Cities Are Winning the Climate Battle",
    slug: "stuning-ways-african-coastal",
    date: "May 18, 2025",
    description:
      "African coastal cities face severe climate challenges but are becoming leaders in resilience. See how urban innovation is driving change.",
  },
  {
    title: "5 Critical AI Regulations That Will Transform Your Business This Year",
    slug: "my-first-post",
    date: "May 17, 2025",
    description:
      "Discover the evolving legal landscape of AI and what it means for businesses across industries.",
  },
  {
    title: "8 Powerful Digital Health Breakthroughs Reshaping Care in America",
    slug: "powerful-digital",
    date: "May 17, 2025",
    description:
      "Learn about the digital innovations revolutionizing healthcare delivery in the U.S.",
  },
  {
    title: "10 Brilliant Transport Solutions African Cities Are Using Right Now",
    slug: "brilliant-transport-solutions",
    date: "May 17, 2025",
    description:
      "African cities are solving transport challenges with uniquely local solutions—discover them here.",
  },
  {
    title: "5 Remarkable Ways Africa's Solar Revolution Is Changing Lives Today",
    slug: "remarkable-ways-africa's-solar-revolutio-is-changing-lives-today",
    date: "May 22, 2025",
    description:
      "Africa's solar revolution is transforming homes, communities, and economies through sustainable power.",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Header />
      <h1 className="text-4xl font-extrabold mb-10 text-center">Latest Blog Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{post.date}</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{post.description}</p>
            <span className="inline-block mt-4 text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
              Read more →
            </span>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}