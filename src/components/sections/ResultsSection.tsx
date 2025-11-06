import { SectionTitle } from "@/components/SectionTitle";
import { StatCard } from "@/components/StatCard";
import { Droplet, Zap, TrendingUp, Leaf, Users, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language";

export const ResultsSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t("results.title")}
          subtitle={t("results.subtitle")}
          centered
        />

        {/* Main Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <StatCard
            icon={Droplet}
            value="30-35%"
            label={t("results.metrics.m1.label")}
            trend={t("results.metrics.m1.trend")}
            color="blue"
          />
          <StatCard
            icon={Zap}
            value="25-30%"
            label={t("results.metrics.m2.label")}
            trend={t("results.metrics.m2.trend")}
            color="orange"
          />
          <StatCard
            icon={TrendingUp}
            value="+20%"
            label={t("results.metrics.m3.label")}
            trend={t("results.metrics.m3.trend")}
            color="green"
          />
        </div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-primary-light">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{t("results.cards.environment.title")}</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {t("results.cards.environment.i1")}</li>
              <li>• {t("results.cards.environment.i2")}</li>
              <li>• {t("results.cards.environment.i3")}</li>
              <li>• {t("results.cards.environment.i4")}</li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-secondary/10 to-transparent animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-secondary to-secondary-light">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{t("results.cards.social.title")}</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {t("results.cards.social.i1")}</li>
              <li>• {t("results.cards.social.i2")}</li>
              <li>• {t("results.cards.social.i3")}</li>
              <li>• {t("results.cards.social.i4")}</li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/10 to-transparent animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-accent to-accent/80">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{t("results.cards.economic.title")}</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {t("results.cards.economic.i1")}</li>
              <li>• {t("results.cards.economic.i2")}</li>
              <li>• {t("results.cards.economic.i3")}</li>
              <li>• {t("results.cards.economic.i4")}</li>
            </ul>
          </Card>
        </div>

        {/* Success Story */}
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-fade-in-up">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary to-secondary mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">{t("results.success.title")}</h3>
            <blockquote className="text-lg text-muted-foreground italic mb-4">
              {t("results.success.quote")}
            </blockquote>
            <p className="font-semibold text-foreground">{t("results.success.author")}</p>
            <p className="text-sm text-muted-foreground">{t("results.success.meta")}</p>
          </div>
        </Card>
      </div>
    </section>
  );
};
