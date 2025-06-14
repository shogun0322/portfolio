"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CounterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Create opacity and scale animations based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <section
      ref={sectionRef}
      className="container relative flex flex-col items-center justify-center text-center"
    >
      <motion.div style={{ opacity, scale }}>
        <div className="z-[-1] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3,delay: 0.1  }}
            viewport={{ once: false }}
            className="flex flex-row gap-[0] text-[37rem] bg-gradient-to-b from-[#0ECFCD] to-black bg-clip-text text-transparent font-bold"
          >
            5<span className="hidden md:block">+</span>
          </motion.div>
        </div>
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <div className="text-2xl font-bold mt-100 mb-40">Years in</div>
            <div className="text-l font-bold">
              Still love turning messy specs into fast,
              <br />
              reliable, full-stack apps.
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
