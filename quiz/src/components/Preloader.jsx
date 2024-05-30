import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";

export default function Preloader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <img width={300} src="/assets/2152.jpg" alt="icon" />
      <div className="texts-container">
        
        <span style={{ color: "#6a4bd6" }}>Quize</span>
        <span style={{ color: "#ffbe06" }}>hazır</span>
        <span style={{ color: "#18b0fa" }}>mısın?</span>
      </div>
    </div>
  );
}
