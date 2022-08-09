import React from 'react'
import SelectCard from './SelectCard'
import Navbar from "../components/Navbar"
import GradiantBox from "../components/GradiantBox"
function XOrder() {
  return (
    <div className='container p-3'>
      <div className="space-y-3">
        
        <h2>*Required Field</h2>
        <SelectCard title="Choose your Talent*" desc="Pick talent that youve worked with before, or find new talent." option1="Browse Actors" optiondesc1="Pick new talent, or talent you've worked with before" option2="Browse Agencies" optiondesc2="Search for talent by agency"/>
        {/*box that allows them to find a new actor or book one theyve had before*/}
        <SelectCard title="Select Scripts* " desc="Choose Scripts that you would like fufilled" option1="New Script" optiondesc1="Write scripts with freewrite or our AI Content Writer" option2="Script Library" optiondesc2="View and choose scripts from your script library "/>
        {/*button*/}
        <div>
          <h1 className="font-semibold"> Delivery Options* </h1>
          
          <a class="relative inline-block text-sm font-medium text-indigo-600 group active:text-indigo-500 focus:outline-none focus:ring" href="/download">
              <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-indigo-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>

              <span class="relative block px-8 py-3 bg-white border border-current">
              Raw Footage
              </span>
          </a>



          <a class="relative inline-block text-sm font-medium text-indigo-600 group active:text-indigo-500 focus:outline-none focus:ring" href="/download">
              <span class="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-indigo-600 group-hover:translate-y-0.5 group-hover:translate-x-0.5"
              ></span>

              <span class="relative block px-8 py-3 bg-white border border-current">
              Edited
              </span>
          </a>

        </div>
       
       
       {/*Footage Upload*/}
        <div>
        
          <div class="p-4 bg-gray-200 border border-gray-700 rounded-xl">
  
         


            <ul class="space-x-2">
            
              <a
                  href="https://github.com/andrewmcodes/hyperui"
                  target="_blank"
                  class="block h-full p-4 border border-gray-700 rounded-lg hover:border-yellow-600"
                >
                  <h5 class="font-medium text-black">Upload Videos</h5>

                  <p class="mt-1 text-xs font-medium text-gray-500">
                  Drag and drop or click to add videos
                  </p>
                </a>
            </ul>
</div>





        </div>       
        
      {/* Order Summary */}
        <div > 
         <h1 className="font-semibold"> Order Summary </h1>
         <div className="grid grid-cols-3 space-x-10 ">
          <GradiantBox title="Actors" desc="price per hour"/>
          <GradiantBox title="Scripts" desc="price per hour"/>
          <GradiantBox title="Order Total" desc="price per hour"/>
          
          </div> 
       

          <a class="relative inline-block group focus:outline-none focus:ring" href="/download">
          <span class="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-yellow-300 group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span class="relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75">
          Checkout 
          </span>
          </a>


          <a class="relative inline-block group focus:outline-none focus:ring" href="/download">
          <span class="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-yellow-300 group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>

          <span class="relative inline-block px-8 py-3 text-sm font-bold tracking-widest uppercase border-2 border-current">
          Checkout 
          </span>
          </a>

        </div>
            
            {/*box that allows them to find a new actor or book one theyve had before*/}
          
               {/* box that allows them to create a new content brief in a popup or grab on from library*/}
      
            
           
            {/* box that allows them to choose if they want the content in a google drive, icloud whereever we can */}
           
     
        
        </div>
       
    </div>
  )
}

export default XOrder