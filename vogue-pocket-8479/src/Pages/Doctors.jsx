import React from 'react'
import { Sidebar } from '../Components/Sidebar'
import List from '../Components/List'
import styled from 'styled-components'

const Doctors = () => {
  return (
    <DIV>
    <List />
  </DIV>
  )
}
const DIV= styled.div`
margin: 10%;
display: flex;
justify-content: space-evenly;
`

export default Doctors