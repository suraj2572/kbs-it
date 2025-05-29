import React from 'react'

function Howwework() {
  return (
    <div>
      <div className=" bg-[url(src/assets/h7-bg-section3.jpg)] bg-cover bg-center w-full mt-20 md:h-[300px] lg:h-[400px] xl:h-[404px] sm:mt-20 md:mt-50 lg:mt-40 flex justify-center  ">
        <div className="mx-2 h-screen mt-80 sm:mt-0 md:mt-10 lg:mt-0 xl:mt-0 grid grid-row-2 sm:h-screen md:h-[320px] lg:h-[350px] xl:h-[378px] sm:grid sm:grid-row-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2 ">
            
                <img className="object-scale-down" src="https://kbitsolutions.com.au/wp-content/uploads/2023/02/corona-g9c1081904_1920-1536x1024.jpg" alt="img"/>
           
            <div className=" grid grid-row-2 mt-10 sm:mt-10 md:mt-0 lg:mt-0 xl:mt-0">
                <div className=" w-auto h-auto  mx-5 border-b-1 border-purple-100">
                    <h1 className="mt-1 text-2xl font-semibold text-lime-500 sm:mt-1 xl:mt-6">How We Work</h1>
                    <h1 className="text-2xl sm:text-2xl md:text-lg lg:text-2xl xl:text-4xl font-bold sm:mt-1 xl:mt-3">Our App Procedure Will Set You <br></br>Apart</h1>
                    <h1 className="text-md sm:text-md xl:text-lg  sm:mt-4  xl:mt-6">Develop Your Business More Rapidly With End-to-End Digital Solutions</h1>
                </div>
                <div className="mr-10 ml-5">
                    <div className="ml-4 flex justify-between mt-5">
                        <h5 className="text-zinc-500">Analytics</h5>
                        <h5>95%</h5>
                    </div>
                    <div className=" ml-4  mt-2 w-full h-2.5 bg-gray-200 rounded-full border-1 borded-black flex items-center ">
                        <div className=" ml-1 bg-lime-600 rounded-full h-1 w-[95%] "></div>
                    </div>
                     <div className="ml-4 mt-3 flex justify-between mt-4">
                        <h5 className="text-zinc-500">Development</h5>
                        <h5 className="mr-26">75%</h5>
                    </div>
                    <div className=" ml-4 mt-2 w-full h-2.5 bg-gray-200 rounded-full border-1 borded-black flex items-center ">
                        <div className=" ml-1 bg-lime-600 rounded-full h-1 w-[75%] "></div>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
      
    </div>
  )
}

export default Howwework
