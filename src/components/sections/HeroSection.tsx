import { Button } from "@/components/ui/button";
import { Droplet, Sun, Sprout, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";
import { useLanguage } from "@/contexts/language";

export const HeroSection = () => {
  const { t } = useLanguage();
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background with modern gradient mesh */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Smart Agriculture"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10" />
        <div className="absolute inset-0" style={{ backgroundImage: 'var(--gradient-mesh)' }} />
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl animate-fade-in-up">
          {/* Modern Floating Icons */}
          <div className="flex gap-3 mb-8">
            <div className="p-3 rounded-2xl bg-primary/10 backdrop-blur-xl border border-primary/20 shadow-lg animate-float hover:scale-110 transition-transform">
              <Droplet className="h-6 w-6 text-primary" />
            </div>
            <div className="p-3 rounded-2xl bg-secondary/10 backdrop-blur-xl border border-secondary/20 shadow-lg animate-float hover:scale-110 transition-transform" style={{ animationDelay: "0.5s" }}>
              <Sun className="h-6 w-6 text-secondary" />
            </div>
            <div className="p-3 rounded-2xl bg-accent/10 backdrop-blur-xl border border-accent/20 shadow-lg animate-float hover:scale-110 transition-transform" style={{ animationDelay: "1s" }}>
              <Sprout className="h-6 w-6 text-accent" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent mb-6 leading-tight">
            SmartAgri
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/90 mb-4 font-semibold">
            {t("hero.subtitle")}
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            {t("hero.lead")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              variant="hero"
                aria-label={t("hero.discover")}
              className="text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform-gpu hover:-translate-y-0.5 transition-transform"
              onClick={() => scrollToSection("solution")}
            >
              <span className="inline-flex items-center gap-3">
                <span>{t("hero.discover")}</span>
                <ArrowRight className="ml-1 h-5 w-5" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              aria-label={t("hero.contact")}
              className="text-lg px-8 py-4 rounded-full border-2 shadow-lg hover:shadow-xl transform-gpu hover:-translate-y-0.5 transition-transform"
              onClick={() => scrollToSection("contact")}
            >
              {t("hero.contact")}
            </Button>
          </div>

          {/* Modern Stats Cards */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { key: "s1", icon: Droplet, color: "primary" },
              { key: "s2", icon: Sun, color: "secondary" },
              { key: "s3", icon: Sprout, color: "accent" },
              { key: "s4", icon: ArrowRight, color: "primary" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group text-center p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 mb-3">
               <Icon className={"h-7 w-7 text-" + stat.color + " group-hover:scale-110 transition-transform"} />
                  </div>
              <p className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-1 tracking-tight">{t('hero.stats.' + stat.key + '.value')}</p>
              <p className="text-sm text-muted-foreground">{t('hero.stats.' + stat.key + '.label')}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-primary/30 flex items-start justify-center p-2 backdrop-blur-sm bg-background/20">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
