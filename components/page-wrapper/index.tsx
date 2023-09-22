"use client";

import { motion } from "framer-motion";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ y: { type: "tween", duration: 0.25 } }}
      className="mb-24 mt-32 flex w-full max-w-[720px] flex-wrap justify-center px-8 md:px-0"
    >
      {children}
    </motion.div>
  );
}
