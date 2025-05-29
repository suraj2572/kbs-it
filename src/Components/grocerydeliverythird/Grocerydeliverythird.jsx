import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


function Grocerydeliverythird() {

    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="mx-30">
            <div>
                <h1 className="text-4xl font-bold  mt-20">Customer Web & Apps</h1>
            </div>
            <div className="mt-20">
                <button
                    onClick={() => setIsVisible(!isVisible)}
                    className="text-lg font-bold px-5 py-4 rounded-lg border-1 border-black flex"
                >
                    Easy Login <span className="ml-60 text-3xl font-bold">{isVisible ? <FaMinus /> : <FaPlus />}</span>
                </button>
                <div className={`transition-all duration-1000 ease-in-out overflow-hidden ${
          isVisible ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}>
                    <div className={`${isVisible ? 'block' : 'hidden'} mt-3 text-gray-700 `}>
                        seamless login using their social network accounts<br></br> or general information
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grocerydeliverythird
