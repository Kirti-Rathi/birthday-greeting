"use client";

import React from "react";
import MusicPlayer from "./components/musicPlayer";
import Homepage from "./components/homepage";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Homepage />
      <MusicPlayer />
    </div>
  );
};

export default Home;
