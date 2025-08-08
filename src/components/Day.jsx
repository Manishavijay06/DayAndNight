import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import "../styles/Day.css";
import sun from "../assets/sun.png";
import bird from "../assets/bird.png";
import branch from "../assets/dayBranch.png";

gsap.registerPlugin(ScrollTrigger);

export default function Day({onBirdClick}){
    const sundivRef=useRef(null);
    const birdRef=useRef(null);

    useGSAP(()=>{
        gsap.fromTo(sundivRef.current,{
            x:"-800px",
            scale:"1",
        },{
            x:"-1250px",
            scale:"1.5",
            duration:10,
            ease:"power2.out",
            ScrollTrigger:{
                trigger:sundivRef.current,
                start:"top 60%",
                end:"top 40%",
                scrub:true,
                markers:true,
            },
        })
    }) ;

    const handleClick=()=>{
        gsap.to(sundivRef.current, {
            rotation: "+=360",
            duration: 5,
            ease:"power1",
          });
    };

    const handleMouseEnter=()=>{
        gsap.fromTo(
            birdRef.current,
            { y: 0 },
            {
              y: -700,
              duration: 0.4,
              ease: "bounce.out",
              yoyo: true,
              repeat: 1,
            }
          );      
    };

    return (
    <>
    <div className="day-container">
        <div className="sunAndBirds">
            <div className="sundiv" ref={sundivRef} onMouseEnter={handleClick}>
                <img className="sunimg" src={sun} alt="sun"></img>
            </div>
        </div>
        <div className="branchesAndBirds">
            <div className="birdsdiv">
                <img className="birdimg" ref={birdRef} src={bird} alt="bird" onMouseEnter={handleMouseEnter} onClick={onBirdClick}></img>
            </div>
            <div className="branchcdiv">
                <img className="branchimg" src={branch} alt="branch" ></img>
            </div>

        </div>
    </div>
    
    </>
    )

    
}