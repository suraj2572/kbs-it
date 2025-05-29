import React from 'react'
// import Ourteam from '..ourteam/ourteam'

function Secondpageright() {
  return (
    <div className="w-[500px] h-[600px] sm:h-[600px] md:h-[420px]  xl:h-[400px]  mb-20 sm:ml-5 mr-15 relative grid grid-row-3 ">
      <div className="ml-1 w-full grid grid-row-2 ">
        <div className=" flex items-end text-4xl sm:mt-10 md:mt-0 lg:mt-0 xl:mt-0 sm:text-4xl md:text-4xl xl:text-5xl font-bold gap-3"><span>3</span><span>5</span><span>0</span><span>+</span></div>
        <div className=" gap-6 md:flex lg:flex xl:flex items-center border-b-1 border-black  ">
          <img className="ml-4 mt-5 h-[45px] sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 sm:h-[45px] md:h-[40px] lg:h-[40px] xl:h-[50px]" src="src/assets/about-counter-icn_1-3-svg.webp" alt="img" />
          <h3 className=" mt-5 text-2xl sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0  sm:text-2xl  md:text-2xl xl:text-2xl font-semibold">Enterprise Solutions Delivered</h3>
        </div>
      </div>

      <div className="ml-1 grid grid-row-2  ">
        <div className=" text-4xl sm:text-4xl md:text-4xl xl:text-5xl font-bold flex items-center gap-2"><span>2</span>,<span>0</span>0<span>0</span>+<span></span></div>
        <div className=" text-2xl font-bold md:flex lg:flex  xl:flex items-center gap-6 border-b-1 border-black">
          <img  className=" ml-4 mt-3 sm:mt-3 md:mt-0 lg:mt-0 xl:mt-0 sm:h-[45px] md:h-[40px] xl:h-[50px]" src="src/assets/about-counter-icn_2-2-svg.webp" alt="img"/>
          <h3 className="mt-5 text-2xl sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 sm:text-2xl md:text-2xl xl:text-2xl font-semibold">Startups Empowered</h3>
        </div>
      </div>

      <div className="ml-1  grid grid-row-2">
        <div className="text-4xl sm:text-4xl md:text-4xl xl:text-5xl font-bold flex items-center gap-2"><span>1</span><span>0</span><span>0</span><span>+</span></div>
        <div className=" text-2xl md:flex lg:flex xl:flex gap-6 border-b-1 border-black">
          <img className=" ml-4 sm:mt-3 md:mt-0 lg:mt-0 xl:mt-0 sm:h-[45px] xl:h-[50px]" src="src/assets/about-counter-icn_3-2-svg.webp" alt="img"/>
           <h3 className="mt-4 sm:mt-4 md:mt-0 lg:mt-0 xl:mt-0 sm:text-2xl md:text-2xl xl:text-2xl font-semibold">Million-Funded Startups</h3>
        </div>
      </div>
    </div>
    
  )
}

export default Secondpageright
