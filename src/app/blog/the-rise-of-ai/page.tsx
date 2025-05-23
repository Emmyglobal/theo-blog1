import Comments from "../../../../components/Comments";
import Header from "../../../../components/Header";

export const metadata = {
  title: "The Rise of AI",
  description: "Exploring how AI is shaping the future",
};

export default function TheRiseOfAIPost() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Header />
      <h1 className="text-3xl font-bold mb-4">The Rise of AI</h1>
      <p className="text-gray-600 mb-6">Coming Soon</p>
      <p>This post is coming soon. Stay tuned!</p>
              {/* Comment Section */}
        <Comments />
        
    </div>
  );
}
