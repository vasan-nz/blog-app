import { ArrowLeft, BookOpen, Moon, Sun } from "lucide-react";

export default function Header({ darkMode, onToggle }) {
  const dm = darkMode;
  return (
    <header className={dm
      ? "sticky top-0 z-10 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md shadow-sm"
      : "sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm"
    }>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <BookOpen className={dm ? "h-5 w-5 text-slate-300" : "h-5 w-5 text-slate-700"} />
          <span className={dm ? "text-lg font-semibold tracking-tight text-slate-100" : "text-lg font-semibold tracking-tight text-slate-900"}>
            The Thinking Archive
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggle}
            aria-label="Toggle dark mode"
            className={dm
              ? "inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800"
              : "inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"}
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
  );
}
