import Link from "next/link";
import DesktopNavigation from "./desktop-nav";

const pages = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Posts",
    path: "/posts",
  },
];

export default function Navigation() {
  return (
    <header className="bg-background/70 backdrop-blur-xl bg-opacity-90 border-b-border border-b-2 h-[4rem] flex flex-column items-center justify-center w-full px-4 sticky top-0 ">
      <nav className="flex flex-row items-center w-full max-w-[1400px] grow">
        <Link href="/">
          <h4 className="mr-3 my-0 text-foreground">{"<db>"}</h4>
        </Link>
        <div>
          <DesktopNavigation pages={pages} />
        </div>
      </nav>
    </header>
  );
}
