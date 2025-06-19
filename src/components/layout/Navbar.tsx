const links = [
  {
    label: "Projects",
    href: "/projects",
  },
];

export default function Navbar() {
  return (
    <header className="sticky flex items-center container justify-between top-0 left-0 w-full z-50 bg-background/50 backdrop-blur-sm h-[var(--navbar-height)]">
      <span className="font-black text-xl">&lt;db&gt;</span>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
