import React from 'react'
import { BsCheck2Circle } from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { FaLink } from "react-icons/fa6";

function Howdoseitwork() {
    return (
        <div className=" w-full h-270 md:h-180 lg:h-180  xl:h-180 mt-20 bg-[url(https://kbitsolutions.com.au/wp-content/uploads/2021/12/h5-bg-section-2.jpg)]  bg-right relative">
            <h1 className="text-white 
            text-4xl font-bold ml-15
         md:ml-55 md:pt-20
        lg:text-5xl lg:font-bold lg:ml-70 lg:pt-25
        xl:text-6xl xl:font-bold xl:ml-110 xl:pt-30 ">
                How dose it Work?</h1>
            <div className=" w-full 
                  
                 lg:flex lg:justify-center 
                 xl:flex xl:justify-center xl:gap-20">
                <div className=" md:flex lg:flex xl:flex">
                    <div className=" relative 
                 md:h-50 md:w-[70%] 
                 lg:w-60 lg:h-40 lg:mt-12 lg:ml-10 
                 xl:w-60 xl:h-50 ">
                        <div className="w-10 h-10 bg-lime-400 flex justify-center items-center rounded-full 
                absolute left-35 top-10
                 md:left-30 md:top-8
                 lg:left-10 lg:top-8
                  xl:left-10 xl:top-9 ">
                            <BsCheck2Circle />
                        </div>
                        <h1 className="text-white text-center -mb-5 
                        text-[80px] font-bold
                    md:text-[80px]
                   lg:text-[80px] 
                  xl:text-[100px] " >01</h1>
                        <h1 className="text-white  
                        text-2xl font-bold text-center">Customer places the order</h1>

                    </div>
                    <div className="relative 
                 md:h-50
            lg:w-60 lg:h-40 lg:mt-12 lg:ml-10 
            xl:w-60 xl:h-50 ">
                        <div className=" rounded-full  w-10 h-10 bg-lime-400   flex justify-center items-center
                 absolute left-35 top-10
                 md:left-30 md:top-8
                 lg:left-10 lg:top-8
                 xl:left-10 xl:top-9">
                            <FaRegPenToSquare />
                        </div>

                        <h1 className="text-white text-center
                   text-[80px] font-bold
                xl:text-[100px] -mb-5" >02</h1>
                        <hr class="absolute top-20 -left-30 border-t-2 border-dashed border-gray-500 my-1 w-40" />
                        <h1 className="text-white text-center text-2xl font-bold
                     ">Order received and a delivery agent is assigned</h1>
                    </div>
                </div>
                <div className="md:flex lg:flex xl:flex">
                    <div className="relative
               md:w-[51%] md:h-50
              lg:w-60 lg:h-40 lg:mt-12 lg:ml-10 
            xl:w-60 xl:h-50  ">
                        <div className=" w-10 h-10 bg-lime-400 rounded-full flex justify-center items-center 
                    absolute left-35 top-10
                     md:left-30 md:top-8
                   lg:left-10 lg:top-8
                 xl:left-10 xl:top-9 ">
                            <FiBox />
                        </div>
                        <h1 className="text-white text-center -mb-5
                         text-[80px] font-bold 
                xl:text-[100px] " >03</h1>
                        <hr class="absolute top-20 -left-30 border-t-2 border-dashed border-gray-500 my-1 w-40" />
                        <h1 className="text-white text-center text-2xl font-bold
                    md:mx-10">Order pick-up from the location</h1>
                    </div>
                    <div className="relative
              lg:w-60 lg:h-40 lg:mt-12 lg:ml-10
            xl:w-60 xl:h-50 ">
                        <div className="w-10 h-10 bg-lime-400 rounded-full flex justify-center items-center
                    absolute left-35 top-10 md:left-30 md:top-8
                    
                    
                     lg:left-10 lg:top-8 
                     xl:left-10 xl:top-9  ">
                            <FaLink />
                        </div>
                        <h1 className=" text-white text-center -mb-5
                        mt-10
                    text-[80px] font-bold md:mt-0
                    lg:mt-0
                xl:text-[100px] xl:mt-0" >04</h1>
                        <hr class="absolute top-20 -left-30 border-t-2 border-dashed border-gray-500 my-1 w-40" />
                        <h1 className="text-white text-center text-2xl font-bold">Delivery agent delivers the product</h1>
                    </div>
                </div>
            </div>
            <div className="relative 
            lg:w-60 lg:h-50 lg:mt-10 lg:ml-8
            xl:w-70 xl:h-50 xl:mt-10 xl:ml-25 ">
                <div className=" absolute w-10 h-10 bg-lime-400 rounded-full  flex justify-center items-center
                left-35 top-10
                md:left-27 md:top-8
                 lg:left-11 lg:top-9
                 xl:left-20 xl:top-9">
                    <FaLink />
                </div>
                <h1 className="ml-42 mt-10 text-white -mb-5
                text-[80px] font-bold md:ml-33
                 lg:ml-17
                 xl:text-[100px] xl:text-center xl:mt-0 xl:ml-0 " >05</h1>
                <hr class="absolute top-20 -left-21 border-t-2 border-dashed border-gray-500 my-1 w-30" />
                <h1 className="text-white text-center md:mr-100 md:ml-20 lg:ml-20 xl:ml-30  text-2xl font-bold ">Billing invoice shared with the end user</h1>
            </div>
            <img className="
        invisible 
        xl:visible
        xl:absolute xl:bottom-90 xl:-left-70 xl:animate-[bounce_15s_infinite]"
                src="https://kbitsolutions.com.au/wp-content/uploads/2021/12/h5-box-shape3.png" alt="img" />
            <img className="
        invisible 
         xl:absolute  
        xl:visible
        xl:-bottom-90 xl:-right-90 xl:animate-[bounce_20s_infinite] "
                src="https://kbitsolutions.com.au/wp-content/uploads/2021/12/h5-box-shape3.png" alt="img" />
        </div>

    )
}

export default Howdoseitwork
