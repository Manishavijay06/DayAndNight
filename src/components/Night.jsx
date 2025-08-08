import "../styles/Night.css";
import moon from "../assets/full-moon.png";
import stars from "../assets/sparkling.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import nytbranch from "../assets/branch.png";
import owl from "../assets/owl.png";
import shootingstar from "../assets/shooting-star.png";

gsap.registerPlugin(ScrollTrigger);

export default function Night({onOwlClick}){
    const moonRef=useRef(null);
    const starsblinkRef=useRef(null);
    const shootStarRef=useRef(null);
    const owlRef=useRef(null);

    useGSAP(()=>{
        gsap.fromTo(moonRef.current,{
            x:"-800px",
            scale:"2",
        },{
            x:"600px",
            scale:"1",
            duration:10,
            ease:"power2.inOut",
            ScrollTrigger:{
                trigger:moonRef.current,
                start:"top 60%",
                end:"top 40%",
                scrub:true,
                markers:true,
            },
            onComplete:()=>{
                gsap.to(shootStarRef.current,{
                    onStart:()=>{
                        gsap.fromTo(shootStarRef.current,{opacity:1},{opacity:0.4,repeat:-1,duration:3,ease:"power1.inOut"})
                    },
                    x:"-150vw",
                    y:"100vh",
                    repeat:-1,
                    duration:14,    
                })
            },
        })
        gsap.fromTo(starsblinkRef.current,{
            opacity:0.3,
            duration:1,
        },{
            opacity:1,
            duration:1,
            repeat:-1,
            yoyo:true,
        })
    },[])

    const handleClick=()=>{
        gsap.fromTo(owlRef.current,
            { y: 0 ,x:0},
            {
              x:200,
              y:800,
              duration:2,
              ease: "bounce.out",
              yoyo: true,
              onComplete:()=>{
                gsap.to(owlRef.current,{
                    y:0,
                    x:0,
                })
              },
            })
    };
    return( 
    <>
    <div className="night-container">
        <div className="shooting-star" ref={shootStarRef}>
            <img className="shoot-star" src={shootingstar} alt="shootingStar"></img>
        </div>
        <div className="moonandstars">
            <div className="moon-move " ref={moonRef}>
                <img className="moon" src={moon} alt="moon" />
            </div>
            <div className="stars-blink1" ref={starsblinkRef}>
                <img className="stars1" src={stars} alt="stars" />
                <img className="stars2" src={stars} alt="stars" />
                <img className="stars3" src={stars} alt="stars" />
            </div>
            
        </div>
        <div className="branchesandbirds">
                <img className="branch"  src={nytbranch} alt="nytbranch"></img>
                <img className="owl" src={owl} alt="owl" onMouseEnter={handleClick} onClick={onOwlClick} ref={owlRef}></img>          
        </div>
    </div>
    </>
    )
}