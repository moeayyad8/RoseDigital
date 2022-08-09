import React from 'react'
import Table from './Table'
import Carasoul from "./notinusern/Carasoul"


function XCampaigns() {
  return (
    <div>
        <h1 className='font-bold text-2xl p-3'>Campaigns</h1>
        <div className='p-1 shadow-xl bg-gradient-to-r from-blue-500 via-blue-500 to-yellow-500 rounded-2xl'>
        <a className="block p-6 bg-white sm:p-8 rounded-xl" href="">
             <div className="mt-16 sm:pr-8">
                <h5 className="text-xl font-bold text-gray-900">Content Summary</h5>

                    <p className="mt-2 text-sm text-gray-500">
                     Go through your summary and see whats up 
                     </p>
                     <div className='grid grid-cols-2 grid-rows-2'>
                        <div className='container rounded-md bg-gray-100 shadow-md'>
                        <h1 className='font-bold text-4xl px-3 py-2'>0</h1>
                        <p className='text-left font-semibold p-3'>Impressions</p>
                        </div>
                     
                        <div className='container rounded-md bg-gray-100 shadow-md'>
                        <h1 className='font-bold text-4xl px-3 py-2'>0</h1>
                        <p className='text-left font-semibold p-3'>Impressions</p>
                        </div>
                        
                        <div className='container rounded-md bg-gray-100 shadow-md'>
                        <h1 className='font-bold text-4xl px-3 py-2'>0</h1>
                        <p className='text-left font-semibold p-3'>Impressions</p>
                        </div>
                        
                        <div className='container rounded-md bg-gray-100 shadow-md'>
                        <h1 className='font-bold text-4xl px-3 py-2'>0</h1>
                        <p className='text-left font-semibold p-3'>Impressions</p>
                        </div>
                     </div>
            </div>
         </a>
         {/*This is a test */}
         
         {/*This is a test */}


        </div>
        {/*This is a test */}
        <ul class="flex border-b border-gray-100">
  <li class="flex-1">
    <a class="relative block p-4" href="">
      <span class="absolute inset-x-0 w-full h-px bg-pink-600 -bottom-px"></span>

      <div class="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="flex-shrink-0 w-5 h-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>

        <span class="ml-3 text-sm font-medium text-gray-900"> Organic </span>
      </div>
    </a>
  </li>

  <li class="flex-1">
    <a class="relative block p-4" href="">
      <div class="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="flex-shrink-0 w-5 h-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>

        <span class="ml-3 text-sm font-medium text-gray-900"> Paid Media </span>
      </div>
    </a>
  </li>



</ul>

         {/*This is a test */}
        <h1 className='font-semibold text-md p-3'>Top Performing Posts </h1>
               
    
 {/*This is where a caraosul goes */}
 <div className="flex items-center justify-center -mx-4 lg:pl-8">
        <div className="flex flex-col items-end px-3">
          <img
            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="px-3">
          <img
            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
            src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            alt=""
          />
        </div>
      </div>
        
        
<div>
    <h1 class='font-semibold px-4 py-3'>View all</h1>
    <Table/>
</div>


    </div>
  )
}

export default XCampaigns