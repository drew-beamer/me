"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Page = {
  name: string;
  path: string;
};

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
        className={`${
          isActive ? "text-primary" : "text-foreground opacity-60"
        }  hover:opacity-100 transition-all duration-250 hover:no-underline px-2`}
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
    <ul className="flex flex-row list-none m-0">
      {pages.map((page) => (
        <DesktopNavigationItem
          key={page.path}
          page={page}
          isActive={pathname.slice(1).startsWith(page.path.slice(1))}
        />
      ))}
    </ul>
  );
}

export default DesktopNavigation;
