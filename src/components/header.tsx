"use client";
import { motion } from "framer-motion";

export default function Header({}) {
  return (
    <header className="flex flex-col md:flex-row items-center justify-center h-[140px] w-full px-2 md:px-20 gap-5 md:gap-[0]">
      <div className="flex flex-row gap-tiny text-m">
        <div className="font-semibold text-mint">{"_<"}</div>
        <div
          className="font-semibold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Panuwat Suwanritdej
        </div>
        <div className="text-stone-400 hidden md:block">Software Engineer</div>
      </div>

      <div className="flex flex-row items-center md:ml-auto">
        <motion.button
          className="gray"
          whileHover={{ backgroundColor: "var(--mint)", color: "#000" }}
          transition={{ duration: 0 }}
        >
          <a
            href="/resume/Resume-Panuwat.pdf"
            download="resume_panuwat_suwanritdej.pdf"
          >
            Download my resume 👈
          </a>
        </motion.button>
      </div>
    </header>
  );
}
