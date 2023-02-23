'use client';

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageWrapper({ children }: { children: React.ReactNode }) {

    return <motion.div
        key={usePathname()}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 175 }}
    >
        {children}
    </motion.div>
}
