"use client";

import React, { useEffect, useState } from "react";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Start from "@/components/Start";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  const [showContent, setShowContent] = useState<boolean>(false);

  return (
    <main
      className={`relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip ${
        showContent && "overflow-hidden"
      }`}
    >
      {showContent ? (
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          {/* <Clients /> */}
          <Experience />
          <Approach />
          <Footer />
        </div>
      ) : (
        <Start onAnimationComplete={() => setShowContent(true)} />
      )}
    </main>
  );
}
