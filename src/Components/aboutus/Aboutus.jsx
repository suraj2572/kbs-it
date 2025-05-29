import React from 'react'

function Aboutus() {
    return (
        <div>
            <section className=" w-full h-[500px] lg:h-[430px] sm:h-auto mt-30 flex justify-center">
                <div className=" w-full md:h-[230px] xl:h-[500px] md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid-cols-2 xl:grid xl:grid-cols-2">
                    <div className="mx-3 sm:mx-3 md:ml-10 lg:ml-15 xl:ml-30 ">
                        <h1 className="text-2xl sm:text-2xl md:text-xl xl:text-2xl  font-bold text-lime-500">About us</h1>
                        <h1 className="text-3xl sm:text-3xl md:text-lg md:text-2xl lg:text-2xl xl:text-4xl font-bold mt-2">We’re Your Digital</h1>
                        <h1 className="text-3xl sm:text-3xl md:text-lg md:text-2xl lg:text-2xl xl:text-4xl font-bold ">Technological</h1>
                        <h1 className="text-3xl sm:text-3xl md:text-lg md:text-2xl lg:text-2xl xl:text-4xl font-bold">Partners</h1>
                        <p className="font-semibold text-zinc-600 mt-5 sm:text-lg md:text-sm  lg:text-md xl:text-lg lg:text-lg">We’ve been assisting organizations just like yours in <br></br>accelerating their path to success by providing the<br></br> appropriate revolutionary solutions.</p>
                        <p className="font-semibold text-zinc-600 mt-3 sm:text-lg md:text-sm lg:text-md xl:text-lg lg:text-lg">A close-knit group of digital experts, KB IT focuses in the<br></br> most recent developments and developments in digital<br></br> marketing. Our team has experience developing effective,<br></br> high-impact digital solutions. We collaborate with<br></br> businesses all around the world to create digital goods and<br></br> inventive marketing that furthers their corporate objectives.</p>
                    </div>
                    <div className=" flex justify-center mx-3">
                        <div className=" w-auto h-[300px] sm:h-[450px] md:h-[280px] lg:h-[350px] xl:h-[420px] mt-10 rounded-4xl  shadow-xl shadow-black overflow-hidden ">
                            <img className="flex intems-center" src="https://kbitsolutions.com.au/wp-content/uploads/2021/09/theme-10-600x473.jpg" alt="img" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Aboutus
