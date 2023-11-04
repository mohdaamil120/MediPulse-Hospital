import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

export const Sidebar = () => {
const [view, setview] = useState(false);

const [searchParams, setSearchParams] = useSearchParams();

const [speciality, setSpeciality] = useState(
  searchParams.getAll("speciality") || []
);

// const [gender, setgender] = useState(
//   searchParams.getAll("gender") || []
// );

const handleSpecility = (e) => {
  const { value } = e.target;
  let newspeciality= [...speciality];
  if (newspeciality.includes(value)) {
    newspeciality= newspeciality.filter((item) => item != value);
  } else {
    newspeciality.push(value);
  }
  setSpeciality(newspeciality);
};

// const handleGender = (e) => {
//   const { value } = e.target;
//   let newgender= [...gender];
//   if (newgender.includes(value)) {
//     newgender= newgender.filter((item) => item != value);
//   } else {
//     newgender.push(value);
//   }
//   setgender(newgender);
// };

const handleClick=()=>{
  if(view===true){
    setview(false);
    // alert("undone")
  }else{
    setview(true);
    // alert("done")
  }
}

useEffect(() => {
  let param = {
    speciality,
  };
  // order && (param.order = order);
  setSearchParams(param);
}, [speciality]);


  return (
    <DIV view={view}>
      <h3>Filter</h3>
      <hr />
      <div className="box" onClick={handleClick}>
       <h3>Specialist  </h3>
      <div className="opt" >
        
        <p> <input data-testid="CARDIOLOGY" type="checkbox" value={"CARDIOLOGY"} onChange={handleSpecility} checked={speciality.includes("CARDIOLOGY")}/>CARDIOLOGY</p>
    
        <p><input data-testid="PREGNANCY" type="checkbox" value={"PREGNANCY"} onChange={handleSpecility} checked={speciality.includes("PREGNANCY")}/>PREGNANCY</p>
        
        <p><input data-testid="OTOLARYNGOLOGISTS" type="checkbox" value={"OTOLARYNGOLOGISTS"} onChange={handleSpecility} checked={speciality.includes("OTOLARYNGOLOGISTS")}/>OTOLARYNGOLOGISTS</p>
       
        <p> <input data-testid="DENTAL DEPARTMENT" type="checkbox" value={"DENTAL DEPARTMENT"} onChange={handleSpecility} checked={speciality.includes("DENTAL DEPARTMENT")}/>DENTAL DEPARTMENT</p>
     
        <p><input data-testid="PEDIATRICS" type="checkbox" value={"PEDIATRICS"} onChange={handleSpecility} checked={speciality.includes("PEDIATRICS")} />PEDIATRICS</p>
        <br />
      </div>
      <hr />
      <h3>Gender  </h3>
      {/* <div className="opt" >
        
        <p> <input data-testid="female" type="checkbox" value={"female"} onChange={handleGender} checked={speciality.includes("female")}/>FEMALE</p>
    
        <p><input data-testid="male" type="checkbox" value={"male"} onChange={handleGender} checked={speciality.includes("male")}/>MALE</p>
        <br/>
      </div> */}

      </div>
      <hr/>
    
      {/* <h3>Paginate</h3>
      <PAGE>
        <button data-testid="page-prev">Previous</button>
        <button data-testid="page-next">Next</button>
      </PAGE> */}
    </DIV>
  );
};

// const PAGE = styled.div`
//   button {
//     margin: 20px;
//     border: none;
//     width: 100px;
//     height: 35px;
//     margin-bottom: 10px;
//   }
// `;

const DIV = styled.div`
 word-wrap: normal;
  width: 30%;
  border-right: 1px solid gray;
  text-align: left;
 margin: 5%;
  /* background-color: red; */
  border: 2px solid green;
  /* padding: 1%; */

  .box{
    /* border: 1px solid blue; */
    cursor: pointer;
  
  }
.opt{
  display:${(props)=> (props.view ? "block": "none")};
}

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px; 
    /* Adjust the size as needed */
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
  }
`;
