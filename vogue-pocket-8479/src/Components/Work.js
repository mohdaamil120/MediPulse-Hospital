import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Gynecologist/Obstetrician",
      text: "Explore for women's health,pregnency and get guidence",
    },
    {
      image: ChooseMeals,
      title: "Dentist",
      text: "Teething troubles? Schedule dental checkup ",
    },
    {
      image: DeliveryMeals,
      title: "Dietitan/Nutrition",
      text: "Get guidence on eating right,weight managemnt and sports nutrition",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h2 className="primary-subheading">Work</h2>
        <h3 className="primary-heading">Our Diffrent Departments</h3>
        <p className="primary-text">
        Providing high-quality, trusted, and accessible healthcare is our reason for being
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;