import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { useLanguage } from "@/contexts/language";

export const ImpactSection = () => {
  const { t } = useLanguage();

  const savingsData = [
    { category: t("impact.savings.categories.water"), avant: 100, apres: 65, economie: 35 },
    { category: t("impact.savings.categories.energy"), avant: 100, apres: 70, economie: 30 },
    { category: t("impact.savings.categories.costs"), avant: 100, apres: 72, economie: 28 },
  ];

  const environmentalData = [
    { name: t("impact.environmental.e1"), value: 25, color: "hsl(145, 65%, 35%)" },
    { name: t("impact.environmental.e2"), value: 35, color: "hsl(200, 85%, 45%)" },
    { name: t("impact.environmental.e3"), value: 40, color: "hsl(35, 65%, 55%)" },
  ];

  return (
    <section id="impact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t("impact.title")}
          subtitle={t("impact.subtitle")}
          centered
        />

        {/* Before/After Comparison */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-primary/5 to-secondary/5 animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            {t("impact.savings.heading")}
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={savingsData}>
              <defs>
                <linearGradient id="barAvant" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(0, 84.2%, 60.2%)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="hsl(0, 84.2%, 60.2%)" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="barApres" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(145, 65%, 35%)" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="hsl(145, 65%, 35%)" stopOpacity="0.65" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(145, 20%, 88%)" />
              <XAxis dataKey="category" stroke="hsl(150, 25%, 15%)" />
              <YAxis stroke="hsl(150, 25%, 15%)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(145, 20%, 88%)",
                  borderRadius: "0.5rem",
                }}
              />
              <Legend />
              <Bar dataKey="avant" fill="url(#barAvant)" name={t("impact.legend.before")} radius={[10, 10, 0, 0]} />
              <Bar dataKey="apres" fill="url(#barApres)" name={t("impact.legend.after")} radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Environmental Impact */}
          <Card className="p-8 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              {t("impact.environmental.heading")}
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={environmentalData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {environmentalData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                  ))}
                </Pie>
                <Tooltip contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(145, 20%, 88%)",
                  borderRadius: "0.5rem",
                }} />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          {/* Key Metrics */}
          <Card className="p-8 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">{t("impact.metrics.heading")}</h3>
            <div className="space-y-6">
              {[
                { label: t("impact.metrics.m1.label"), value: "20-40%", color: "from-secondary to-secondary-light" },
                { label: t("impact.metrics.m2.label"), value: "30%", color: "from-primary to-primary-light" },
                { label: t("impact.metrics.m3.label"), value: "-25%", color: "from-accent to-accent/80" },
                { label: t("impact.metrics.m4.label"), value: "+15-25%", color: "from-primary to-secondary" },
              ].map((metric, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-muted-foreground">{metric.label}</span>
                  <div className={`px-4 py-2 rounded-lg bg-gradient-to-r ${metric.color} text-white font-bold`}>
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
