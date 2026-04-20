export default function Footer({ darkMode = false }) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={
        darkMode
          ? "border-t border-slate-800 bg-slate-950"
          : "border-t border-slate-200 bg-slate-50"
      }
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="max-w-md">
            <h3
              className={
                darkMode
                  ? "text-xl font-semibold tracking-tight text-slate-100"
                  : "text-xl font-semibold tracking-tight text-slate-900"
              }
            >
              The Thinking Archive
            </h3>
            <p
              className={
                darkMode
                  ? "mt-4 text-sm leading-7 text-slate-400"
                  : "mt-4 text-sm leading-7 text-slate-600"
              }
            >
              A personal space for ideas, experiences, and reflections written
              by Manickavasan.
            </p>
          </div>

          <div className="max-w-md">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Ownership
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-sm leading-7 text-slate-400"
                  : "mt-4 text-sm leading-7 text-slate-600"
              }
            >
              All content published in{" "}
              <span
                className={
                  darkMode ? "font-medium text-slate-100" : "font-medium text-slate-900"
                }
              >
                The Thinking Archive
              </span>{" "}
              is the intellectual property of Manickavasan and is published on{" "}
              <a
                href="https://manickavasan.com/blog"
                className={
                  darkMode
                    ? "font-medium text-slate-100 underline underline-offset-4 transition hover:text-slate-300"
                    : "font-medium text-slate-900 underline underline-offset-4 transition hover:text-slate-700"
                }
              >
                manickavasan.com
              </a>
              .
            </p>
          </div>
        </div>

        <div
          className={
            darkMode
              ? "mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500"
              : "mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500"
          }
        >
          © {year} Manickavasan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
