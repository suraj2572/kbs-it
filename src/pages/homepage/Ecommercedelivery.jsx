import React from 'react'
import Ecommercefirst from '../../Components/ecommercefirst/Ecommercefirst'
import Ecommercesecond from '../../Components/ecommercesecondpage/Ecommercesecond'
import Ecommercethird from '../../Components/ecommercethird/Ecommercethird'
import Ecommercefourth from '../../Components/ecommercefourth/Ecommercefourth'
import Ecommercefifth from '../../Components/ecommercefifth/Ecommercefifth'
import Contactus from '../../Components/contactus/Contactus'

function Ecommercedelivery() {
  return (
    <div className="overflow-hidden">
      <Ecommercefirst/>
      <Ecommercesecond/>
      <Ecommercethird/>
      <Ecommercefourth/>
      <Ecommercefifth/>
      <div className="md:mx-10 lg:mx-30 xl:mx-30">  <Contactus/></div>
    
    </div>
  )
}

export default Ecommercedelivery
