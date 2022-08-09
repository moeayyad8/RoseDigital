import React from 'react'
import XBriefs from "../components/XBriefs"

import Footer from "/components/Footer"
import SimpleMenu from '../components/SimpleMenu'


function Briefs() {
  
 

  return (
   <div>
    <div className="grid grid-cols-5 justify-between">
   <div className="bg-gray-800"><SimpleMenu/></div>
   
   <div className="col-span-4">
    <XBriefs/>
    
   </div>
   
    </div>
    
    </div>
  )
}

export default Briefs