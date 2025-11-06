import { SectionTitle } from "@/components/SectionTitle";
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { useLanguage } from "@/contexts/language";

export const BudgetSection = () => {
  const { t } = useLanguage();

  const budgetData = [
    { name: t("budget.items.sensors"), value: 450, percent: 25, color: "hsl(145, 65%, 35%)" },
    { name: t("budget.items.esp"), value: 350, percent: 19, color: "hsl(200, 85%, 45%)" },
    { name: t("budget.items.solar"), value: 600, percent: 33, color: "hsl(35, 65%, 55%)" },
    { name: t("budget.items.relays"), value: 200, percent: 11, color: "hsl(145, 55%, 55%)" },
    { name: t("budget.items.enclosure"), value: 220, percent: 12, color: "hsl(200, 75%, 65%)" },
  ];

  const total = budgetData.reduce((sum, item) => sum + item.value, 0);

  return (
    <section id="budget" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle title={t("budget.title")} subtitle={t("budget.subtitle")} centered />

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Budget Breakdown */}
          <Card className="p-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">{t("budget.prototype.heading")}</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={budgetData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {budgetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value} DH`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 text-center">
              <p className="text-sm text-muted-foreground mb-1">{t("budget.prototype.totalLabel")}</p>
              <p className="text-3xl font-bold text-foreground">{total} DH</p>
            </div>
          </Card>

          {/* ROI Calculation */}
          <Card className="p-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">{t("budget.roi.heading")}</h3>
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                <p className="text-sm text-muted-foreground mb-2">{t("budget.roi.savingsHeading")}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>{t("budget.roi.savings.water.label")}</span>
                    <span className="font-semibold">{t("budget.roi.savings.water.value")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("budget.roi.savings.energy.label")}</span>
                    <span className="font-semibold">{t("budget.roi.savings.energy.value")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("budget.roi.savings.productivity.label")}</span>
                    <span className="font-semibold">{t("budget.roi.savings.productivity.value")}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 font-bold text-base">
                    <span>{t("budget.roi.savings.totalLabel")}</span>
                    <span className="text-primary">{t("budget.roi.savings.totalValue")}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-primary to-secondary text-white text-center">
                <p className="text-lg mb-2">{t("budget.roi.reachedIn")}</p>
                <p className="text-4xl font-bold mb-1">{t("budget.roi.months")}</p>
                <p className="text-sm opacity-90">{t("budget.roi.forArea")}</p>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                <p>{t("budget.price.estimated")} <span className="font-semibold text-foreground">{t("budget.price.estimatedValue")}</span></p>
                <p className="mt-1">{t("budget.price.comparison")}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Comparison with competitors */}
        <Card className="p-8 bg-gradient-to-br from-accent/5 to-transparent animate-fade-in-up">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">{t("budget.comparison.title")}</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">{t("budget.comparison.headers.criterion")}</th>
                  <th className="text-center py-3 px-4 font-semibold text-primary">{t("budget.comparison.headers.our")}</th>
                  <th className="text-center py-3 px-4 font-semibold text-muted-foreground">{t("budget.comparison.headers.competitor")}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-border">
                  <td className="py-3 px-4">{t("budget.comparison.rows.price.criterion")}</td>
                  <td className="text-center py-3 px-4 font-semibold text-primary">{t("budget.comparison.rows.price.our")}</td>
                  <td className="text-center py-3 px-4">{t("budget.comparison.rows.price.competitor")}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">{t("budget.comparison.rows.multilang.criterion")}</td>
                  <td className="text-center py-3 px-4 text-primary">{t("budget.comparison.rows.multilang.our")}</td>
                  <td className="text-center py-3 px-4">{t("budget.comparison.rows.multilang.competitor")}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">{t("budget.comparison.rows.solar.criterion")}</td>
                  <td className="text-center py-3 px-4 text-primary">{t("budget.comparison.rows.solar.our")}</td>
                  <td className="text-center py-3 px-4">{t("budget.comparison.rows.solar.competitor")}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4">{t("budget.comparison.rows.ai.criterion")}</td>
                  <td className="text-center py-3 px-4 text-primary">{t("budget.comparison.rows.ai.our")}</td>
                  <td className="text-center py-3 px-4">{t("budget.comparison.rows.ai.competitor")}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">{t("budget.comparison.rows.installation.criterion")}</td>
                  <td className="text-center py-3 px-4 text-primary">{t("budget.comparison.rows.installation.our")}</td>
                  <td className="text-center py-3 px-4">{t("budget.comparison.rows.installation.competitor")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
};
