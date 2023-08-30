"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-2">
        After graduating with a degree in{" "}
        <span className="font-medium">Multimedia Technologies</span>, I spent a decade in the
        financial services industry working for major banks in the UK. I then enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is turning designs into functioning code.
        My core stack is{" "}
        <span className="font-medium">
          React.js, React Native, TypeScript and AWS
        </span>
        . I am always looking to learn new technologies and am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I spend a lot of time either playing or 
        watching sport with friends and family. I also enjoy{" "}
        <span className="font-medium">nature</span>, I'm always content when I'm outdoors surrounded by nature, looking for animals.
      </p>
    </motion.section>
  );
}