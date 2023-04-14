'use client';

import { AnimatePresence, motion } from "framer-motion";

export default function PageWrapper({ children }: { children: React.ReactNode }) {

    return <AnimatePresence>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ y: { type: "tween", duration: 0.25 } }}
            className="w-full max-w-[720px] px-8 md:px-0 flex flex-wrap mb-24 justify-center"
        >
            {children}
        </motion.div>
    </AnimatePresence>
}
