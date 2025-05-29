import React from 'react'

function Deliverysecondpage() {

    const data = [
        { image: "https://kbitsolutions.com.au/wp-content/uploads/2023/04/Yellow-and-White-Food-Brand-Opening-Tasty-Facebook-Ad-Instagram-Post-Square-4.png", description: "On-Demand Taxi Service" },
        { image: "https://kbitsolutions.com.au/wp-content/uploads/2023/04/Yellow-and-White-Food-Brand-Opening-Tasty-Facebook-Ad-Instagram-Post-Square-6.png", description: "On-Demand Food Delivery" },
        { image: "https://kbitsolutions.com.au/wp-content/uploads/2023/04/Blue-Modern-Ecommerce-Promotion-of-Furniture-Instagram-Post-2.png", description: "On-Demand E-commerce" },
        { image: "https://kbitsolutions.com.au/wp-content/uploads/2023/04/Yellow-and-White-Food-Brand-Opening-Tasty-Facebook-Ad-Instagram-Post-Square-10.png", description: "On-Demand Pickup & Delivery" },
        { image: "https://kbitsolutions.com.au/wp-content/uploads/2023/04/Yellow-and-White-Food-Brand-Opening-Tasty-Facebook-Ad-Instagram-Post-Square-12.png", description: "On-Demand Grocery Delivery" },
        { image: "https://kbitsolutions.com.au/wp-content/uploads/2023/04/Yellow-and-White-Food-Brand-Opening-Tasty-Facebook-Ad-Instagram-Post-Square-9.png", description: "On-Demand Car Wash" }
    ]
    return (
        <div>
            <div className="pt-60 md:pt-80 lg:pt-100 xl:pt-130">
                <h1 className="text-3xl  md:text-4xl lg:text-4xl xl:text-4xl font-bold text-center">Install Build Delivery For All Industries.</h1>
            </div>
            <div className="second mx-5 md:mr-0 md:ml-3 lg:ml-20 md:pt-5 pt-10 xl:ml-40  flex flex-wrap md:gap-3 lg:gap-3 xl:gap-4">
            {data.map((items, index) => (<div className="">
                    <img className="md:w-60 lg:w-70 xl:w-90" src={items.image} alt="img" />
                    <div className=" md:w-60 lg:w-70 xl:w-90">
                    <h1 className="text-2xl font-bold pb-3 md:font-bold md:text-sm text-center lg:text-xl lg:font-bold xl:text-2xl xl:font-bold">{items.description}</h1>
                    </div>
                </div>))}
            
                

            </div>
        </div>
    )
}

export default Deliverysecondpage
