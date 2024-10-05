import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    const animatedChars = document.querySelectorAll(".animated-char-container span");

    animatedChars.forEach((char, index) => {
      char.style.animationDelay = `${index * 0.2}s`;
    });

    const totalChars = animatedChars.length;
    const description = document.querySelector('.description');
    const button = document.querySelector('.learn-btn');

    const animationStartDelay = totalChars * 0.2 * 1000;
    description.style.animationDelay = `${animationStartDelay}ms`;
    
    const descriptionAnimationDuration = 1000;
    button.style.animationDelay = `${animationStartDelay + descriptionAnimationDuration}ms`;
  }, []);

  return (
    <section className="section-banner">
      <div className="container banner-container flex justify-start items-center">
        <div className="banner-content">
          <p className="text-[2.4rem] text-white">
            {"// We Create Leading Digital Products"}
          </p>
          <div className="animated-char-container">
            <span>s</span>
            <span>o</span>
            <span>f</span>
            <span>t</span>
            <span>w</span>
            <span>a</span>
            <span>r</span>
            <span>e</span>
            <span>&nbsp;</span>
            <span>i</span>
            <span>t</span>
            <br />
            <span>o</span>
            <span>u</span>
            <span>t</span>
            <span>s</span>
            <span>o</span>
            <span>u</span>
            <span>r</span>
            <span>c</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
          </div>
          <p className="description white my-6">
            Global Talent, Local Expertise:
            <br />
            Infowave Solution Delivers Seamless Software IT Solutions.
          </p>
          <a href="#contact" className="learn-btn">
            learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;