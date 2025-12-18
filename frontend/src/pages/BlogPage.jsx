import React from "react";

const BLOGS = [
  {
    id: 1,
    title: "Top 5 Smartphones of 2025",
    excerpt: "Discover the best smartphones this year with amazing specs and performance.",
    author: "Admin",
    date: "Dec 18, 2025",
    image: "https://via.placeholder.com/400x250?text=Smartphones+2025",
  },
  {
    id: 2,
    title: "Gaming Phones You Must Try",
    excerpt: "Experience next-level mobile gaming with these powerful devices.",
    author: "John Doe",
    date: "Dec 12, 2025",
    image: "https://via.placeholder.com/400x250?text=Gaming+Phones",
  },
  {
    id: 3,
    title: "Best Camera Phones",
    excerpt: "Capture stunning photos with these phones with amazing cameras.",
    author: "Jane Smith",
    date: "Dec 10, 2025",
    image: "https://via.placeholder.com/400x250?text=Camera+Phones",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black/90 py-12 font-[Orbitron] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-8 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">
          📝 PhonePLAY Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.map((blog) => (
            <div
              key={blog.id}
              className="bg-black/70 border border-cyan-400/30 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.7)] transition transform hover:scale-105"
            >
              <div className="h-48 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <h2 className="text-xl font-bold text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
                  {blog.title}
                </h2>
                <p className="text-gray-300 text-sm">{blog.excerpt}</p>
                <div className="flex justify-between items-center text-gray-400 text-xs mt-2">
                  <span>By {blog.author}</span>
                  <span>{blog.date}</span>
                </div>
                <button className="mt-3 w-full py-2 bg-cyan-400 hover:bg-cyan-500 text-black font-bold rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.6)] transition">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
