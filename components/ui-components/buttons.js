
export function Button1({ children }) {
    return <button
        className="inline-block px-3 py-1.5 bg-neutral-700 rounded-lg hover:bg-green-400 hover:text-neutral-900 transition-color duration-300 ease-in">
        {children}
    </button>
}