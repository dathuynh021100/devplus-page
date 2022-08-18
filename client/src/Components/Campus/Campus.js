import React from "react";
import "./Campus.css";
import { useInView } from "react-intersection-observer";
import onePlus from "../../Assets/Imgs/One_plus.png";
import twoPlus from "../../Assets/Imgs/Two_plus.png";
import threePlus from "../../Assets/Imgs/Three_plus.png";
const dataCampus = [
  {
    img: onePlus,
    item: "One plus (+) Programing foundation",
  },
  {
    img: twoPlus,
    item: "Two plus (++) Skill up to to get ready",
  },
  {
    img: threePlus,
    item: "Three plus (+++) How to become a senior",
  },
];

function Campus() {
  const { ref: campusRef, inView: campusVisible } = useInView({
    triggerOnce: true,
  });
  return (
    <section className="our-campus" ref={campusRef}>
      <div className="content-campus">
        <div className="campus-container">
          <div className="campus-heading">
            <h2>Our main campus</h2>
          </div>
          <div className="campus-row">
            {dataCampus.map((title, index) => (
              <div
                className={`campus-cover ${campusVisible ? "fade-up" : ""}`}
                key={index}
              >
                <div className="campus-size">
                  <div className="campus-img">
                    <img src={title.img} alt="one plus" />
                  </div>
                  <div className="campus-title">
                    <h3>{title.item}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Campus;
