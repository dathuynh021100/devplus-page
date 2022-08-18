import "./Footer.css";
import { BiMap } from "react-icons/bi";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-container">
            <div className="footer-row">
              <div className="footer-cover">
                <h4>DEVELOP THE SKILLS TO MOVE FAST AND STAY AHEAD.</h4>
                <ul className="footer-text">
                  <li className="text-top--footer">
                    Devplus is not a training center, its battle campus for you
                    to level up your skillsets and ready to onboard any projects
                    in our “kindest” companies listing
                  </li>
                </ul>
              </div>
              <div className="footer-cover">
                <h4>FOR DEVPLUS</h4>
                <ul className="footer-text">
                  <li>
                    <a
                      href="https://www.facebook.com/Devplusprogramme "
                      className="footer-link"
                      target="_blank "
                    >
                      {" "}
                      Training space{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/Devplusprogramme "
                      className="footer-link"
                      target="_blank "
                    >
                      Alumni network
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://conext.asia/"
                      className="footer-link"
                      target="_blank "
                    >
                      Connect with experts{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-cover">
                <h4>OUR CAMPUS</h4>
                <ul className="footer-text">
                  <li>
                    <Link to="/one-plus-campus" className="footer-link">
                      One plus (+) Programing foundation
                    </Link>
                  </li>
                  <li>
                    <Link to="/two-plus-campus" className="footer-link">
                      Two plus (++) Skill up and onboard
                    </Link>
                  </li>
                  <li>
                    <a href="# " className="footer-link">
                      Three plus (+++) Become a senior
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-cover cover-top">
                <h4>ADDRESS</h4>
                <ul className="footer-text--right">
                  <BiMap
                    className="fa fa-map-marker"
                    aria-hidden="true"
                  ></BiMap>
                  <li className="text-bottom--footer footer-icon--map">
                    368 Đường Trần Hưng Đạo, An Hải, An Hải Tây, Sơn Trà, Đà
                    Nẵng
                  </li>
                  <FiPhoneCall
                    className="fa fa-phone"
                    aria-hidden="true"
                  ></FiPhoneCall>
                  <li className="text-bottom--footer footer-icon--number">
                    <a href="tel:0368492885"> (+84) 368492885</a>
                  </li>
                  <FiMail
                    className="fa fa-envelope-o"
                    aria-hidden="true"
                  ></FiMail>
                  <li className="text-bottom--footer footer-icon--email">
                    <a href="mailto:hello@stunited.vn ">hello@stunited.vn</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom--container">
            <div className="footer-bottom--row">
              <div className="footer-bottom-cover">
                <div className="footer-logo">
                  <img
                    src="https://devplus.edu.vn/assets/images/devplus/Artboard_2.png"
                    alt="logo"
                  />
                </div>
              </div>
              <div className="footer-bottom-cover">
                <div className="footer-logo-center"></div>
              </div>

              <div className="footer-bottom-cover">
                <ul className="footer-fb">
                  <li className="facebook-footer">
                    <a
                      href="https://www.facebook.com/Devplusprogramme "
                      target="_blank "
                    >
                      <BsFacebook
                        className="fa fa-facebook"
                        aria-hidden="true"
                      ></BsFacebook>
                    </a>
                  </li>
                  <li className="facebook-footer">Facebook</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
