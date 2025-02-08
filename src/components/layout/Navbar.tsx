import type React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      setHasScrolled(scrollPosition > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "flex justify-between items-center bg-card/0 py-1 px-6 fixed top-0 left-0 right-0 z-50 rounded-b-xl transition-colors duration-300",
        hasScrolled && "bg-card/60 backdrop-blur-md"
      )}
    >
      <div className="text-lg font-mono">
        <a href="/">Drew Beamer &#128640;</a>
      </div>
      <div className="flex space-x-1 rounded-full text-sm font-sans">
        <Button variant="ghost" className="font-normal" asChild>
          <a href="/">Home</a>
        </Button>
        <Button variant="ghost" className="font-normal" asChild>
          <a href="/projects">Projects</a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
