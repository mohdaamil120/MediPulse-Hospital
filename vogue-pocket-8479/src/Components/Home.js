import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import Work from "./Work";
import Testimonial from "./Testimonial";
import About from "./About";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate()

  return (
    <>
    <div className="home-container">
      {/* <Navbar /> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
           Your health is our responsibility
          </h1>
          <p className="primary-text">
          Say Hello to India's top doctors via video consultation, get digital prescriptions, order medicines, book doctor appointments & lab tests, find doctors near 
          </p>
          <button className="secondary-button" onClick={()=>{navigate("/doctor")}}>
            Book Now <FiArrowRight />{" "}
          </button>
          
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
    <div>
      <Work/>
    </div>
    <div>
      <Testimonial/>
    </div>
    <div>
      <About/>
    </div>
    {/* <div>
      <Footer/>
    </div> */}
    </>
  );
};

export default Home;