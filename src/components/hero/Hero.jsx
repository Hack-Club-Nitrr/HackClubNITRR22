import React from "react";
import style from "./hero.module.css";
import logo from "../../img/icon-rounded.png";
import boat from "../../img/boat2.png";
import { CgMenuMotion } from "react-icons/cg";
import Starshow from "./Starshow";
import Typewriter from 'typewriter-effect';

export const Hero = () => {
  return (
    <div className={style.container}>
         <div className={style.moonContainer}>
        <div className={style.moon}></div>
        <div className={style.moonlayerone}></div>
        <div className={style.moonlayertwo}></div>
        <div className={style.moonlayerthree}></div>
      </div>
        <div className={style.banner}> Hack Club NITRR@</div>
        <div className={style.typewriter}> 
        <Typewriter
         options={{
            strings: ['Collaborate', 'Build','Showcase'],
            autoStart: true,
            loop: true,
          }}
  
/>
</div>
              <div className={style.starContainer}>
        <Starshow />
      </div>
      <div className={style.logoContainer}>
        <img src={logo} alt="logo" className={style.logo} />
      </div>
      <div className={style.burger}>
        <CgMenuMotion />
      </div>
     
      <div class={style.ocean}>
        <div class={style.wave}></div>
        <div class={style.wave}></div>
      </div>


      <img src={boat} alt="boat" className={style.boat} />
    </div>
  );
};
