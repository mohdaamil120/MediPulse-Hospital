import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Pages/Admin'
import { ChakraProvider } from '@chakra-ui/react'
import {Doctors} from "../Pages/Doctors"
import { PaymentPage} from "../Pages/PaymentPage"
import {Singlecard} from '../Pages/Singlecard'


export default function MainRouter() {
  return (
    <div>
        <Routes>
            <Route path='/admin' element={
              
              <ChakraProvider>
                <Admin/>
              </ChakraProvider>
            }/>
            <Route path='/doctor' element={<Doctors/>}/>
            <Route path='/payment' element={<PaymentPage/>}/>
          <Route path='/single-doctor/:id' element={<Singlecard/>}/>
        </Routes>
    </div>
  )
}
