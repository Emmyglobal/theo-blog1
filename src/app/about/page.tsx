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
        <strong>Boldatlas</strong> is your daily compass for navigating modern life, covering insightful stories, expert tips, and fresh perspectives on lifestyle, health, education, sports, and politics. Whether you're seeking wellness advice, educational breakthroughs, cultural trends, or political analysis, Boldatlas connects you to content that informs, inspires, and empowers.
Join a vibrant community of curious minds exploring bold ideas that shape how we live, learn, and lead in today’s world.      </p>
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
