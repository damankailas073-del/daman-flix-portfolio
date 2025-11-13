import { Card } from "@/components/ui/card";

interface ToolCardProps {
  name: string;
  icon?: string;
  rating?: string;
  level?: number;
}

export const ToolCard = ({ name, icon, rating = "10", level = 85 }: ToolCardProps) => {
  return (
    <Card className="group relative aspect-video overflow-hidden rounded border-none bg-card transition-all duration-300 hover:scale-105">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-card to-muted" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center p-6">
        {/* Rating Badge */}
        <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded bg-primary text-xs font-bold text-primary-foreground">
          {rating}
        </div>

        {/* Icon or Text */}
        {icon ? (
          <div className="mb-3 text-4xl">{icon}</div>
        ) : (
          <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/20">
            <span className="text-2xl font-bold text-primary">
              {name.charAt(0)}
            </span>
          </div>
        )}

        {/* Name */}
        <h3 className="text-center text-lg font-bold text-foreground mb-3">
          {name}
        </h3>

        {/* Progress Bar */}
        <div className="w-full max-w-[150px] h-1.5 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300 group-hover:bg-accent"
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    </Card>
  );
};