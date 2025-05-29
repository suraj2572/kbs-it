import React from 'react'

function Mainpage() {
    return (
        
            <div className="grid  grid-row-2 h-screeen w-full ">
                <div className="flex md:h-[550px] lg:h-[550px] xl:h-[550px] grid grid-row-2 sm:grid sm:grid-row-2 md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2 " >
                    <div className=" bg-black  md:w-full md:h-[100%] lg:w-full lg:h-[100%] xl:w-full xl:h-[100%]  md:pl-10 xl:pl-30 ">
                        <h1 className="text-5xl ml-3 sm:text-5xl sm:ml-3 md:text-5xl xl:text-5xl font-semibold text-white mt-15">We are your <span>technological partners in</span><span> digital.</span></h1>
                        <h5 className="mt-5 ml-3 sm:ml-3 text-white">Since 2013, we’ve been helping businesses like yours accelerate their</h5>
                        <h5 className="text-white ml-3 sm:ml-3">journey to success, backed by the right transformative solutions.</h5>
                        <button className="sm:ml-2 px-6 py-2 bg-lime-400 rounded-xs text-white font-semibold mt-3">Explore More</button>
                    </div>
                    <div className="bg-black sm:h-screen md:w-full md:h-[100%] lg:w-full lg:h-[100%] xl:w-full xl:h-[100%] ">
                        <div className="  ">
                            <img className="w-[70%] mt-10 ml-16 sm:w-[40%] sm:ml-50  sm:mt-3   md:w-[33%] md:mt-5 md:ml-5 md:absolute xl:w-[20%] xl:ml-20 xl:mt-5 xl:absolute xl:z-0   " src="src/assets/about-banner-img_2.png" alt="img" />
                            <img className=" w-[70%] mt-5 ml-16 sm:w-[40%] sm:ml-50 sm:mt-3  md:w-[33%] md:mt-72 md:ml-30 lg:mt-50 lg:ml-34 md:absolute xl:w-[20%] xl:ml-45 xl:mt-56 xl:absolute xl:z-10" src="src/assets/about-banner-img_1.png" alt="img" />
                        </div>
                    </div>
                </div>
                <div className="w-full border-t-2 border-white"></div>
                <div className="bg-black w-full h-[770px] sm:h-[770px] md:h-[130px] lg:h-[130px] xl:h-[200px] sm:items-center  md:flex lg:flex xl:flex">
                    <div className="h-[100px] flex items-center sm:h-[100px] sm:flex sm:items-center   xl:w-[40%] xl:h-[200px] xl:ml-10  xl:flex xl:items-center">
                        <h1 className="text-white text-2xl sm:text-2xl sm:ml-4  xl:text-3xl flex items-center ">World's Leading Brands Trust Us</h1>
                    </div>
                     <div className=" w-full  md:flex lg:flex xl:flex items-center justify-center md:gap-5 lg:gap-5 xl:gap-10 ">
                        
                        <img className="ml-[33%]  sm:ml-[40%]  md:w-[90px] md:ml-0 lg:ml-40 lg:w-[90px] xl:w-38" src="src/assets/New-Project-49-1.webp" alt="img"/>
                        <img className="ml-[33%] mt-4 sm:ml-[40%]  sm:mt-4 md:ml-0 md:mt-0 lg:mt-0 xl:mt-0 md:w-[90px] lg:w-[90px] xl:w-38" src="src/assets/New-Project-50-1.webp" alt="img"/>
                        <img className="ml-[33%] mt-4 sm:ml-[40%]  sm:mt-4 md:ml-0 md:mt-0 lg:mt-0 xl:mt-0 md:w-[90px] lg:w-[90px] xl:w-38" src="src/assets/New-Project-51-1.webp" alt="img"/>
                        <img className="ml-[33%] mt-4 sm:ml-[40%]  sm:mt-4 md:ml-0 md:mt-0 lg:mt-0 xl:mt-0 md:w-[90px] lg:w-[90px] xl:w-38" src="src/assets/New-Project-52.webp" alt="img"/>
                     </div>
                </div>
                


            </div>


        
    )
}

export default Mainpage
