import React from 'react'
import XCampaigns from "../components/XCampaigns"

import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"

function Campaigns() {
  return (
    <div>
    <div className="grid grid-cols-5 justify-between">
   <div className="bg-gray-800"><Sidebar/></div>
   
   <div className="col-span-4">
   <XCampaigns/>
   </div>
   
 
  
    
   
  

    
  
   <router></router>




    </div>
    
    </div>
  )
}

export default Campaigns