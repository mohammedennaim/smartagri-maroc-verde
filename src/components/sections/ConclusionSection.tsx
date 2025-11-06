import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";
import { Target, Lightbulb, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/language";

export const ConclusionSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: t("conclusion.vision.stats.s1.value"), label: t("conclusion.vision.stats.s1.label") },
    { value: t("conclusion.vision.stats.s2.value"), label: t("conclusion.vision.stats.s2.label") },
    { value: t("conclusion.vision.stats.s3.value"), label: t("conclusion.vision.stats.s3.label") },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <SectionTitle title={t("conclusion.title")} subtitle={t("conclusion.subtitle")} centered />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 text-center hover:shadow-xl transition-all animate-fade-in">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-destructive/20 to-orange-500/20 mb-4">
              <Target className="h-8 w-8 text-destructive" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{t("conclusion.cards.problem.title")}</h3>
            <p className="text-muted-foreground">{t("conclusion.cards.problem.description")}</p>
          </Card>

          <Card className="p-8 text-center hover:shadow-xl transition-all animate-fade-in">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{t("conclusion.cards.solution.title")}</h3>
            <p className="text-muted-foreground">{t("conclusion.cards.solution.description")}</p>
          </Card>

          <Card className="p-8 text-center hover:shadow-xl transition-all animate-fade-in">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{t("conclusion.cards.results.title")}</h3>
            <p className="text-muted-foreground">{t("conclusion.cards.results.description")}</p>
          </Card>
        </div>

        <Card className="p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-fade-in-up">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{t("conclusion.vision.heading")}</h3>
            <p className="text-xl text-muted-foreground mb-8">{t("conclusion.vision.lead")}</p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 rounded-lg bg-background/50 backdrop-blur-sm">
                  <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
