export function Button1({ children }) {
  return (
    <button className="transition-color inline-block rounded-lg bg-neutral-700 px-3 py-1.5 duration-300 ease-in hover:bg-green-400 hover:text-neutral-900">
      {children}
    </button>
  );
}
