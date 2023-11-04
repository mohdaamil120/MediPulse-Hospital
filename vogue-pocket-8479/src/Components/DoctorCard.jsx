import React from "react";
import {styled} from "styled-components"

const DoctorCard = ({ id, education,experience,image,language,location,name,speciality }) => {
  return (
    <DIV>
      <div className="image">
        <img src={image} />
        {/* <h2>hello</h2> */}
      </div>
      <div className="detail">
        <h2>{name}</h2>
        <p>{education} (experience: {experience} years)</p><br />
        <h4>SPECIALIST</h4>
        <p>{speciality} </p>
        <h4>LOCATION</h4>
        <p>{location}</p><br />
        <p>number: </p>
        <p>Fees:</p>
        <div className="btn">
          <button>Book An Appointment</button>
          <button>Call</button>
        </div>
      </div>
    </DIV>
  );
};

const DIV= styled.div`

/* width: auto; */
 display: flex;
/* justify-content: space-between; */
margin: 5% 0 5% 0;
padding: 2%;
align-items: center;
box-shadow: rgba(14, 45, 25, 0.35) 0px 5px 15px;

.image{
    width: 300px;
    height: 300px;

    /* border: 2px solid pink; */

    img{
/* background-color: red; */
width: 100%;
height: 100%;

object-fit: cover;
/* border: 1px solid blue; */
border-radius: 50%;
overflow: hidden;
/* align-content:center; */
    }
}

.detail{
    margin: auto;
    width: 50%;
    /* border: 2px solid blue; */
   text-align: left;
   padding: 1%;
}
.btn{
    width: 50;
}

`
export default DoctorCard;
