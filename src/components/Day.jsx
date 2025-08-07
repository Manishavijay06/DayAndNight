import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import "../styles/Day.css";
import sun from "../assets/sun.png";
import bird from "../assets/bird.png";
import branch from "../assets/branch.png";

gsap.registerPlugin(gsap,ScrollTrigger);

export default function Day(){
    return (
    <>
    <div className="day-container">
        <div className="sunAndBirds">
            <div className="sundiv" >
                <img className="sunimg" src={sun} alt="sun"></img>
            </div>
        </div>
        <div className="branchesAndBirds">
            <div className="birdsdiv">
                <img className="birdimg" src={bird} alt="bird"></img>
            </div>
            <div className="branchcdiv">
                <img className="branchimg" src={branch} alt="branch"></img>
            </div>

        </div>
    </div>
    
    </>
    )

    
}