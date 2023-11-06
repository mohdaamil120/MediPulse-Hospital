import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {styled} from "styled-components"

const DoctorCard = ({ id, education,experience,image,location,name,speciality,mobile,fees }) => {

  const navi= useNavigate();

  return (
    <DIV>
      <div className="main">
      <div className="image">
        <img src={image} />
      </div>
      <div className="detail">
        <h3 style={{color:"#145723"}}>{name}</h3>
        <p>{education} (experience: {experience} years)</p>
        <h4 style={{color:"#145723"}}>SPECIALIST</h4>
        <p>{speciality} </p>
        <h4 style={{color:"#145723"}}>LOCATION</h4>
        <p>{location}</p>
        <p>number:{mobile} </p>
        <p>Fees:Rs. {fees} </p>
        
      </div>
      </div>
     
      <div className="btn">
        {/* <button><Link to={`/payment`} style={{textDecoration:"none",color:"white"}}> Book An Appointment </Link></button> */}
        <button onClick={()=>{navi("/paymentpage")}}>Book Appointment</button>
        
           {/* <Link style={{textDecoration:"none",color:"white"}} to={}>Details</Link></button> */}
           <button onClick={()=>{navi(`/singlecard/${id}`)}}>Details</button>
        </div>
    </DIV>
  );
};

const DIV= styled.div`

width:100%;
 /* display: flex; */
 /* justify-content: space-between; */
 border-radius:10px;
margin: 5% 0 5% 0;
padding: 4%;
align-items: center;
box-shadow: rgba(14, 45, 25, 0.35) 0px 5px 15px;

.main{
  display: flex;
}
.image{
    width: 200px;
    height:200px;
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
    width: 60%;
    /* border: 2px solid blue; */
   text-align: left;
   padding: 1%;
   margin:0 4% 0 4%;
}
.btn{
  margin: auto;
    width: 70%;
    display: flex;
    justify-content: space-between;
    button{
      /* height: 40px; */
      padding: 2%;
      background-color:#4DCA6A;
      border: none;
     color:white
   
    }
}


`
export default DoctorCard;
