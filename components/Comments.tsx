function Comments(){
    return(
        <div>
                {/* Comment Section */}
        <div className="mt-16 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Leave a Comment
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Comment
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your comment here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
    </div>
    )
}
export default Comments;