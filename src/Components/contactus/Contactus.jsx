import React from 'react'

function Contactus() {
    return ( 
        <div>
            <div className=" mt-15 w-full h-auto  grid grid-row-3">
                <div className="mx-2">
                    <h1 className="text-xl font-semibold mt-5">Contact Us</h1>
                    <h1 className="text-3xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-6xl font-bold mt-5">It’s very easy to <span className="text-lime-400">contact</span> us</h1>
                </div>
                <div className=" md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2">
                    <div className="mx-2 grid grid-row-3">
                        <div className=" h-20">
                            <input className="w-[47%] font-semibold mt-4 h-15 sm:w-[47%] md:w-30 lg:w-42  xl:w-60 border-b-2 border-zinc-200" type="text" placeholder="Your Name" />
                            <input className=" font-semibold ml-5 h-15 sm:w-[47%] md:w-30 lg:w-42 xl:w-60 border-b-2 border-zinc-200" type="text" placeholder="Web Address" />
                        </div>
                        <div className=" h-20 ">
                            <input className="w-full font-semibold border-b-2 border-zinc-200  h-15 sm:w-full md:w-66 lg:w-89 xl:w-125" type="email" placeholder="Email Address" />
                        </div>
                        <div className=" h-30">
                            <textarea className="w-full border-b-2 border-zinc-200 sm:w-full md:w-[88%] lg:w-[88%] xl:w-[88%] sm:h-30 md:h-20 xl:h-25 md:mt-3 xl:mt-5 font-semibold " placeholder="Type your message..."></textarea>
                            <button className="sm:visible md:invisible lg:invisible xl:invisible mt-4 px-5 py-3 bg-lime-400 text-whit rounded-full">Send Message Now</button>
                        </div>
                    </div>
                    <div className=" grid grid-row-2">
                        <div className=" sm:mt-30 md:mt-0 lg:mt-0 xl:mt-0 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2">
                            <div className=" flex mt-10 ">
                                <div className="ml-3">
                                    <img className="w-15 sm:w-15 md:w-7 lg:w-10 xl:w-15 " src="https://img.icons8.com/?size=100&id=I24lanX6Nq71&format=png&color=000000" alt="phone" />
                                </div>
                                <div className="ml-3 ">
                                    <h1 className="text-lg sm:text-lg sm:font-semibold md:text-sm md:font-semibold lg:text-lg xl:font-bold text-lime-400">Call Us for help!</h1>
                                    <h1 className="text-2xl sm:text-2xl md:text-sm lg:text-lg xl:text-xl font-bold mt-2">(03) 42240259</h1>
                                </div>
                            </div>
                            <div className=" ">
                                <div className="mt-10 flex ">
                                    <div className="md:ml-2">
                                        <img className="w-15 sm:w-15 sm:ml-3 md:ml-0 lg:ml-0 xl:ml-0 md:w-7 lg:w-10 xl:w-15" src="https://img.icons8.com/?size=100&id=13800&format=png&color=000000" alt="location" />
                                    </div>
                                    <div className="sm:ml-2 md:ml-1 xl:ml-2">
                                        <h1 className="text-lg sm:text-lg md:text-sm lg:text-lg xl:text-lg text-lime-400 font-semibold">Our Location</h1>
                                        <h1 className="text-2xl sm:text-2xl md:text-sm lg:text-lg xl:text-xl font-bold">Level 1,office 2,</h1>
                                        <h1 className="text-2xl sm:text-2xl md:text-sm lg:text-lg xl:text-xl font-bold">73Malop street</h1>
                                        <h1 className="text-2xl sm:text-2xl md:text-sm lg:text-lg xl:text-xl font-bold">Geelong, Victoria</h1>
                                        <h1 className="text-2xl sm:text-2xl md:text-sm lg:text-lg xl:text-xl font-bold">Australia</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex mt-10 ml-4">
                                <div>
                                    <img className="w-13 sm:w-13 md:w-10 lg:w-10 xl:w-15" src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" alt="mail" />
                                </div>
                                <div className="ml-3">
                                    <h1 className="text-lg sm:text-lg md:text-sm lg:text-lg xl:text-lg text-lime-400 font-semibold">Our Mail Address</h1>
                                    <h1 className="text-2xl sm:text-2xl md:text-sm lg:text-lg xl:text-xl font-bold">Sales@kbitsolutions.com.au</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="h-40  mt-3 ml-2">
                        <button className="invisible sm:invisible md:visible lg:visible xl:visible md:px-3 md:py-3 md:text-xs xl:px-5 xl:py-3 bg-lime-400 text-white   xl:font-semibold rounded-full">Send Message Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus
