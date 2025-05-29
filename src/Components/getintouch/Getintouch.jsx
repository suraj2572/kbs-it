import React from 'react'

function Getintouch() {
  return (
    <div>
      <div className="mt-40 h-[270px] sm:mt-50 md:mt-30 lg:mt-30 xl:mt-30 grid grid-row-2 sm:h-[250px] md:h-[400px] lg:h-[400px] xl:h-[400px] bg-[url(src/assets/h3-bg-section-03.jpg)] bg-center bg-cover ">
        <div className="flex items-center justify-center ">
            <h1 className="text-3xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold">Ready to Empower Your Business With Our BREWing process?</h1>
        </div>
        <div className="flex justify-center">
            <div className="mt-5">
            <button className="text-white font-bold px-10 py-4 bg-lime-400 rounded-md">Get in Touch</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Getintouch
