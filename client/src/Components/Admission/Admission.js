import "./Admission.css";
import { useInView } from "react-intersection-observer";
const Admission = () => {
  const { ref: admissionRef, inView: admissionVisible } = useInView({
    triggerOnce: true,
  });
  return (
    <section className="admission" ref={admissionRef}>
      <div className="admission-container">
        <div className="img-admission">
          <img
            src={require("../../Assets/Imgs/Admission_for_2021.webp")}
            alt=""
          />
        </div>
        <div
          className={`content-admission ${admissionVisible ? "fade-up" : ""}`}
        >
          <p id="title-admission">Admission for 2021</p>
          <p id="text-admission">
            Disclaimer: This position is expected to start around Feb 2022 and
            continue through the entire Summer term. We ask for a minimum of 12
            weeks, full-time, for most internships. Please consider before
            submitting an application.
            <br />
            Devplus aims to provide students the chance to work with our clients
            and awesome mentors to level up your programing skillset in the
            RIGHT path. With your education and experience, you will be able to
            take on real-world challenges from day one.
          </p>
          <button className="button" href="">
            <span id="button-admission">APPLY NOW</span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Admission;
