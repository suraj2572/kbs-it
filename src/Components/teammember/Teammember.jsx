import React from 'react'

function Teammember() {

  const data = [{image: "https://kbitsolutions.com.au/wp-content/uploads/2023/07/images_3-jaTwwMPci-transformed.jpeg " , name: "Taha "},
    {image: "https://kbitsolutions.com.au/wp-content/uploads/2023/07/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838-1.webp " , name:"Mukesh "},
    {image: " https://kbitsolutions.com.au/wp-content/uploads/2023/07/istockphoto-1448167415-170667a.webp" , name: "Ajay"},
    {image: "https://kbitsolutions.com.au/wp-content/uploads/2023/07/istockphoto-1272687005-612x612-1.jpg" , name: "Jasneet"},
    {image: "https://kbitsolutions.com.au/wp-content/uploads/2023/07/istockphoto-495827884-612x612-1.jpg" , name:"Robin"},
    {image: "https://kbitsolutions.com.au/wp-content/uploads/2023/07/Professional-Headshot-Poses-Blog-Post-7-768x512.webp" , name:"Ritika"}
  ]

  return (
    <>
      <div className=" ">
        <div className=" lg:w-3/3 md:w-3/3 xl:w-3/3 md:h-[490px] xl:h-auto flex justify-center flex-wrap gap-4 mt-10">
        {data.map((items,index)=>(
          <div className="bg-zinc-200 w-[400px] h-[250px] sm:w-[600px] sm:h-[250px] md:w-[240px]  md:h-[220px] xl:w-[380px] xl:h-[280px]  flex justify-center  ">
            <div className="w-[300px] mt-3 sm:w-[300px] md:w-[200px] lg:w-[210px] xl:w-[300px] xl:h-[200px] sm:mt-3  md:mt-4    xl:mt-3 xl:ml-4">
              <img className="object-fill" src={items.image} alt="img" />
              <h3 className="ml-30 md:text-lg xl:text-2xl text-zinc-600 font-semibold sm:ml-30 md:ml-19 md:mt-2 xl:ml-30 xl:mt-3"><i>{items.name}</i></h3>
            </div>




          </div>
        ))}
          

          
          

          
          
          
          

          

        </div>

        

      </div>

    </>
  )
}

export default Teammember
