import "./Common.css";
import { useState } from "react";
import { FiBellOff, FiBell } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import Iframe from "react-iframe";
const data = [
  {
    title: "Do I need to be fulltime during the campus?",
    answer:
      "Yes, it’s mandatory. Fulltime as well as full commitment in order to obtain the best achievement.",
  },
  {
    title: "Does Devplus offer free courses?",
    answer:
      "Yes, it’s kind of a scholarship. But, you need to pass our challenge through test and interview round.",
  },
  {
    title: "Which course will be suitable with me?",
    answer:
      "The first plus (+) course is designed to students who would like to join the OJT (on-job-train) programme. Next level, the second plus (++) course will suitable for one who got the first plus or fresher, who would like to be trained in order to ready to onboard the real projects. The third plus (+++) course is intended to the alumni of the second plus degree or junior who would like to reach a specific tech-stack: AI, Blockchain, Devops...",
  },
  {
    title: "Does Devplus guarantee a job after graduating?",
    answer:
      "Yes, it’s could be a good job. Once you get the second plus (++) you will ready to onboard the projects of our partners, the most highly recommended places to work.",
  },
];
function Common() {
  const [selected, setSelected] = useState(null);
  const [poped, setPoped] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const openPopup = () => {
    if (poped === 1) {
      return setPoped(null);
    }
    setPoped(1);
  };

  return (
    <section className="concern">
      <div className="common-side">
        <div className="common-container">
          <div className="faq-side">
            <div className="faq-title">
              <h2 className="text-part">Some common concerns</h2>
            </div>
            <div className="faq-content">
              <div className="accordition">
                {data.map((item, i) => (
                  <div className="accordion-item" key={i}>
                    <button
                      className={
                        selected === i
                          ? "accordion-header active"
                          : "accordion-header"
                      }
                      onClick={() => toggle(i)}
                    >
                      {selected === i ? (
                        <FiBellOff className="fa"></FiBellOff>
                      ) : (
                        <FiBell className="fa"></FiBell>
                      )}

                      {item.title}
                    </button>
                    <div
                      className={
                        selected === i
                          ? `answer-show active item${i}`
                          : "answer-show"
                      }
                    >
                      {item.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Video Area */}
          <div className="video-side">
            <div className="img-part">
              <div className="popup-videos" onClick={() => openPopup()}>
                <FaPlay className="i fa fa-play"></FaPlay>
              </div>
            </div>
          </div>
        </div>
      </div>
      {poped === 1 ? (
        <div className="popup-video" onClick={() => openPopup()}>
          <div className="close-span" onClick={() => openPopup()}>
            &times;
          </div>
          <Iframe
            className="mfp-iframe"
            frameBorder={0}
            url="https://www.youtube.com/embed/mUjhiT0zSKI"
          />
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}
export default Common;
