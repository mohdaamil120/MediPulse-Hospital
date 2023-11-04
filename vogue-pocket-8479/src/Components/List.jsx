import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getList } from '../Redux/doctorReducer/action';
import DoctorCard from './DoctorCard';
import styled from 'styled-components';

const List = () => {
    const dispatch=useDispatch();

    const {store,doctor}= useSelector((store)=>{
        console.log(store)
      return {
        doctor:store.doctorReducer.Doctor
      }
    })

    console.log(doctor)
useEffect(() => {
 dispatch(getList)
}, [])

  return (
    <DIV>
        <h1>Doctor List</h1>
        {doctor?.map((item)=>{
            return <DoctorCard key={item.id} {...item}/>
        })}
    </DIV>
  )
}

const DIV = styled.div`
  width  :80% ;
`
export default List