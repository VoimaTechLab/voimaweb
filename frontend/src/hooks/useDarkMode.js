import { useEffect, useState } from "react";

export function useDarkMode() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("voima_theme", next ? "dark" : "light");
    setDark(next);
  };

  useEffect(() => {
    const handler = (e) => {
      if (!localStorage.getItem("voima_theme"))
        document.documentElement.classList.toggle("dark", e.matches);
    };
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return { dark, toggle };
}