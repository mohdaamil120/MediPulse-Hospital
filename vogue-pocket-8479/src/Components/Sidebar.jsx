import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

export const Sidebar = () => {
const [view, setview] = useState(false);
const [view2, setview2] = useState(false);
const [view3, setview3] = useState(false);
const [view4, setview4] = useState(false);

const [searchParams, setSearchParams] = useSearchParams();

//filter for speciality//
const [speciality, setSpeciality] = useState(
  searchParams.getAll("speciality") || []
);

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

const handleClick=()=>{
  if(view===true){
    setview(false);
    // alert("undone")
  }else{
    setview(true);
    // alert("done")
  }
}

//filter for gender//
const [gender, setgender] = useState(
  searchParams.getAll("gender") || []
);

const handleGender = (e) => {
  const { value } = e.target;
  let newgender= [...gender];
  if (newgender.includes(value)) {
    newgender= newgender.filter((item) => item != value);
  } else {
    newgender.push(value);
  }
  setgender(newgender);
};

const handleClick2=()=>{
  if(view2===true){
    setview2(false);
    // alert("undone")
  }else{
    setview2(true);
    // alert("done")
  }
}

//filter for location//
const [location, setlocation] = useState(
  searchParams.getAll("gender") || []
);

const handleLocation = (e) => {
  const { value } = e.target;
  let newlocation= [...gender];
  if (newlocation.includes(value)) {
    newlocation= newlocation.filter((item) => item != value);
  } else {
    newlocation.push(value);
  }
  setlocation(newlocation);
};
const handleClick3=()=>{
  if(view3===true){
    setview3(false);
    // alert("undone")
  }else{
    setview3(true);
    // alert("done")
  }
}

//sort by fees///
const [order, setOrder] = useState(searchParams.get("order") || "");

const handleOrder = (e) => {
  const { value } = e.target;
  setOrder(value);
};

const handleClick4=()=>{
  if(view4===true){
    setview4(false);
    // alert("undone")
  }else{
    setview4(true);
    // alert("done")
  }
}


// ///
useEffect(() => {
  let param = {
    speciality,
    gender,
    location
  };

  order && (param.order = order);
  setSearchParams(param);
}, [speciality,gender,location,order]);

  return (
    <DIV view={view} view2={view2} view4={view4} view3={view3}  >
    <div style={{backgroundColor:"#4DCA6A",height:"50px",width:"100%",alignContent:"center", borderRadius:"5%"}}><h3 style={{margin:"auto",display:"flex",justifyContent:"center",paddingTop:"10px"}} >Filter</h3></div>
      
      <hr />
      <div className="box" >
       <h3 onClick={handleClick}>Specialist  </h3>
      <div className="opt" >
        
        <p> <input data-testid="CARDIOLOGY" type="checkbox" value={"CARDIOLOGY"} onChange={handleSpecility} checked={speciality.includes("CARDIOLOGY")}/>CARDIOLOGY</p>
    
        <p><input data-testid="PREGNANCY" type="checkbox" value={"PREGNANCY"} onChange={handleSpecility} checked={speciality.includes("PREGNANCY")}/>PREGNANCY</p>
        
        <p><input data-testid="OTOLARYNGOLOGISTS" type="checkbox" value={"OTOLARYNGOLOGISTS"} onChange={handleSpecility} checked={speciality.includes("OTOLARYNGOLOGISTS")}/>OTOLARYNGOLOGISTS</p>
       
        <p> <input data-testid="DENTAL DEPARTMENT" type="checkbox" value={"DENTAL DEPARTMENT"} onChange={handleSpecility} checked={speciality.includes("DENTAL DEPARTMENT")}/>DENTAL DEPARTMENT</p>
     
        <p><input data-testid="PEDIATRICS" type="checkbox" value={"PEDIATRICS"} onChange={handleSpecility} checked={speciality.includes("PEDIATRICS")} />PEDIATRICS</p>
        <br />
      </div>
      <hr />
      <h3 onClick={handleClick2}>Gender  </h3>
      <div className="opt2" >
        
        <p> <input data-testid="female" type="checkbox" value={"female"} onChange={handleGender} checked={gender.includes("female")}/>FEMALE</p>
    
        <p><input data-testid="male" type="checkbox" value={"male"} onChange={handleGender} checked={gender.includes("male")}/>MALE</p>
        <br/>
      </div>
<hr />
      <h3 onClick={handleClick3}>Location</h3>
      <div className="opt3" >
        
        <p> <input data-testid="BENGALURU" type="checkbox" value={"BENGALURU"} onChange={handleLocation} checked={location.includes("BENGALURU")}/>BENGALURU</p>
    
        <p><input data-testid="HYDERABAD" type="checkbox" value={"HYDERABAD"} onChange={handleLocation} checked={location.includes("HYDERABAD")}/>HYDERABAD</p>

        
        <p><input data-testid="CHENNAI" type="checkbox" value={"CHENNAI"} onChange={handleLocation} checked={location.includes("CHENNAI")}/>CHENNAI</p>
        <br/>
      </div>
      <hr />
      </div>
      <div style={{backgroundColor:"#4DCA6A",height:"50px",width:"100%",alignContent:"center",cursor:"pointer", borderRadius:"5%"}} onClick={handleClick4} ><h3 style={{margin:"auto",display:"flex",justifyContent:"center",paddingTop:"10px"}}  >Sort by Fees</h3></div>
     
      <div onChange={handleOrder} className="opt4">
        <input
          data-testid="sort-asc"
          type="radio"
          name="sort"
          value={"asc"}
          defaultChecked={order === "asc"}
        />
        <label>Ascending</label>
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          value={"desc"}
          defaultChecked={order === "desc"}
        />
        <label>Descending</label>
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
/* position: fixed; */
 word-wrap: normal;
 height: 550px;
  width: 300px;
  text-align: left;
 margin: 4%;
 border:none;
 box-shadow: rgba(14, 45, 25, 0.35) 0px 5px 15px;
  /* border: 2px solid green; */

  padding: 2%;
border-radius: 10px;

@media (max-width: 767px) {
    width: 80%; /* Full width on small screens */
    margin: 0;
    flex-direction:column;
  }

  @media (min-width: 768px) {
    width: 250px; /* Adjust width for tablets */
  }

  @media (min-width: 992px) {
    width: 350px; /* Adjust width for larger desktop screens */
  }

  @media (min-width: 1200px) {
    width: 400px; /* Adjust width for bigger screens (e.g., large desktops) */
  }

hr{
border: 1px solid green;
}
  .box{
    /* border: 1px solid blue; */
    cursor: pointer;
  background-color: white;
  }
.opt{
  display:${(props)=> (props.view ? "block": "none")};
}

.opt2{
  display:${(props)=> (props.view2 ? "block": "none")};
}

.opt3{
  display:${(props)=> (props.view3 ? "block": "none")};
}

.opt4{
  display:${(props)=> (props.view4 ? "block": "none")};
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
