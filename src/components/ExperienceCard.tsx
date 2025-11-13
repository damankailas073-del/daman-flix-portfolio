import { useState } from "react";
import { Card } from "@/components/ui/card";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
  rating?: string;
  image?: string;
}

export const ExperienceCard = ({ 
  title, 
  company, 
  location, 
  date, 
  description,
  rating = "10",
  image 
}: ExperienceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded border-none bg-card transition-all duration-300 hover:scale-105 hover:z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ boxShadow: isHovered ? 'var(--shadow-card-hover)' : 'var(--shadow-card)' }}
    >
      {/* Image or Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-card to-muted">
        {image && (
          <img 
            src={image} 
            alt={title}
            className="h-full w-full object-cover opacity-40"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative flex h-full flex-col justify-end p-4 md:p-6">
        {/* Rating Badge */}
        <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded bg-primary text-xs font-bold text-primary-foreground">
          {rating}
        </div>

        {/* Title and Company */}
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-foreground md:text-xl line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground md:text-base">
            {company} • {location}
          </p>
          <p className="text-xs text-muted-foreground md:text-sm">
            {date}
          </p>
        </div>

        {/* Description - shows on hover */}
        <div 
          className={`mt-2 overflow-hidden transition-all duration-300 ${
            isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-sm text-foreground/90 line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};