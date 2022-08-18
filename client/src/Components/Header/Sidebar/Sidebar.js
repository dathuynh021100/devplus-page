import React from "react";
import { BsFacebook } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import "./Sidebar.css";
import img1 from "../../../Assets/Imgs/1.png";
import img2 from "../../../Assets/Imgs/2.png";
import img3 from "../../../Assets/Imgs/3.png";
import img4 from "../../../Assets/Imgs/4.png";
import img5 from "../../../Assets/Imgs/5.png";
import img6 from "../../../Assets/Imgs/6.png";
const Sidebar = ({ sideBarOpen, sideBarToggle }) => {
  const images = [
    {
      id: 1,
      link: img1,
    },
    {
      id: 2,
      link: img2,
    },
    {
      id: 3,
      link: img3,
    },
    {
      id: 4,
      link: img4,
    },
    {
      id: 5,
      link: img5,
    },
    {
      id: 6,
      link: img6,
    },
    {
      id: 6,
      link: img6,
    },
  ];
  return (
    <div className={`side-bar ${sideBarOpen ? "side-bar-open" : ""}`}>
      <div className="close-button" onClick={sideBarToggle}>
        <MdClose className="icon" />
      </div>

      <div className="side-bar-logo">
        <img
          src="https://devplus.edu.vn/assets/images/Artboard_2.png"
          alt="website logo"
        />
      </div>

      <div className="description">
        <span>
          Devplus's mission is filling the gap between school and corporate,
          reduce in-house training cost and effort for IT companies.
        </span>
      </div>

      <div className="sidebar-images">
        {images.map((image, index) => {
          return (
            <div className="image" id={image.id} key={index}>
              <img src={image.link} alt="" />
            </div>
          );
        })}
      </div>
      <div className="map">
        <img src={require("../../../Assets/Imgs/map.png")} alt="" />
      </div>

      <div className="facebook">
        <a href="https://www.facebook.com/Devplusprogramme">
          <BsFacebook />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
