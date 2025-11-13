import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, title, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`w-full py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};