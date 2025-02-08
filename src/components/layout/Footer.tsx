import { Button } from "../ui/button";

const socialLinks = [
  {
    text: "GitHub",
    href: "https://github.com/drew-beamer",
  },
  {
    text: "LinkedIn",
    href: "https://linkedin.com/in/drewmbeamer",
  },
  {
    text: "Email",
    href: "mailto:andrewmbeamer@gmail.com",
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
            {socialLinks.map(({ text, href }) => (
              <Button
                key={text}
                variant="ghost"
                size="sm"
                asChild
                className="hover:text-primary"
              >
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {text}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
