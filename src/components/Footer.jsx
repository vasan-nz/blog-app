import { useState } from "react";

export default function Footer({ darkMode = false }) {
  const year = new Date().getFullYear();
  const email = "reach@manickavasan.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <footer
      className={
        darkMode
          ? "mt-20 border-t border-slate-800 bg-slate-950"
          : "mt-20 border-t border-slate-200 bg-slate-50"
      }
    >
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Left: brand */}
          <div className="max-w-xs">
            <p className={`text-base font-semibold ${darkMode ? "text-slate-100" : "text-slate-900"}`}>
              The Thinking Archive
            </p>
            <p className={`mt-2 text-sm leading-6 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              A personal space for ideas, experiences, and reflections written
              by Manickavasan.
            </p>
          </div>

          {/* Right: ownership */}
          <div className="max-w-xs">
            <p className={`text-xs font-semibold uppercase tracking-[0.15em] ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
              OWNERSHIP
            </p>
            <p className={`mt-2 text-sm leading-6 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              All content in{" "}
              <span className={`font-medium ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                The Thinking Archive
              </span>{" "}
              is the intellectual property of Manickavasan and is published on{" "}
              <a
                href="https://manickavasan.com"
                target="_blank"
                rel="noreferrer"
                className={`font-medium underline underline-offset-2 transition-colors ${
                  darkMode
                    ? "text-slate-200 hover:text-white"
                    : "text-slate-900 hover:text-slate-600"
                }`}
              >
                manickavasan.com
              </a>
              . Please do not reproduce without permission.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`mt-8 border-t pt-5 flex flex-col items-center gap-2 sm:flex-row sm:justify-center text-xs ${
            darkMode
              ? "border-slate-800 text-slate-600"
              : "border-slate-200 text-slate-500"
          }`}
        >
          <span>© {year} Manickavasan. All rights reserved.</span>
          <span className="hidden sm:inline opacity-40">·</span>

          {/* Contact email */}
          <div className="flex items-center gap-1.5">
            {/* Paper plane — modern send/contact icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3 shrink-0 opacity-60"
              aria-hidden="true"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
            <span>say hello —</span>
            <span>{email}</span>

            {/* Copy-to-clipboard button */}
            <div className="relative">
              <button
                onClick={handleCopy}
                aria-label="Copy email address to clipboard"
                className={`ml-0.5 rounded p-0.5 transition-colors focus-visible:outline-none focus-visible:ring-1 ${
                  darkMode
                    ? "text-slate-600 hover:text-slate-400 focus-visible:ring-slate-500"
                    : "text-slate-400 hover:text-slate-600 focus-visible:ring-slate-400"
                }`}
              >
                {copied ? (
                  /* Checkmark when copied */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`w-3 h-3 ${darkMode ? "text-slate-400" : "text-slate-500"}`}
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  /* Clipboard icon */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-3 h-3"
                    aria-hidden="true"
                  >
                    <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
                    <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
                  </svg>
                )}
              </button>

              {/* "Copied" tooltip */}
              {copied && (
                <span
                  role="status"
                  aria-live="polite"
                  className={`pointer-events-none absolute bottom-full left-1/2 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded px-1.5 py-0.5 text-[10px] leading-tight ${
                    darkMode
                      ? "bg-slate-700 text-slate-300"
                      : "bg-slate-200 text-slate-700"
                  }`}
                >
                  Copied
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
