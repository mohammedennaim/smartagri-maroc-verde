import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, TrendingUp, Users, Award } from "lucide-react";
import { useLanguage } from "@/contexts/language";
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t("cta.toast.title"),
      description: t("cta.toast.description"),
    });
    setFormData({ name: "", email: "", message: "" });
  };

  // Refs to left/right columns to compute matching height for the full-width coordinates card
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const [coordsHeight, setCoordsHeight] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      const lh = leftRef.current?.clientHeight ?? 0;
      const rh = rightRef.current?.clientHeight ?? 0;
      const max = Math.max(lh, rh);
      // Match the Coordinates height exactly to the right column (Informations d'investissement)
      const target = rightRef.current?.clientHeight ?? leftRef.current?.clientHeight ?? 0;
    // Subtract 40px from the target height as requested (keep a sensible minimum)
    const normalized = Math.max(240, Math.round(target - 240)); // reduce by 40px
      if (normalized && normalized !== coordsHeight) setCoordsHeight(normalized);
    };
    const t = setTimeout(update, 120);
    window.addEventListener("resize", update);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", update);
    };
  }, [coordsHeight, formData]);

  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("cta.invest_title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("cta.invest_lead")}
          </p>
        </div>

        {/* Investment Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-transparent hover:shadow-xl transition-all animate-scale-in">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary to-primary-light mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{t("cta.highlights.roi.title")}</h3>
            <p className="text-muted-foreground">{t("cta.highlights.roi.desc")}</p>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-secondary/10 to-transparent hover:shadow-xl transition-all animate-scale-in">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-secondary to-secondary-light mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{t("cta.highlights.social.title")}</h3>
            <p className="text-muted-foreground">{t("cta.highlights.social.desc")}</p>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-accent/10 to-transparent hover:shadow-xl transition-all animate-scale-in">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-accent to-accent/80 mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{t("cta.highlights.adv.title")}</h3>
            <p className="text-muted-foreground">{t("cta.highlights.adv.desc")}</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left column: Contact Form */}
          <div className="space-y-6" ref={leftRef}>
            <div className="h-full flex flex-col">
          <Card className="p-8 animate-fade-in h-full">
            <h3 className="text-2xl font-bold text-foreground mb-6">{t("cta.contact_heading")}</h3>
            <form onSubmit={handleSubmit} className="space-y-4 flex-1">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">{t("cta.name")}</label>
                <Input
                  type="text"
                  placeholder={t("cta.placeholders.name")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t("cta.email")}
                </label>
                <Input
                  type="email"
                  placeholder={t("cta.placeholders.email")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t("cta.message")}
                </label>
                <Textarea
                  placeholder={t("cta.placeholders.message")}
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
                  <Button type="submit" variant="cta" className="w-full" size="lg">
                    {t("cta.send")}
                  </Button>
                </form>
              </Card>
            </div>
          </div>

          {/* Right column: Investment Details */}
          <div className="space-y-6" ref={rightRef}>
            <div className="h-full flex flex-col">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 animate-fade-in h-full">
                <h3 className="text-2xl font-bold text-foreground mb-6">{t("cta.invest_info.title")}</h3>
                <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t("cta.invest_info.items.s1.title")}</p>
                    <p className="text-muted-foreground">{t("cta.invest_info.items.s1.value")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t("cta.invest_info.items.s2.title")}</p>
                    <p className="text-muted-foreground">{t("cta.invest_info.items.s2.value")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t("cta.invest_info.items.s3.title")}</p>
                    <p className="text-muted-foreground">{t("cta.invest_info.items.s3.value")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t("cta.invest_info.items.s4.title")}</p>
                    <p className="text-muted-foreground">{t("cta.invest_info.items.s4.value")}</p>
                  </div>
                </div>
              </div>
              </Card>
            </div>
          </div>

          {/* Single full-width Coordinates card that matches the taller column height */}
          <div className="lg:col-span-2">
            <Card
              className="p-8 animate-fade-in mt-4"
              style={coordsHeight ? { height: `${coordsHeight}px` } : undefined}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">{t("cta.coords")}</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:contact@IrigMA.ma" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@IrigMA.ma
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+212600000000" className="text-muted-foreground hover:text-primary transition-colors">
                    +212 6 00 00 00 00
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Casablanca, Maroc</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center animate-fade-in">
          <p className="text-muted-foreground">{t("footer.copyright")}</p>
        </div>
      </div>
    </section>
  );
};
