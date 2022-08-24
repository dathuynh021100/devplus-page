import React, { useState,useEffect } from "react";
import { BsFacebook } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import "./Sidebar.css";
import axios from "axios"
import img1 from "../../../Assets/Imgs/1.png";
import img2 from "../../../Assets/Imgs/2.png";
import img3 from "../../../Assets/Imgs/3.png";
import img4 from "../../../Assets/Imgs/4.png";
import img5 from "../../../Assets/Imgs/5.png";
import img6 from "../../../Assets/Imgs/6.png";
const Sidebar = ({ sideBarOpen, sideBarToggle }) => {
  const[sidebar,setSidebar] = useState({});
  const getData = async () =>{
    await axios.get("/api/admin/sidebar/info").then(res =>{
      setSidebar(res.data)
      
    }).catch(err=> console.log(err))
    
  }
  useEffect(()=>{
    getData()
  },[])
  
  
  // console.log(sidebar)
  
  
  
  return (
    <div className={`side-bar ${sideBarOpen ? "side-bar-open" : ""}`}>
      <div className="close-button" onClick={sideBarToggle}>
        <MdClose className="icon" />
      </div>

      <div className="side-bar-logo">
        <img
          src={sidebar.logo}
          alt="website logo"
        />
      </div>

      <div className="description">
        <span>
          {sidebar.text}
        </span>
      </div>

      <div className="sidebar-images">
        {sidebar.images?.map((image, index) => {
          return (
            <div className="image" key={index}>
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
      <div className="map">
        <img src={sidebar.map} alt="" />
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
