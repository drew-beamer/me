import { Code, Network, Mail } from "lucide-react";
import { Button } from "../ui/button";

const socialLinks = [
  {
    icon: Code,
    href: "https://github.com/drew-beamer",
    label: "GitHub",
  },
  {
    icon: Network,
    href: "https://linkedin.com/in/drewmbeamer",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:andrewmbeamer@gmail.com",
    label: "Email",
  },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full border-t bg-card/60 backdrop-blur-sm relative">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Drew Beamer. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with Astro, React, and Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-primary"
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
