import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Thermometer, Droplets, Zap, Smartphone, Bell } from "lucide-react";
import sensorImage from "@/assets/sensors-tech.jpg";
import { useLanguage } from "@/contexts/language";

export const SolutionSection = () => {
  const { t } = useLanguage();

  const hardware = [
    { icon: Droplets, name: t("solution.hardware.h1.name"), desc: t("solution.hardware.h1.desc") },
    { icon: Thermometer, name: t("solution.hardware.h2.name"), desc: t("solution.hardware.h2.desc") },
    { icon: Thermometer, name: t("solution.hardware.h3.name"), desc: t("solution.hardware.h3.desc") },
    { icon: Cpu, name: t("solution.hardware.h4.name"), desc: t("solution.hardware.h4.desc") },
    { icon: Zap, name: t("solution.hardware.h5.name"), desc: t("solution.hardware.h5.desc") },
  ];

  const appFeatures = [
    { icon: Smartphone, title: t("solution.app.f1.title"), desc: t("solution.app.f1.desc") },
    { icon: Bell, title: t("solution.app.f2.title"), desc: t("solution.app.f2.desc") },
    { icon: Thermometer, title: t("solution.app.f3.title"), desc: t("solution.app.f3.desc") },
    { icon: Droplets, title: t("solution.app.f4.title"), desc: t("solution.app.f4.desc") },
  ];

  return (
    <section id="solution" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t("solution.title")}
          subtitle={t("solution.subtitle")}
          centered
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 blur-2xl" />
            <img
              src={sensorImage}
              alt={t("solution.image_alt")}
              className="relative rounded-2xl shadow-2xl w-full border border-border/50"
            />
          </div>

          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-3xl font-bold text-foreground mb-6">{t("solution.hardware_heading")}</h3>
            <div className="grid gap-4">
              {hardware.map((item, index) => (
                <Card key={index} className="p-4 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* App Features */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            {t("solution.app_heading")}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appFeatures.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-background/60 backdrop-blur-md border-border/60 hover:shadow-2xl hover:-translate-y-1 transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-4 rounded-full bg-gradient-to-br from-primary to-secondary">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Workflow */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <Badge variant="secondary" className="px-6 py-3 text-base">{t("solution.flow.s1")}</Badge>
            <div className="text-2xl text-primary">→</div>
            <Badge variant="secondary" className="px-6 py-3 text-base">{t("solution.flow.s2")}</Badge>
            <div className="text-2xl text-primary">→</div>
            <Badge variant="secondary" className="px-6 py-3 text-base">{t("solution.flow.s3")}</Badge>
            <div className="text-2xl text-primary">→</div>
            <Badge variant="secondary" className="px-6 py-3 text-base">{t("solution.flow.s4")}</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};
