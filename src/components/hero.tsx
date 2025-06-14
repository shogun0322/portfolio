"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="flex flex-col items-center justify-center text-center gap-small"
      >
        <Image
          alt=""
          width={104}
          height={104}
          loading="lazy"
          src="/hero/sho.png"
        />
        <div className="text-l font-bold">Hey there 👋 I'm Sho.</div>

        <div className="text-2xl font-bold max-w-[700px]">
          Full-stack Developer building scalable and real-world web & mobile
          applications.
        </div>

        <motion.button
          className="mint"
          whileHover={{ backgroundColor: "var(--gray)", color: "#fff" }}
          transition={{ duration: 0 }}
        >
          <a href="#project"> Explore Projects</a>
        </motion.button>
      </motion.div>
    </section>
  );
}
