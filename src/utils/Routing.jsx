import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Deliveryapp from '../pages/homepage/Deliveryapp'
import AboutUs from '../pages/homepage/AboutUs'
import Ecommercedelivery from '../pages/homepage/Ecommercedelivery'
import Grocerydelivery from '../pages/homepage/Grocerydelivery'

function Routing() {
  return (
    <div>
    <Routes>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/deliveryapp" element={<Deliveryapp/>}/>
      <Route path="/ecommercedelivery" element={<Ecommercedelivery/>}/>
      <Route path="/grocerydelivery" element={<Grocerydelivery/>}/>
    </Routes>

</div>

  )
}

export default Routing
