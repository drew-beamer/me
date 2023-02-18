import Link from "next/link";


function BaseButton1({ children }) {
    return <button
        className="inline-block mt-3 px-6 py-1.5 bg-neutral-800 hover:text-neutral-800 text-floral-white font-bold text-sm leading-tight rounded-md hover:bg-green-400 hover:shadow-lg focus:bg-green-400 focus:shadow-lg focus:outline-green-400 focus:ring-0 active:bg-green-400 transition duration-150 ease-in-out">
        {children}
    </button>
}

export function Button1({ children, internal, href }) {
    if (internal) {
        return <Link href={href}>
            <BaseButton1>{children}</BaseButton1>
        </Link>
    } else {
        return <a target="_blank" href={href}>
            <BaseButton1>{children}</BaseButton1>
        </a>
    }


}