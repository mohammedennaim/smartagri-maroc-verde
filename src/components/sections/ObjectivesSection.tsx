import { SectionTitle } from "@/components/SectionTitle";
import { FeatureCard } from "@/components/FeatureCard";
import { Target, Droplet, Languages, Brain } from "lucide-react";
import { useLanguage } from "@/contexts/language";

export const ObjectivesSection = () => {
  const { t } = useLanguage();

  const objectives = [
    {
      icon: Target,
      title: t("objectives.items.s1.title"),
      description: t("objectives.items.s1.description"),
    },
    {
      icon: Droplet,
      title: t("objectives.items.s2.title"),
      description: t("objectives.items.s2.description"),
    },
    {
      icon: Languages,
      title: t("objectives.items.s3.title"),
      description: t("objectives.items.s3.description"),
    },
    {
      icon: Brain,
      title: t("objectives.items.s4.title"),
      description: t("objectives.items.s4.description"),
    },
  ];

  const metrics = [
    { value: t("objectives.metrics.m1.value"), label: t("objectives.metrics.m1.label"), description: t("objectives.metrics.m1.desc") },
    { value: t("objectives.metrics.m2.value"), label: t("objectives.metrics.m2.label"), description: t("objectives.metrics.m2.desc") },
    { value: t("objectives.metrics.m3.value"), label: t("objectives.metrics.m3.label"), description: t("objectives.metrics.m3.desc") },
  ];

  return (
    <section id="objectives" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t("objectives.title")}
          subtitle={t("objectives.subtitle")}
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard {...objective} />
            </div>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/60 animate-scale-in hover:-translate-y-1 hover:shadow-xl transition-all"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <p className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {metric.value}
              </p>
              <p className="text-xl font-semibold text-foreground mb-1">{metric.label}</p>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
