import { useLanguage } from "@/contexts/language";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  const toggle = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className="p-2 rounded-md hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
      title={lang === "en" ? "العربية" : "English"}
    >
      <span className="sr-only">Toggle language</span>
      <Globe className="h-5 w-5 text-foreground" />
    </button>
  );
}
