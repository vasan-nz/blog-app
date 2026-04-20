import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode
      ? "min-h-screen flex flex-col bg-slate-950 text-slate-100"
      : "min-h-screen flex flex-col bg-slate-50 text-slate-900"
    }>
      <Header darkMode={darkMode} onToggle={() => setDarkMode((d) => !d)} />

      <main className="flex-1">
        <Blog darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}
