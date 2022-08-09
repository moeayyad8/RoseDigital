import React, {useState} from 'react'
import CalendarIcon from '@heroicons/react/outline'
import SelectCard from "../components/SelectCard"
import Choicecards from './choicecards'
import FolderCard from './FolderCard'

function XBriefs() {
  
  
  return (
 
   
           <div >
            <div className='py-5 px-3'>
            <SelectCard title="Write Scripts" option1="Free Write" optiondesc1="Use the text editor to write scripts" option2="AI Content Writer" optiondesc2="Generate ideas, hooks, and even full short form scripts! "/>
            </div>
            
            <h1 className="font-bold text-3xl px-6 py-6">Script Library</h1>
            
            <div className='px-2'>
            <h2 className="px-3 font-semibold">Recent Scripts</h2>
           <div className="grid grid-cols-4 py-2 space-x-3">
            <Choicecards title="User Recent Script"/>
            <Choicecards title="ssssssssssssssssssssss"/>
            <Choicecards title="ssssssssssssssssss"/>
            <Choicecards title="ssssssssssssssssssss"/>
           </div>
           </div>
           <h2 className='px-3 py-3 font-semibold'>Folders</h2>
           
           <div className="flex space-x-2">
           <FolderCard title="User FIle Name"/>
           <FolderCard title="User FIle Name"/>
           <FolderCard title="User FIle Name"/>
           <FolderCard title="User FIle Name"/>
           
           </div>
           
           </div>
         

       
  
  )
}

export default XBriefs