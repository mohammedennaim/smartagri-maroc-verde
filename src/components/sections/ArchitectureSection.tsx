import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Wifi, Bluetooth, MessageSquare, CloudOff } from "lucide-react";
import { useLanguage } from "@/contexts/language";

export const ArchitectureSection = () => {
  const { t } = useLanguage();

  const hardwareItems = [
    { layer: t("architecture.hardware.items.h1.layer"), tech: t("architecture.hardware.items.h1.tech") },
    { layer: t("architecture.hardware.items.h2.layer"), tech: t("architecture.hardware.items.h2.tech") },
    { layer: t("architecture.hardware.items.h3.layer"), tech: t("architecture.hardware.items.h3.tech") },
    { layer: t("architecture.hardware.items.h4.layer"), tech: t("architecture.hardware.items.h4.tech") },
  ];

  const softwareItems = [
    { layer: t("architecture.software.items.s1.layer"), tech: t("architecture.software.items.s1.tech") },
    { layer: t("architecture.software.items.s2.layer"), tech: t("architecture.software.items.s2.tech") },
    { layer: t("architecture.software.items.s3.layer"), tech: t("architecture.software.items.s3.tech") },
    { layer: t("architecture.software.items.s4.layer"), tech: t("architecture.software.items.s4.tech") },
  ];

  const connectivity = [
    { icon: Wifi, title: t("architecture.connectivity.c1.title"), desc: t("architecture.connectivity.c1.desc") },
    { icon: Bluetooth, title: t("architecture.connectivity.c2.title"), desc: t("architecture.connectivity.c2.desc") },
    { icon: MessageSquare, title: t("architecture.connectivity.c3.title"), desc: t("architecture.connectivity.c3.desc") },
    { icon: CloudOff, title: t("architecture.connectivity.c4.title"), desc: t("architecture.connectivity.c4.desc") },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle title={t("architecture.title")} subtitle={t("architecture.subtitle")} centered />

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Hardware Stack */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent animate-fade-in hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Layers className="h-6 w-6 text-primary" />
              {t("architecture.hardware.heading")}
            </h3>
            <div className="space-y-4">
              {hardwareItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-background/60 backdrop-blur-sm border border-primary/10 hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  <span className="font-medium text-foreground">{item.layer}</span>
                  <Badge variant="secondary">{item.tech}</Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Software Stack */}
          <Card className="p-8 bg-gradient-to-br from-secondary/5 to-transparent animate-fade-in hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Layers className="h-6 w-6 text-secondary" />
              {t("architecture.software.heading")}
            </h3>
            <div className="space-y-4">
              {softwareItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-background/60 backdrop-blur-sm border border-secondary/10 hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  <span className="font-medium text-foreground">{item.layer}</span>
                  <Badge variant="secondary">{item.tech}</Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Connectivity */}
        <Card className="p-8 bg-gradient-to-br from-accent/5 to-transparent animate-fade-in-up hover:shadow-xl transition-all">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{t("architecture.connectivity.heading")}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {connectivity.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-accent to-accent/80 mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
