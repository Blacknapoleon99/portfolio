export default function Page() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg text-center max-w-xl">
          Explore my projects, learn about me, and interact with exciting features. Use the navigation menu to get started!
        </p>
        <div className="mt-8 flex gap-4">
          <a
              href="/home"
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            Go to Home
          </a>
          <a
              href="/projects"
              className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
  );
}
