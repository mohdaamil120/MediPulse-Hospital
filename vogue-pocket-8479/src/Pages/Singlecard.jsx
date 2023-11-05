import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getList } from '../Redux/doctorReducer/action';
import styled from 'styled-components';

const Singlecard = () => {
   
      const { id } = useParams();
      const dispatch = useDispatch();
      const [currdoctor, setcurrdoctor] = useState({});

      const {doctor}= useSelector((store)=>{
        console.log(store)
      return {
        doctor:store.doctorReducer.Doctor
      }
    })

console.log(doctor)
let item=doctor[0];
console.log(item)

      useEffect(() => {
        if (doctor.length === 0) {
          dispatch(getList());
        }
      }, [doctor.length, dispatch]);
    
      useEffect(() => {
        console.log(doctor,"hkjkjhjg")
        if (id) {
          const currdoctor = doctor.find((item) => item.id === Number(id));
          currdoctor && setcurrdoctor(currdoctor);
           
      console.log(currdoctor,"current data")
        }
 
        console.log(currdoctor,"current data")
      }, [id, doctor]);
   
      return (
        <DIV>
          <div className="top">
          <div className="photo">
        <img src={currdoctor.image} />
      </div>
      <div className="detail">
        <h3>{currdoctor.name}</h3>
        <p>{currdoctor.education} (experience: {currdoctor.experience} years)</p>
        <h4>SPECIALIST</h4>
        <p>{currdoctor.speciality} </p>
        <h4>LOCATION</h4>
        <p>{currdoctor.location}</p>
        <p>number:{currdoctor.mobile} </p>
        <p>Fees:Rs. {currdoctor.fees} </p>
  {/* <p>Language Know: {currdoctor.language.map((item)=>(
    <ul>
        <li>{item}</li>
    </ul>
  ))}</p> */}
      </div>
          </div>
   
      {/* <button><Link to={`/payment`} style={{textDecoration:"none",color:"black"}}> Book An Appointment </Link></button> */}
        </DIV>
  );
    
  }

const DIV= styled.div`
  div{
    display: flex;
  } 
`
export default Singlecard