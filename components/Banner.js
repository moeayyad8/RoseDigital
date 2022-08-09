import React from 'react'
import Image from 'next/image'
import Dropdown from "./notinusern/Dropdown"
import Genderdropdown from "./notinusern/Gender"

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:[500px] xl:h-[600px] 2xl:[700px]">
        //HERO IMAGE 
   <Image src= "https://tinyimg.io/i/uyuegWl.jpg" layout="fill"  objectfit="cover"/>  
    
    <div className="absolute p-5 text-white w-full text-center">
    <p className="text-4xl font-bold "> Bring your Viral Content Ideas to Life </p>
    <div className="grid grid-cols-2">
    
    <Genderdropdown/>
    <Dropdown/>
    

    </div>
    <button className="text-yellow-600 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">Search</button>    
   
    </div>

    
    </div>
  )
}

export default Banner