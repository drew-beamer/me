
export function Button1({ children }) {
    return <button
        className="inline-block px-3 py-1.5 dark:bg-neutral-800 bg-neutral-600 hover:text-neutral-800 text-floral-white font-bold text-sm leading-tight rounded-md hover:bg-green-400 dark:hover:shadow-lg focus:bg-green-400 dark:focus:shadow-lg focus:outline-green-400 focus:ring-0 active:bg-green-400 transition duration-300 ease-in-out">
        {children}
    </button>
}


export function Button2({ children }) {
    return <button
        className="inline-block px-3 py-1.5 dark:bg-neutral-600 bg-neutral-400 rounded-full hover:text-neutral-800 text-floral-white font-bold text-sm leading-tight hover:bg-green-400 dark:hover:shadow-lg focus:bg-green-400 dark:focus:shadow-lg focus:outline-green-400 focus:ring-0 active:bg-green-400 transition duration-300 ease-in-out">
        {children}
    </button>
}