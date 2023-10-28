"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Page = {
  name: string;
  path: string;
};

const increaseOpacityOnHover = "hover:opacity-100 transition-all duration-250";

function DesktopNavigationItem({
  page,
  isActive,
}: {
  page: Page;
  isActive?: boolean;
}) {
  return (
    <li className="m-0">
      <Button
        className={cn(
          `${isActive ? "text-primary" : "text-foreground opacity-60"}`,
          increaseOpacityOnHover,
          "px-2 font-normal hover:no-underline"
        )}
        variant="link">
        <Link className="font-normal" href={page.path}>
          {page.name}
        </Link>
      </Button>
    </li>
  );
}

function DesktopNavigation({ pages }: { pages: Page[] }) {
  const pathname = usePathname();

  return (
    <>
      <ul className="flex flex-row grow list-none m-0">
        {pages.map((page) => (
          <DesktopNavigationItem
            key={page.path}
            page={page}
            isActive={pathname.slice(1).startsWith(page.path.slice(1))}
          />
        ))}
      </ul>
      <Link target="_blank" href="https://github.com/drew-beamer">
        <Github
          className={cn("stroke-foreground opacity-60", increaseOpacityOnHover)}
        />
      </Link>
    </>
  );
}

export default DesktopNavigation;
