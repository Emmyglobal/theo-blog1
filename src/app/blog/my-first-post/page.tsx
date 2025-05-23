// app/blog/my-first-post/page.tsx

import AdSense from "../../../../components/AdSense";
import Comments from "../../../../components/Comments";
import Header from "../../../../components/Header";

export const metadata = {
  title: "My First Blog Post",
  description: "A short intro to my tech blog",
  keywords: ["blog", "tech", "first post"],
  openGraph: {
    title: "My First Blog Post",
    description: "A short intro to my tech blog",
    url: "https://your-blog-url.com/blog/my-first-post",
    siteName: "My Blog",
    locale: "en-US",
    type: "article",
  },
};

export default function MyFirstPost() {
  return (
    <div className="bg-[#fdf6ec] dark:bg-gray-900 min-h-screen py-12 px-4">
      <Header />
      <div className="max-w-3xl mx-auto text-gray-800 dark:text-gray-100">
        <article className="space-y-6">
          <h1 className="text-4xl font-extrabold mb-2">
            5 Critical AI Regulations That Will Transform Your Business This Year
          </h1>
          <p className="text-gray-600 dark:text-gray-400 italic mb-6">
            Published on May 19, 2025
          </p>

          <p>
            The artificial intelligence landscape in America is undergoing a seismic shift as new regulatory frameworks take effect. Companies across industries are navigating a complex web of federal, state, and local requirements while balancing innovation with compliance. Understanding these developments isn&apos;t just important for tech companies—it&apos;s essential for any business leveraging AI systems.
          </p>

          <h2 className="text-2xl font-bold mt-10">
            Why the New AI Accountability Act Changes Everything
          </h2>
          <p>
            The AI Accountability Act represents the most comprehensive federal approach to artificial intelligence governance to date. Unlike previous piecemeal regulations, this framework establishes clear requirements for algorithmic transparency and fairness across all high-risk AI applications.
          </p>

          {/* AdSense Block */}
          <div className="my-12">
            <AdSense adSlot="1234567890" />
          </div>

          <p>More content coming soon! Stay tuned as I build out tutorials, ideas, and more.</p>
        </article>

        {/* Comment Section */}
        <Comments />
       
      </div>
    </div>
  );
}