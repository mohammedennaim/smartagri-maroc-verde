import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const THEME_KEY = "theme";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored) return stored === "dark";
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch (e) {
      // ignore errors accessing localStorage in some environments
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      try { localStorage.setItem(THEME_KEY, "dark"); } catch (e) { /* ignore */ }
    } else {
      root.classList.remove("dark");
      try { localStorage.setItem(THEME_KEY, "light"); } catch (e) { /* ignore */ }
    }
  }, [isDark]);

  useEffect(() => {
    // Sync with system changes
    const mq = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    if (mq && mq.addEventListener) mq.addEventListener("change", handler);
    return () => { if (mq && mq.removeEventListener) mq.removeEventListener("change", handler); };
  }, []);

  return (
    <button
      aria-pressed={isDark}
      aria-label={isDark ? "Activer le thème clair" : "Activer le thème sombre"}
      onClick={() => setIsDark((v) => !v)}
      className="p-2 rounded-md hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
      title={isDark ? "Basculer en clair" : "Basculer en sombre"}
    >
      {isDark ? <Sun className="h-5 w-5 text-foreground" /> : <Moon className="h-5 w-5 text-foreground" />}
    </button>
  );
}
