import './App.css';
import Day from './components/Day';
import React, { useRef } from "react";
import gsap from "gsap";
import Night from './components/Night';

function App() {
  const containerRef = useRef();

  const scrollToNight = () => {
    console.log("hi night");
    gsap.to(containerRef.current, {
      y: "0vh", 
      duration: 1,
      ease: "power2.inOut",
    
    });
  };

  const scrollToDay = () => {
    console.log('hi day');
      gsap.to(containerRef.current, {
      y: "-100vh", 
      duration: 1,
      ease: "power2.inOut",
    });
  };
  return (
    <>
    <div style={{ overflow: "hidden", height: "100vh" }}>
      <div ref={containerRef} style={{ position: "relative", height: "200vh" }}>
        <div style={{ height: "100vh" }}>
          <Night onOwlClick={scrollToDay} />
        </div>
        <div style={{ height: "100vh" }}>
          <Day onBirdClick={scrollToNight} />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
