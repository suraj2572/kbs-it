import React from 'react'
import Secondpageright from '../secondpageright/Secondpageright'

function Secondpage() {
    return (
        <div className=" md:h-[400px]  md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2">
            <div className=" w-full h-[600px]  flex justify-center items-center ">
                <div className="h-[500px] w-full mt-10 mx-1 sm:h-[500px] sm:w-full sm:mt-10 sm:mx-1 md:h-[500px] lg:w-[500px] lg:h-[480px] xl:w-[600px] xl:h-[450px] md:ml-1 md:mt-10 
                lg:mt-5 xl:ml-25 mb-20 rounded-xl bg-[url(src/assets/about-counter-bg-1.png)] bg-center bg-cover grid grid-row-2 overflow-hidden">
                    <div className=" w-full h-[150px]  sm:h-[150px]  xl:h-[160px] md:mb-5 lg:mb-5 flex items-center justify-center">
                        <h1 className="mt-20 text-5xl sm:text-5xl  md:text-4xl lg:text-5xl xl:text-5xl text-white font-semibold">We’ve Activated</h1>
                    </div>
                    <div className="  w-full h-[160px] md:pt-10  md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2 ">
                        <div className="w-full h-[150px] sm:h-[150px]  md:h-[130px] lg:h-[300px] xl:h-[300px] text-white  ">
                            <h1 className="text-5xl mt-3 sm:text-5xl sm:mt-3 md:text-4xl lg:font-semibold lg:text-5xl xl:text-5xl  font-bold   "><span className="flex justify-center">3,000+</span>

                                <span className="flex justify-center mt-3">Businesses</span></h1>
                        </div>

                        <div className=" md:border-l-2 md:border-white lg:border-l-2 lg:border-white xl:border-l-2 xl:border-white  md:h-[120px] lg:h-[130px] xl:h-[150px]">
                            <h1 className="text-5xl sm:text-5xl md:text-4xl lg:font-semibold lg:text-5xl xl:text-5xl font-bold mt-3  "><span className="flex justify-center text-white">150+</span>

                                <span className="flex justify-center text-white mt-3">Countries</span></h1>
                        </div>
                    </div>
                    <div className=" w-full h-[3500px]"></div>

                </div>
            </div>
            <div className="w-full h-[600px] flex justify-center items-center ">
           <Secondpageright/>
            </div>
        </div>

    )
}

export default Secondpage
