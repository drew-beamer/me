"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { GithubIcon, InstagramIcon } from "./icons";

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.25,
      staggerChildren: 0.1,
    },
  },
  hidden: { opacity: 0, y: 50 },
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
    <motion.div
      initial="hidden"
      variants={variants}
      animate="visible"
      className="flex flex-row justify-center space-x-4 ">
      {quickLinkData.map((link, i) => {
        return (
          <motion.a
            custom={i}
            animate="visible"
            variants={variants}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            key={link.url}>
            {link.component}
          </motion.a>
        );
      })}
    </motion.div>
  );
}
