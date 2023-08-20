import { gsap } from "gsap";
import { useRef } from "react";
import { useEffect } from "react";
import People from "./images/people.webp";
import "./App.scss";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

function App() {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container::after");

  useEffect(() => {
    gsap
      .timeline()
      .to(container.current, {
        duration: 0,
        css: { visibility: "visible" },
      })
      .to(imageReveal, {
        duration: 1.4,
        width: "0%",
        ease: "power2.easeInOut",
      })
      .from(image.current, {
        duration: 1.4,
        scale: 1.6,
        ease: "power2.easeInOut",
        delay: -1.6,
      });
  });

  return (
    <section className="main">
      <div ref={container} className="main__container">
        <>
          <div className="img-container">
            <img ref={image} src={People} alt="people photo" />
          </div>
        </>
      </div>
    </section>
  );
}

export default App;
