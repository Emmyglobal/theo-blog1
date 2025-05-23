// app/blog/layout.tsx
import type { Metadata } from "next";
import Footer from "../../../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | My Blog",
  description: "Tech articles and insights",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="border-b py-4 px-4 md:px-8 shadow">
        <h1 className="text-2xl font-bold">
          <Link href="/">Home</Link>
        </h1>
      </header>
      <main className="max-w-4xl mx-auto p-4">{children}</main>
      <Footer />
      <footer className="border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Theo Vin. All rights reserved.
      </footer>
    </div>
  );
}