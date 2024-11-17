"use client";
import { useEffect } from "react";
import { trackPageView } from "@/lib/analytics";

import About from "@/components/about";
import Intro from "@/components/intro";
import More from "@/components/more";
import Welcome from "@/components/welcome";

export default function Home() {
  useEffect(() => {
    trackPageView("port view");
  }, []);
  return (
    <>
      <Welcome />
      <Intro />
      <About />
      <More />
    </>
  );
}
