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
    <footer className="bg-card/60 relative mt-auto w-full border-t backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Drew Beamer. All rights reserved.
            </p>
            <p className="text-muted-foreground mt-1 text-xs">
              Built with Astro, React, and Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map(({ text, href }) => (
              <a
                key={text}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
