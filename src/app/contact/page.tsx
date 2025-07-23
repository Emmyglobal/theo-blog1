import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-100">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1037358753872630"
     crossorigin="anonymous"></script>
        <Header />
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-6">
        We&apos;d love to hear from you! Whether you have feedback, suggestions, or partnership inquiries, feel free to reach out.
      </p>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
        >
          Send Message
        </button>
      </form>
      <Footer />
    </div>
  );
}
