import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "./Section";
import styles from "./team.module.css"

gsap.registerPlugin(ScrollTrigger);

function useArrayRef() {
  const refs = useRef([]);
  refs.current = [];
  return [refs, (ref) => ref && refs.current.push(ref)];
}

const HorizontalScroll = () => {
  const [sectionData, setSectionData] = useState(() => [
    {
      id: 0,
      text: "Section 1",
      img:
        "https://images.unsplash.com/photo-1577641764077-f100e8eb3f9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80"
    },
    {
      id: 1,
      text: "Section 2",
      img:
        "https://images.unsplash.com/photo-1577641309712-a3e91c0be31e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: 2,
      text: "Section 3",
      img:
        "https://images.unsplash.com/photo-1577641817566-06e052e906a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    }
  ]);
  const sectionsContainer = useRef();
  const [sections, setSectionsRef] = useArrayRef();

  useLayoutEffect(() => {
    const totalSections = sections.current.length;

    gsap.to(sections.current, {
      xPercent: -100 * (totalSections - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionsContainer.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalSections - 1),
        end: () => "+=" + sectionsContainer.current.offsetWidth
      }
    });
  }, []);

  return (
    <div className={styles.container} ref={sectionsContainer}>
      {sectionData.map((section, index) => (
        <Section
          key={section.id}
          ref={setSectionsRef}
          value={section}
          // className="section"
          text={section.text}
          img={section.img}
        />
      ))}
    </div>
  );
};

export default HorizontalScroll;
