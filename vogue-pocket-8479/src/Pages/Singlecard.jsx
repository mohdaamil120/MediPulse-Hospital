import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getList } from '../Redux/doctorReducer/action';
import styled from 'styled-components';

const Singlecard = () => {
   
      const { id } = useParams();
      const dispatch = useDispatch();
      const [currdoctor, setcurrdoctor] = useState({});
      const navi=useNavigate();

      const {doctor}= useSelector((store)=>{
        console.log(store)
      return {
        doctor:store.doctorReducer.Doctor
      }
    });

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
        <h3 style={{color:"#145723"}}>{currdoctor.name}</h3>
        <p>{currdoctor.education} (experience: {currdoctor.experience} years)</p>
        <h4 style={{color:"#145723"}}>SPECIALIST</h4>
        <p>{currdoctor.speciality} </p>
        <h4 style={{color:"#145723"}}>LOCATION</h4>
        <p>{currdoctor.location}</p>
        <p>number:{currdoctor.mobile} </p>
        <p>Fees:Rs. {currdoctor.fees} </p>
      </div>
          </div>
<div style={{ margin:"2% 0",border:"2px solid #34b151",padding:
"3%",borderRadius:"20%"}}>
  <h3 style={{textAlign:'left'}}>Day</h3>
  <div style={{display:"flex",justifyContent:'space-evenly'}}>
    <p className='day'>Monady</p>
    <p className='day'>Tuesday</p>
    <p className='day'>Wednesday</p>
    <p className='day'>Thursday</p>
    <p className='day'>Friday</p>
    <p className='day'>Saturday</p>
    <p className='day'>Sunday</p>
  </div>
</div>
   
      <button onClick={()=>{navi("/paymentpage")}} style={{color:"black", padding:" 2%",
      backgroundColor:"#4DCA6A",
      border: "none",borderRadius:"5%"}} className='btn'> Book An Appointment</button>
        </DIV>
  );
    
  }

const DIV= styled.div`
box-shadow: rgba(14, 45, 25, 0.35) 0px 5px 15px;
border-radius: 10%;
padding: 5%;
border:2px solid #4DCA6A;
.day{
  display: block;
  background-color: #4DCA6A ;
height: 15%;
width:10%;
/* border-radius: 5%; */
}  


  .top{
    display: flex;
    gap:20px;
    border:2px solid #4DCA6A;
    padding: 5%;
    border-radius: 5%;
  } 
  .photo{
    width:50%;
    height:300px;
    img{
      width:100%
    }
  }
  .detail{
display: flex;
flex-direction: column;
  }
`
export default Singlecard