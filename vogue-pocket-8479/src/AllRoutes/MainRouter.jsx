import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Pages/Admin'

export default function MainRouter() {
  return (
    <div>
        <Routes>
            <Route path='/admin' element={<Admin/>}/>
        </Routes>
    </div>
  )
}
