import { Button } from "@/components/ui/button";
import { Play, Info, Mail, Linkedin, Twitter, FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Film production set" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl font-black tracking-tight text-foreground md:text-7xl lg:text-8xl">
              DAMAN KAILAS
            </h1>
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl lg:text-4xl">
              Production Assistant Portfolio
            </h2>
            
            {/* Badge */}
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-sm font-bold text-primary-foreground">
                3+
              </div>
              <span className="text-lg font-medium text-muted-foreground">
                years diverse experience
              </span>
            </div>

            {/* Description */}
            <p className="max-w-lg text-base text-foreground md:text-lg">
              Entry-Level Production Assistant in Film/TV, skilled in script annotation, set storytelling, editing, and photography.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="h-5 w-5 fill-current" />
                View Portfolio
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="gap-2 bg-secondary/50 hover:bg-secondary text-secondary-foreground font-semibold px-8 py-6 text-lg backdrop-blur-sm"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Info className="h-5 w-5" />
                More Info
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-card hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-card hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:daman.kailas@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-card hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="#resume"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-card hover:bg-primary transition-colors"
                aria-label="Resume"
              >
                <FileText className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};