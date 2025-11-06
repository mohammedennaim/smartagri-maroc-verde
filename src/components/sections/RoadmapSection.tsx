import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/language";

export const RoadmapSection = () => {
  const { t } = useLanguage();

  // Define the sequence and status for each phase; textual content pulled from translations
  const phaseDefs = [
    { key: "p1", status: "completed" },
    { key: "p2", status: "completed" },
    { key: "p3", status: "in-progress" },
    { key: "p4", status: "upcoming" },
  ];

  const phases = phaseDefs.map((d) => ({
    week: t(`roadmap.phases.${d.key}.week`),
    title: t(`roadmap.phases.${d.key}.title`),
    tasks: [
      t(`roadmap.phases.${d.key}.tasks.t1`),
      t(`roadmap.phases.${d.key}.tasks.t2`),
      t(`roadmap.phases.${d.key}.tasks.t3`),
      t(`roadmap.phases.${d.key}.tasks.t4`),
    ],
    status: d.status,
  }));

  const statusColors = {
    completed: "from-primary to-primary-light",
    "in-progress": "from-secondary to-secondary-light",
    upcoming: "from-muted to-muted-foreground",
  };

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t("roadmap.title")}
          subtitle={t("roadmap.subtitle")}
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <Card
              key={index}
              className={`p-6 hover:shadow-xl transition-all animate-fade-in-up ${
                phase.status === "completed" ? "border-primary" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">{phase.week}</span>
                {phase.status === "completed" && (
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                )}
              </div>

              <div className={`h-2 rounded-full bg-gradient-to-r ${statusColors[phase.status]} mb-4`} />

              <h3 className="text-xl font-bold text-foreground mb-4">{phase.title}</h3>

              <ul className="space-y-2">
                {phase.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-muted-foreground">{t("roadmap.progress.title")}</span>
            <span className="text-sm font-bold text-primary">{t("roadmap.progress.value")}</span>
          </div>
          <div className="h-4 rounded-full bg-muted overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 animate-fade-in" style={{ width: t("roadmap.progress.value") }} />
          </div>
        </div>
      </div>
    </section>
  );
};
