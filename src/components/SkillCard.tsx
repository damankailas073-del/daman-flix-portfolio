import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  number: string;
  title: string;
  subtitle?: string;
  description?: string;
  icon?: LucideIcon;
  image?: string;
}

export const SkillCard = ({ 
  number, 
  title, 
  subtitle, 
  description,
  icon: Icon,
  image 
}: SkillCardProps) => {
  return (
    <Card className="group relative aspect-square overflow-hidden rounded border-none bg-card transition-all duration-300 hover:scale-105">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-card to-muted/50">
        {image && (
          <img 
            src={image} 
            alt={title}
            className="h-full w-full object-cover opacity-30"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      {/* Large Number */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[12rem] font-black text-foreground/5 leading-none">
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="relative flex h-full flex-col justify-end p-6">
        {Icon && (
          <Icon className="mb-2 h-8 w-8 text-primary" />
        )}
        <h3 className="text-xl font-bold text-foreground">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-muted-foreground">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="mt-2 text-xs text-muted-foreground line-clamp-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {description}
          </p>
        )}
      </div>
    </Card>
  );
};