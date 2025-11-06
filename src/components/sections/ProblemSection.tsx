import { SectionTitle } from "@/components/SectionTitle";
import { StatCard } from "@/components/StatCard";
import { Droplet, TrendingDown, Users, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language";

export const ProblemSection = () => {
  const { t } = useLanguage();
  return (
    <section id="problem" className="py-24 relative overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0" style={{ backgroundImage: 'var(--gradient-mesh)' }} />
      <div className="pointer-events-none absolute -top-20 left-10 h-32 w-32 rounded-full bg-destructive/10 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title={t("problem.title")}
          subtitle={t("problem.subtitle")}
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={TrendingDown}
            value={t("problem.stats.s1.value")}
            label={t("problem.stats.s1.label")}
            trend={t("problem.stats.s1.trend")}
            color="orange"
          />
          <StatCard
            icon={Droplet}
            value={t("problem.stats.s2.value")}
            label={t("problem.stats.s2.label")}
            trend={t("problem.stats.s2.trend")}
            color="blue"
          />
          <StatCard
            icon={AlertTriangle}
            value={t("problem.stats.s3.value")}
            label={t("problem.stats.s3.label")}
            trend={t("problem.stats.s3.trend")}
            color="orange"
          />
          <StatCard
            icon={Users}
            value={t("problem.stats.s4.value")}
            label={t("problem.stats.s4.label")}
            trend={t("problem.stats.s4.trend")}
            color="green"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 glass-card hover-lift border-destructive/20 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              {t("problem.challenges_heading")}
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>{t("problem.challenges.c1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>{t("problem.challenges.c2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>{t("problem.challenges.c3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>{t("problem.challenges.c4")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>{t("problem.challenges.c5")}</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 glass-card hover-lift border-secondary/20 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Droplet className="h-6 w-6 text-secondary" />
              {t("problem.environmental_heading")}
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">•</span>
                <span>{t("problem.environmental.e1")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">•</span>
                <span>{t("problem.environmental.e2")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">•</span>
                <span>{t("problem.environmental.e3")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">•</span>
                <span>{t("problem.environmental.e4")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">•</span>
                <span>{t("problem.environmental.e5")}</span>
              </li>
            </ul>
          </Card>
        </div>
        <div className="mt-10 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/60 px-4 py-2 text-xs text-muted-foreground shadow-sm animate-fade-in-up">
            <span className="h-2 w-2 rounded-full bg-destructive" />
            {t("problem.banner")}
          </div>
        </div>
      </div>
    </section>
  );
};
