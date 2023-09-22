"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { GithubIcon, InstagramIcon } from "./icons";

export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.15,
    },
  },
};
export const dropUpVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      mass: 0.1,
    },
  },
};

export default function QuickLinks() {
  const quickLinkData = useMemo(
    () => [
      {
        component: <GithubIcon size="24" />,
        url: "https://github.com/drew-beamer",
      },
      {
        component: <InstagramIcon size="24" />,
        url: "https://www.instagram.com/crazed4birds/",
      },
    ],
    []
  );

  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-row space-x-4 items-center justify-center w-full">
      {quickLinkData.map((link, i) => {
        return (
          <motion.p key={link.url} variants={dropUpVariants}>
            <motion.a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.component}
            </motion.a>
          </motion.p>
        );
      })}
    </motion.ul>
  );
}
