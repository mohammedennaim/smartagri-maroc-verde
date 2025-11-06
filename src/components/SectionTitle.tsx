interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle = ({ title, subtitle, centered = false }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <div className={`inline-flex items-center ${centered ? "mx-auto" : ""} mb-3 animate-fade-in-up`}>
        <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_6px_hsl(142_76%_36%_/_.12)]" />
        <span className="mx-2 h-px w-10 bg-gradient-to-r from-primary/60 to-secondary/60" />
        <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_0_6px_hsl(199_89%_48%_/_.12)]" />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3 bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent animate-fade-in">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.05s'}}>
          {subtitle}
        </p>
      )}
      <div className={`mt-5 ${centered ? "mx-auto" : ""} h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent animate-scale-in`} />
    </div>
  );
};
