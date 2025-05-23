export default function AuthorBio() {
  return (
    <section className="border-t pt-8 mt-12 max-w-md mx-auto text-center">
      <img
        src="/images/author-photo.jpg"
        alt="Author photo"
        className="mx-auto rounded-full w-24 h-24 mb-4"
      />
      <h3 className="text-xl font-semibold">Theo Vin</h3>
      <p className="text-gray-600 mb-4">
        Tech enthusiast, blogger, and software engineer sharing insights and tutorials.
      </p>
      <form
        className="flex justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Subscribed!");
        }}
      >
        <input
          type="email"
          placeholder="Your email"
          className="px-3 py-2 border rounded-l-md focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}