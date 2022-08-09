import React, {useEffect} from 'react'
import XOrder from "../components/XOrder"
import Footer from "../components/Footer"
import SimpleMenu from '../components/SimpleMenu'
import { db } from '../Firebase';


function Order() {
   

  };

  return (
    <div>
    <div className="grid grid-cols-5 justify-between">
   <div className="bg-gray-800"><SimpleMenu/></div>
   
   <div className="col-span-4">
   <XOrder/>
   </div>
   

    </div>
 
    </div>
  )
}

export default Order