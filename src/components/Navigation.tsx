import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/language";

const navItems = [
  { key: "nav.home", href: "#home" },
  { key: "nav.problem", href: "#problem" },
  { key: "nav.solution", href: "#solution" },
  { key: "nav.impact", href: "#impact" },
  { key: "nav.budget", href: "#budget" },
  { key: "nav.contact", href: "#contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection("#home")}>
            <img src="/logo.svg" alt="SmartAgri Maroc" className="h-8 w-8 rounded-lg shadow-md group-hover:scale-110 transition-transform" />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
              SmartAgri
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/80 hover:text-primary transition-all font-medium relative group focus:outline-none focus:ring-2 focus:ring-ring px-1"
                >
                  {t(item.key)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <LanguageToggle />
              <ThemeToggle />
              <Button variant="hero" onClick={() => scrollToSection("#contact")} className="shadow-lg hover:shadow-xl">
                {t("hero.contact")}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden py-4 bg-background/95 backdrop-blur-xl rounded-b-2xl border-b border-border/50 shadow-xl animate-fade-in">
            <div className="flex flex-col gap-2 px-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left px-4 py-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all font-medium focus:outline-none"
                >
                  {t(item.key)}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button variant="hero" className="w-full shadow-lg" onClick={() => scrollToSection("#contact")}>
                  Investir
                </Button>
              </div>
              <div className="px-4 pt-3 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Thème</div>
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
