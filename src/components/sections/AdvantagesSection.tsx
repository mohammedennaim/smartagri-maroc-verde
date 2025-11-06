import { SectionTitle } from "@/components/SectionTitle";
import { FeatureCard } from "@/components/FeatureCard";
import { Brain, DollarSign, Zap, FileText, Sun, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/language";

export const AdvantagesSection = () => {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: Brain,
      title: t("advantages.items.s1.title"),
      description: t("advantages.items.s1.description"),
    },
    {
      icon: DollarSign,
      title: t("advantages.items.s2.title"),
      description: t("advantages.items.s2.description"),
    },
    {
      icon: Zap,
      title: t("advantages.items.s3.title"),
      description: t("advantages.items.s3.description"),
    },
    {
      icon: FileText,
      title: t("advantages.items.s4.title"),
      description: t("advantages.items.s4.description"),
    },
    {
      icon: Sun,
      title: t("advantages.items.s5.title"),
      description: t("advantages.items.s5.description"),
    },
    {
      icon: Languages,
      title: t("advantages.items.s6.title"),
      description: t("advantages.items.s6.description"),
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t("advantages.title")}
          subtitle={t("advantages.subtitle")}
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard {...advantage} />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-3 rounded-full bg-background/60 border border-border/60 px-5 py-2 text-sm text-muted-foreground shadow-sm">
            {t("advantages.badge")}
          </div>
        </div>
      </div>
    </section>
  );
};
