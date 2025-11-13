import { Hero } from "@/components/Hero";
import { ExperienceCard } from "@/components/ExperienceCard";
import { SkillCard } from "@/components/SkillCard";
import { ToolCard } from "@/components/ToolCard";
import { Section } from "@/components/Section";
import { 
  Camera, 
  Film, 
  Users, 
  Palette,
  Mail,
  Linkedin,
  Twitter,
  MapPin,
  Phone
} from "lucide-react";

const Index = () => {
  const experiences = [
    {
      title: "Activity Coordinator",
      company: "Decathlon Summer Camp",
      location: "London",
      date: "Aug 2025 - Sep 2025",
      description: "Planned and led sessions for ~15 children, including indigenous Indian sport Kho Kho.",
      rating: "10",
    },
    {
      title: "Assistant Teacher",
      company: "Anthea Montessori",
      location: "Hyderabad",
      date: "Aug 2024 - Dec 2024",
      description: "Supported development of five children's plays themed around emotions. Provided videography/photography for school events.",
      rating: "10",
    },
    {
      title: "Marketing Internship",
      company: "Akshath Green Tech",
      location: "Hyderabad",
      date: "Jan 2024 - Jun 2024",
      description: "Researched market trends and competitor activity; prepared briefs and summaries for internal presentations.",
      rating: "9",
    },
    {
      title: "Videographer (Volunteer)",
      company: "Pravaha Foundation",
      location: "Hyderabad",
      date: "2023 - Jun 2023",
      description: "Filmed NGO Hackathon event supporting gifted children. Edited highlight videos for internal/external use.",
      rating: "10",
    },
    {
      title: "Assistant to Director",
      company: "Abhinav Danda",
      location: "Hyderabad",
      date: "Jun 2022 - Aug 2022",
      description: "Assisted with props and set decoration; supported daily production logistics. Helped annotate scripts and coordinated background cast.",
      rating: "10",
    },
  ];

  const topSkills = [
    {
      number: "1",
      title: "Le Camilon",
      subtitle: "Location Liaison",
      description: "Scouted and secured filming locations",
      icon: MapPin,
    },
    {
      number: "2",
      title: "Eco Storyteller",
      subtitle: "Planning Director Trio",
      description: "Environmental documentary storytelling",
      icon: Film,
    },
    {
      number: "3",
      title: "Pravaha Foundators",
      subtitle: "People's Head Initiative",
      description: "Hackathon videography and editing",
      icon: Camera,
    },
    {
      number: "4",
      title: "Figma",
      subtitle: "Design & Prototyping",
      description: "UI/UX design for production materials",
      icon: Palette,
    },
  ];

  const tools = [
    { name: "Final Cut Pro", icon: "🎬", rating: "10", level: 90 },
    { name: "Premiere Pro", icon: "Pr", rating: "10", level: 85 },
    { name: "Google Suite", icon: "🗂️", rating: "10", level: 95 },
    { name: "Teamwork", icon: "👥", rating: "10", level: 90 },
    { name: "Script Annotation", icon: "📝", rating: "10", level: 85 },
    { name: "Set Design", icon: "🎨", rating: "10", level: 80 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero />

      {/* Trending Now - Experience */}
      <Section id="experience" title="Trending Now">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </Section>

      {/* Top 10 Skills */}
      <Section title="Top 10 Skills">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {topSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </Section>

      {/* Top Skills - Tools */}
      <Section title="Top Skills">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section title="Education">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ExperienceCard
            title="BA Business with Film & Television"
            company="Columbia College Chicago"
            location="USA"
            date="2022 - Present"
            description="Selected Coursework: Scriptwriting (83%), Television Arts (86.5%), Cinema & TV Production (92%), Entertainment Marketing (72%), Digital Media Strategies (100%)."
            rating="10"
          />
          <ExperienceCard
            title="Documentary Filmmaking Course"
            company="UCL"
            location="London"
            date="Jun 2025 - Jul 2025"
            description="Intensive summer course focused on documentary production techniques and storytelling."
            rating="10"
          />
          <ExperienceCard
            title="Camera Lighting Course"
            company="City Academy"
            location="London"
            date="2024"
            description="Professional training in camera operation and lighting techniques for film and television production."
            rating="10"
          />
        </div>
      </Section>

      {/* Contact Footer */}
      <footer id="contact" className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Get In Touch</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>London, UK</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:daman.kailas@gmail.com" className="hover:text-primary transition-colors">
                    daman.kailas@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+447852629341" className="hover:text-primary transition-colors">
                    +44 7852 629341
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Quick Links</h3>
              <div className="space-y-2">
                <a href="#experience" className="block text-muted-foreground hover:text-primary transition-colors">
                  Experience
                </a>
                <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </a>
                <a href="#education" className="block text-muted-foreground hover:text-primary transition-colors">
                  Education
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Connect</h3>
              <div className="flex gap-4">
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary hover:bg-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary hover:bg-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:daman.kailas@gmail.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary hover:bg-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Daman Kailas. All rights reserved.</p>
            <p className="mt-2">Production Assistant | Film & TV Professional</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;