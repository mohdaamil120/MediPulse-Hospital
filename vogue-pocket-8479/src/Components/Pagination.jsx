import React, { useState } from 'react'

const Pagination = ({totalPages,setcurrentpage,currentpage}) => {
const [pages, setpages] = useState([]);

    let page= new Array(totalPages).fill(0);
    
  return (
    <div>
         {page.map((ele,i)=>{
    <button >{i+1}</button>
   })}
    </div>
  )
}

export default Pagination