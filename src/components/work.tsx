"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Work() {
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
  
  const work = [
    {
      image: "/work/ml.webp",
      title: "METTLINK - Location Tracking & Incident",
      description: "React, GraphQL, Node.js, PostgreSQL, Microservices",
      link: "METTLINK",
    },
    {
      image: "/work/mioc.webp",
      title: "MIOC – Smart Facility Management",
      description: "React.js, Node.js, WebSocket, Chart.js / D3.js, PostgreSQL",
      link: "METTLINK",
    },
    {
      image: "/work/swdp.webp",
      title: "SAWASDEE  – Airport Premium Service Booking Platform",
      description: "React, GraphQL, Node.js, PostgreSQL, Microservices",
      link: "METTLINK",
    },
    {
      image: "/work/indoormap.webp",
      title: "SAWASDEE App – Indoor Map Feature",
      description: "React, GraphQL, Node.js, PostgreSQL, Microservices",
      link: "METTLINK",
    },
    {
      image: "/work/cms.webp",
      title: "SAWASDEE App – End-to-End Content Management & Display Solution",
      description: "React, GraphQL, Node.js, PostgreSQL, Microservices",
      link: "METTLINK",
    },
    {
      image: "/work/hop.webp",
      title: "Hop Date – Real-time dating platform for live events",
      description: "React, GraphQL, Node.js, PostgreSQL",
      link: "METTLINK",
    },
  ];
  return (
    <motion.section
      id="project"
      className="container scroll-mt-24"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
      style={{ opacity, scale }}
    >
      <div className="text-xl font-bold mb-4">What I’ve Built</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-medium-large">
        {work.map((row) => {
          const { image, title, description, link } = row;
          return (
            <div
              className="archive-item-project cursor-pointer overflow-hidden"
              key={title}
            >
              <div className="overflow-hidden mb-spacing-small">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    loading="lazy"
                    src={image}
                    alt="Example"
                    width={1600}
                    height={900}
                    className="w-full h-auto "
                    sizes="(min-width: 1100px) 80vw, 100vw"
                  />
                </motion.div>
              </div>
              <div className="text-l font-bold">{title}</div>
              <div className="text-m text-stone-400">{description}</div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
