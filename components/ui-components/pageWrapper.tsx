'use client';

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageWrapper({ children }: { children: React.ReactNode }) {

    return <motion.div
        initial={{ opacity: 0, x: -250 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ x: { type: "spring", stiffness: 50, delay: 0.1, duration: 0.75 } }}
    >
        {children}
    </motion.div>
}
