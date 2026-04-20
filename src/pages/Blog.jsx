import Footer from "../components/Footer";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, BookOpen, Search, X, Moon, Sun } from "lucide-react";
import posts from "../data/posts";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;

  const filteredPosts = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    const sortedPosts = [...posts].sort((a, b) => b.id - a.id);
    if (!q) return sortedPosts;
    return sortedPosts.filter((post) => {
      const searchableText = [post.title, post.excerpt, post.date, post.searchText || ""]
        .join(" ")
        .toLowerCase();
      return searchableText.includes(q);
    });
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  useEffect(() => {
    document.title = "The Thinking Archive";
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedPost(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedPost ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedPost]);

  const dm = darkMode;

  return (
    <div className={dm ? "min-h-screen flex flex-col bg-slate-950 text-slate-100" : "min-h-screen flex flex-col bg-slate-50 text-slate-900"}>

      <header className={dm
        ? "sticky top-0 z-10 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md shadow-sm"
        : "sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm"
      }>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <BookOpen className={dm ? "h-5 w-5 text-slate-300" : "h-5 w-5 text-slate-700"} />
            <h1 className={dm ? "text-lg font-semibold tracking-tight text-slate-100" : "text-lg font-semibold tracking-tight text-slate-900"}>
              The Thinking Archive
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!dm)}
              className={dm
                ? "inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800"
                : "inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"}
              aria-label="Toggle dark mode"
            >
              {dm ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {dm ? "Light" : "Dark"}
            </button>

            <a
              href="https://manickavasan.com"
              className={dm
                ? "inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800"
                : "inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"}
            >
              <ArrowLeft className="h-4 w-4" />
              Home
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">

        {/* Hero */}
        <div className="max-w-3xl">
          <p className={dm ? "text-xs font-semibold uppercase tracking-[0.35em] text-slate-500" : "text-xs font-semibold uppercase tracking-[0.35em] text-slate-400"}>
            The Thinking Archive
          </p>
          <h2 className={dm ? "mt-2 text-3xl font-bold tracking-tight text-slate-100" : "mt-2 text-3xl font-bold tracking-tight text-slate-800"}>
            Ideas worth keeping. Experiences worth writing.
          </h2>
          <p className={dm ? "mt-3 max-w-2xl text-base leading-7 text-slate-400" : "mt-3 max-w-2xl text-base leading-7 text-slate-500"}>
            A personal collection of reflections, travel notes, learning moments, and thoughts that stay with me.
          </p>
        </div>

        {/* Search */}
        <div className="mt-8">
          <div className="relative max-w-xl">
            <Search className={dm
              ? "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
              : "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"} />
            <input
              type="text"
              placeholder="Search blogs by title, content, or date..."
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              className={dm
                ? "w-full rounded-2xl border border-slate-700 bg-slate-900 py-3 pl-11 pr-4 text-sm text-slate-100 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-700"
                : "w-full rounded-2xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"}
            />
          </div>
        </div>

        {/* Post list */}
        <div className="mt-10 grid gap-5">
          {paginatedPosts.length > 0 ? (
            paginatedPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className={dm
                  ? "cursor-pointer rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-0.5 hover:border-slate-700 hover:shadow-xl hover:shadow-black/30"
                  : "cursor-pointer rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"}
              >
                <p className={dm ? "text-sm text-slate-400" : "text-sm text-slate-500"}>{post.date}</p>
                <h3 className={dm ? "mt-2 text-xl font-semibold text-slate-100" : "mt-2 text-xl font-semibold text-slate-900"}>{post.title}</h3>
                <p className={dm ? "mt-2 text-sm leading-7 text-slate-400" : "mt-2 text-sm leading-7 text-slate-600"}>{post.excerpt}</p>
                <div className={dm
                  ? "mt-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-slate-200 ring-1 ring-white/10 transition hover:bg-white/15"
                  : "mt-5 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"}>
                  Read blog
                </div>
              </article>
            ))
          ) : (
            <div className={dm
              ? "rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center"
              : "rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm"}>
              <h3 className={dm ? "text-lg font-semibold text-slate-100" : "text-lg font-semibold text-slate-800"}>No blogs found</h3>
              <p className={dm ? "mt-2 text-sm text-slate-400" : "mt-2 text-sm text-slate-500"}>Try a different keyword for your search.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={dm
                ? "rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                : "rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              const isActive = currentPage === page;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={
                    isActive
                      ? dm
                        ? "rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900"
                        : "rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white"
                      : dm
                      ? "rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800"
                      : "rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  }
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={dm
                ? "rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                : "rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"}
            >
              Next
            </button>
          </div>
        )}
      </main>

      {/* Post modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6">
          <div className={dm
            ? "relative flex h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-slate-900 shadow-2xl ring-1 ring-white/10"
            : "relative flex h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"}>

            <div className={dm
              ? "flex items-start justify-between border-b border-slate-800 px-7 py-5"
              : "flex items-start justify-between border-b border-slate-200 px-7 py-5"}>
              <div className="pr-4">
                <p className={dm ? "text-sm text-slate-400" : "text-sm text-slate-500"}>{selectedPost.date}</p>
                <h3 className={dm ? "mt-1 text-2xl font-bold text-slate-100" : "mt-1 text-2xl font-bold text-slate-900"}>{selectedPost.title}</h3>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className={dm
                  ? "rounded-full border border-slate-700 p-2 text-slate-400 transition hover:bg-slate-800 hover:text-slate-200"
                  : "rounded-full border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"}
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-y-auto px-7 py-7">
              <div className={dm ? "space-y-5 text-base leading-8 text-slate-300" : "space-y-5 text-base leading-8 text-slate-700"}>
                {selectedPost.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer darkMode={dm} />
    </div>
  );
}
