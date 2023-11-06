import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Pages/Admin'
import { ChakraProvider } from '@chakra-ui/react'
import Home from '../Components/Home'
import Register from '../Pages/Register'
import Doctors from '../Pages/Doctors'
import AboutPage from '../Pages/AboutPage'
import Login from '../Pages/Login'
import Profile from '../Pages/Profile'
import Contact from '../Pages/ContactPage'
import PaymentPage from '../Pages/PaymentPage'
import Singlecard from '../Pages/Singlecard'

export default function MainRouter() {
  return (
    <div>
      
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/doctor' element={<Doctors/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path="/login" element={<Login />} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/admin' element={
                <ChakraProvider>
                <Admin/> 
                </ChakraProvider>
            }/>
           <Route path='/paymentpage' element={<PaymentPage/>}/>
           <Route path='/singlecard/:id' element={<Singlecard/>}/>
        </Routes>
        
    </div>
  )
}
