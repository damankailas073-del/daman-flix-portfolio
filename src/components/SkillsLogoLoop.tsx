import { LogoLoop } from './LogoLoop';
import { 
  SiAdobepremierepro,
  SiGoogledrive,
  SiFigma,
  SiCanva,
  SiNotion,
  SiTrello,
  SiSlack,
  SiAsana,
} from 'react-icons/si';
import { Film, Camera, Clapperboard, Video, Palette, Users } from 'lucide-react';

export const SkillsLogoLoop = () => {
  const skillLogos = [
    { node: <Film />, title: "Final Cut Pro", href: "#" },
    { node: <SiAdobepremierepro />, title: "Adobe Premiere Pro", href: "https://www.adobe.com/products/premiere.html" },
    { node: <SiGoogledrive />, title: "Google Suite", href: "https://workspace.google.com" },
    { node: <Camera />, title: "Sony XDCAM", href: "#" },
    { node: <Video />, title: "DSLR Videography", href: "#" },
    { node: <Clapperboard />, title: "Script Annotation", href: "#" },
    { node: <Palette />, title: "Set Decoration", href: "#" },
    { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
    { node: <SiCanva />, title: "Canva", href: "https://www.canva.com" },
    { node: <SiNotion />, title: "Notion", href: "https://www.notion.so" },
    { node: <SiTrello />, title: "Trello", href: "https://trello.com" },
    { node: <SiSlack />, title: "Slack", href: "https://slack.com" },
    { node: <SiAsana />, title: "Asana", href: "https://asana.com" },
    { node: <Users />, title: "Teamwork", href: "#" },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl text-center">
          Skills & Tools
        </h2>
        
        <div className="relative" style={{ height: '120px' }}>
          <LogoLoop
            logos={skillLogos}
            speed={50}
            direction="left"
            logoHeight={56}
            gap={60}
            hoverSpeed={10}
            scaleOnHover
            fadeOut
            fadeOutColor="rgba(10, 10, 10, 1)"
            ariaLabel="Skills and tools expertise"
          />
        </div>
      </div>
    </div>
  );
};