import AboutDev from "../../Components/AboutDev/AboutDev";
import Admission from "../../Components/Admission/Admission";
import Banner from "../../Components/Banner/Banner";
import Campus from "../../Components/Campus/Campus";
import Common from "../../Components/Common/Common";
import Footer from "../../Components/Footer/Footer";
import Receive from "../../Components/Receive/Receive";
import Review from "../../Components/Review/Review";
import Navbar from "../../Components/Header/Navbar/Navbar";
import Loading from "../../Components/Loading/Loading";
import React, { useState, useEffect } from "react";
function HomePage() {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 10000);
  // }, []);
  return (
    // <div>
    //   {loading ? (
    //     <Loading />
    //   ) : (
    <>
      <Navbar />
      <Banner />
      <AboutDev />
      <Receive />
      <Campus />
      <Admission />
      <Common />
      <Review />
      <Footer />
    </>
    // )}
    // </div>
  );
}
export default HomePage;
