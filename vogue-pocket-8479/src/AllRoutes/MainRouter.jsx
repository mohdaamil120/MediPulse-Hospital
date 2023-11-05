import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Pages/Admin'
import { ChakraProvider } from '@chakra-ui/react'

export default function MainRouter() {
  return (
    <div>
        <Routes>
            <Route path='/admin' element={
              
              <ChakraProvider>
                <Admin/>
              </ChakraProvider>
            }/>
           
        </Routes>
    </div>
  )
}
