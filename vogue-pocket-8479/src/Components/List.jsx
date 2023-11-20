import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getList } from '../Redux/doctorReducer/action';
import DoctorCard from './DoctorCard';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import Pagination from './Pagination';

const List = () => {
    const dispatch=useDispatch();
    const [searchParams] = useSearchParams();
    const [currentpage, setcurrentpage] = useState(1)

    const {doctor, isLoading}= useSelector((store)=>{
        console.log(store)
      return {
        doctor:store.doctorReducer.Doctor,
        isLoading:store.doctorReducer.isLoading
      }
    })

    const totalPages= doctor.length/6;
    console.log(totalPages)

    let ParamsObj = {
      params: {
        speciality: searchParams.getAll("speciality"),
        gender: searchParams.getAll("gender"),
        location: searchParams.getAll("location"),
        _sort: searchParams.get("order") && "fees",
        _order: searchParams.get("order"),
        page: currentpage,
        limit: 6,
      }
    };
  
    useEffect(() => {
      dispatch(getList(ParamsObj));
    }, [searchParams,currentpage]);

    return (
      <DIV>
        <div className="Box-1">
          <Sidebar/>
          <div
            className="Box-2"
          >
            {doctor?.length > 0 &&
             doctor.map((item) => <DoctorCard 
             key={item.id} {...item}/>)}
          </div>
        </div>
        <Pagination totalPages={totalPages} setcurrentpage={setcurrentpage} currentpage={currentpage} />
      </DIV>
    );
  };
  const DIV = styled.div`
  .Box-1{
    display:flex;
    justify-content: space-between;
  }
  .Box-2{
    width:100%;
    gap:10%;
    margin:auto;
  }
  @media screen and (max-width: 768px) {
  
      .Box-2 {
        grid-template-columns: repeat(1, 1fr);
        width:100%;
        gap:20px;
        margin-left:10%;
      }
    }
  @media screen and (max-width: 480px) {
    .Box-1{
      flex-direction:column;
    }
      .Box-2 {
        grid-template-columns: repeat(1, 1fr);
        width:100%;
        padding:5%;
      }
    }
  `;
export default List