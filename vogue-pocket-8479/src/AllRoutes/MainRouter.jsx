import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Pages/Admin'
import { ChakraProvider } from '@chakra-ui/react'
import Home from '../Components/Home'
import Register from '../Pages/Register'
import Doctors from '../Pages/Doctors'
import AboutPage from '../Pages/AboutPage'
import Contact from '../Pages/ContactPage'

export default function MainRouter() {
  return (
    <div>
      
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Register/>}/>
            <Route path='/doctor' element={<Doctors/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/admin' element={
                <ChakraProvider>
                <Admin/> 
                </ChakraProvider>
            }/>
        </Routes>
        
    </div>
  )
}
