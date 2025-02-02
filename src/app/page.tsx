import Hero from "@/components/Hero";
import Newest from "@/components/Newest";
import React from "react";

const Home = () => {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
    </div>
  );
};

export default Home;
