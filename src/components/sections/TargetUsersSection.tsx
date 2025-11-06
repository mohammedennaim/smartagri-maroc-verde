import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";
import { Users, Building2, Check } from "lucide-react";
import { useLanguage } from "@/contexts/language";

export const TargetUsersSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <SectionTitle title={t("targetUsers.title")} subtitle={t("targetUsers.subtitle")} centered />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Small Farmers */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-2xl transition-all animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-primary-light">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">{t("targetUsers.small.heading")}</h3>
                <p className="text-sm text-muted-foreground">{t("targetUsers.small.lead")}</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{t("targetUsers.small.features.f1.strong")}</span> {t("targetUsers.small.features.f1.text")}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{t("targetUsers.small.features.f2.strong")}</span> {t("targetUsers.small.features.f2.text")}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{t("targetUsers.small.features.f3.strong")}</span> {t("targetUsers.small.features.f3.text")}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{t("targetUsers.small.features.f4.strong")}</span> {t("targetUsers.small.features.f4.text")}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-sm text-center text-muted-foreground">{t("targetUsers.small.price")}</p>
            </div>
          </Card>

          {/* Large Farmers */}
          <Card className="p-8 bg-gradient-to-br from-secondary/5 to-transparent hover:shadow-2xl transition-all animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-secondary to-secondary-light">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">{t("targetUsers.large.heading")}</h3>
                <p className="text-sm text-muted-foreground">{t("targetUsers.large.lead")}</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{t("targetUsers.large.features.f1.strong")}</span> {t("targetUsers.large.features.f1.text")}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{t("targetUsers.large.features.f2.strong")}</span> {t("targetUsers.large.features.f2.text")}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{t("targetUsers.large.features.f3.strong")}</span> {t("targetUsers.large.features.f3.text")}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{t("targetUsers.large.features.f4.strong")}</span> {t("targetUsers.large.features.f4.text")}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
              <p className="text-sm text-center text-muted-foreground">{t("targetUsers.large.footer")}</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
