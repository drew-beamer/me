import Link from "next/link";

const buttonData = {
  "/": {
    name: "Home",
  },
  "/about": {
    name: "About",
  },
  "/projects": {
    name: "Projects",
  },
  "/posts": {
    name: "Posts",
  },
};

export default function Navbar() {
  return (
    <nav className="h-[55px]">
      <div className="h-full flex flex-row items-center mb-12">
        <div className="flex w-full grow">
          <Link href="/">
            <span className="m-0 no-underline hover:cursor-pointer font-bold text-2xl">
              {'<db>'}
            </span>
          </Link>
        </div>
        <div className="fade relative flex flex-row items-start pb-0">
          <div className="relative flex w-[290px] flex-row items-center space-x-0">
            {Object.entries(buttonData).map(([path, { name, width }]) => {
              return (
                <div
                  key={path}
                  style={{ width: width }}
                  className={`rounded-md px-[10px] py-[10px] text-center text-base`}
                >
                  <Link href={path}>
                    {" "}
                    {name}{" "}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
