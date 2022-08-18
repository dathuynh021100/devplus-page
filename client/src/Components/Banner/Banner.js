import React from "react";
import "./Banner.css";
import { useInView } from "react-intersection-observer";
const Banner = () => {
  const { ref: bannerRef, inView: bannerVisible } = useInView({
    triggerOnce: true,
  });
  return (
    <section ref={bannerRef} id="banner">
      <div className="container">
        <div className="banner-img">
          <img
            src={require("../../Assets/Imgs/Devplus_missions.webp")}
            alt=""
          />
        </div>
        <div className="banner-body">
          <h1 className={`${bannerVisible ? "fade-left" : ""}`}>
            Devplus Will Support The Early Stage Developers Go The Right Career
            Path
          </h1>
          <p className={`${bannerVisible ? "fade-right" : ""}`}>
            Devplus is not a training center, it's battle campus for you to
            level up your skillsets and ready to onboard any projects in our
            “kindest” companies listing
          </p>
          <a href="# ">
            <button className={`banner-btn ${bannerVisible ? "fade-up" : ""}`}>
              Learn More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Banner;
