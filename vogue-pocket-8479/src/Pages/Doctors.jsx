import React from 'react'
import { Sidebar } from '../Components/Sidebar'
import List from '../Components/List'
import styled from 'styled-components'

const Doctors = () => {
  return (
    <DIV style={{display:"flex"}}>
    <Sidebar/>
    <List />
  </DIV>
  )
}
const DIV= styled.div`
margin: 10%;
`

export default Doctors