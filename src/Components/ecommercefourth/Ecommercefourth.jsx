import React from 'react'
import { BsBox } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { IoMdBulb } from "react-icons/io";
import { TbBracketsAngleOff } from "react-icons/tb";
import { PiHeadCircuitThin } from "react-icons/pi";

function Ecommercefourth() {
  return (
    <div className="pt-40 md:pt-50 lg:pt-80 xl:pt-80 xl:mx-30">
      <div className="ml-5">
        <h1 className="text-4xl lg:font-bold md:pb-5 md:font-bold lg:pb-5 xl:font-semibold xl:pb-10 ">Why Choose Us</h1>
        <p className="md:mr-100 lg:mr-150 xl:mr-190 text-lg text-zinc-600">We are the industry leaders among entrepreneurs worldwide, renowned for developing beautiful eCommerce mobile apps and websites that aim to establish distinctive marketplaces.</p>
      </div>
      <div className=" md:flex md:flex-wrap lg:flex lg:flex-wrap xl:flex xl:flex-wrap md:ml-6 lg:ml-7 md:mt-5 md:gap-7 lg:gap-8 lg:mt-10  xl:gap-7 xl:mt-10 xl:ml-5 ">
        <div className="mt-10 md:mt-0 lg:mt-0 xl:mt-0 mx-3 md:mx-0 lg:mx-0 xl:mx-0 shadow-xl w-auto rounded-xl px-3 relative">
          <div className="bg-red-100 size-10 rounded-full absolute flex justify-center items-center top-9 md:top-13 lg:left-13 lg:top-12 xl:left-13 xl:top-12"><i className="text-red-500 font-bold"><BsBox /></i></div>
          <h1 className="mt-5 md:max-w-40 pt-20 text-2xl font-bold xl:ml-10 ">Start a store Immediatley</h1>
          <p className="pb-7 md:max-w-50 lg:max-w-63 xl:mx-10 xl:max-w-63  mt-5 ">You may launch your online store in less than a week thanks to our ecommerce platform development solution.</p>
        </div>
 
           <div className="mt-10 md:mt-0 lg:mt-0 xl:mt-0 mx-3 md:mx-0 lg:mx-0 xl:mx-0 shadow-xl  w-auto rounded-xl px-3 relative">
          <div className="bg-indigo-100 size-10 rounded-full absolute flex justify-center items-center top-9 md:top-13 lg:left-13 lg:top-12 xl:left-13 xl:top-12"><i className="text-indigo-500"><TbTargetArrow /></i></div>
          <h1 className="mt-5 pt-20 md:max-w-40  text-2xl font-bold xl:ml-10 ">No coding required</h1>
          <p className="pb-7 md:max-w-50 lg:mx-2 lg:max-w-63 xl:max-w-63 xl:mx-10 mt-5 ">We create it so you don't need to be a coding expert to administer or update the market.</p>
        </div>

        <div className="mt-10 md:mt-0 lg:mt-0 xl:mt-0 mx-3 md:mx-0 lg:mx-0 xl:mx-0 shadow-xl w-auto rounded-xl px-3 relative">
          <div className="bg-fuchsia-100 size-10 rounded-full absolute flex justify-center items-center top-9 md:top-13 lg:left-13 lg:top-12 xl:left-13 xl:top-12"><i className="text-fuchsia-500"><IoMdBulb /></i></div>
          <h1 className="mt-5 pt-20 md:max-w-40 text-2xl font-bold xl:ml-10 ">24*7 Robust Support</h1>
          <p className="pb-7 md:max-w-50 lg:mx-2 lg:max-w-63 xl:max-w-63 xl:mx-10 mt-5 ">Technical help available 24/7 to guarantee that your issues are answered right away</p>
        </div>
        
         <div className="mt-10 md:mt-0 lg:mt-0 xl:mt-0 mx-3 md:mx-0 lg:mx-0 xl:mx-0 shadow-xl w-auto rounded-xl px-3 relative">
          <div className="bg-green-100 size-10 rounded-full absolute flex justify-center items-center top-9 md:top-13 lg:left-13 lg:top-12 xl:left-13 xl:top-12"><i className="text-green-500"><TbBracketsAngleOff /></i></div>
          <h1 className="mt-5 pt-20 md:max-w-40 text-2xl font-bold xl:ml-10 ">Full customized store</h1>
          <p className="pb-7 md:max-w-50 lg:mx-2 lg:max-w-63  xl:max-w-63 xl:mx-10 mt-5 ">Use Flixibility's app development services to customize your online store.</p>
        </div>


        <div className="mt-10 md:mt-0 lg:mt-0 xl:mt-0 mx-3 md:mx-0 lg:mx-0 xl:mx-0 shadow-xl w-auto rounded-xl px-3 relative">
          <div className="bg-yellow-100 size-10 rounded-full absolute flex justify-center items-center top-9 md:top-13 lg:left-13 lg:top-12 xl:left-13 xl:top-12"><i className="text-yellow-600"><PiHeadCircuitThin /></i></div>
          <h1 className="mt-5 pt-20  md:max-w-40  text-2xl font-bold xl:ml-10 ">Full secured solution</h1>
          <p className="pb-7 md:max-w-50 lg:mx-2 lg:max-w-63 xl:max-w-63 xl:mx-10 mt-5 ">Our strong data protection system makes sure no one may access your important data without your knowledge.</p>
        </div>
       

      
        
      </div>
    </div>
  )
}

export default Ecommercefourth
