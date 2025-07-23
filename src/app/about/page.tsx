import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-100">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1037358753872630"
     crossorigin="anonymous"></script>
        <Header />
      <h1 className="text-4xl font-bold mb-6">About BOLDATLAS</h1>
      <p className="text-lg mb-4">
        Welcome to <strong>BOLDATLAS</strong> – your daily source for insightful stories and breakthroughs across Africa and the world. We&apos;re passionate about exploring how technology, culture, health, and innovation shape the modern world.
      </p>
      <p className="text-lg mb-4">
        Our mission is to shed light on transformative ideas and real-world impact. Whether it’s climate adaptation in African cities, AI trends, or healthcare breakthroughs, our blog provides curated content to inspire, educate, and empower.
      </p>
      <p className="text-lg">
        Thank you for being a part of our journey. We believe in storytelling that matters.
      </p>
      <Footer />
    </div>
  );
}
