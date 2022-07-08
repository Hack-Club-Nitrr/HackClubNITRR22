import React,{useEffect,useRef} from "react";

import "../../App.scss";
import styles from "./team.module.css"
import TeamCard  from "./HorizontalScroll";
export const Team = () => {
const headingText=useRef(null);

  return <div classNameName={styles.body} >
<div className="animation-wrapper">
		<div className="water">
			<ul className="waves">
				<li className="wave-one" style={{backgroundImage: "url('https://i.postimg.cc/7LtCC11Y/wave1.png')"}}></li>
				<li className="wave-two" style={{backgroundImage: "url('https://i.postimg.cc/P5hv05rh/wave2.png')"}}></li>
				<li className="wave-three" style={{backgroundImage: "url('https://i.postimg.cc/63Dyc91k/wave3.png')"}}></li>
				<li className="wave-four" style={{backgroundImage: "url('https://i.postimg.cc/1tg8DgM0/wave4.png')"}}></li>
			</ul>
		</div>
		<div className="boat" style={{backgroundImage: "url('https://i.postimg.cc/GmQTRnHD/boat2.png')"}}></div>
		<div className="cloud" style={{backgroundImage: "url('https://i.postimg.cc/VNkrLZCV/cloud-md.png')"}}></div>
		<div className="cloud2" style={{backgroundImage: "url('https://i.postimg.cc/VNkrLZCV/cloud-md.png')"}}></div>
	</div>
    <div classNameName={styles.banner} ref={headingText}>TEAM</div>
    {/* <TeamCard/> */}
  </div>;
};
