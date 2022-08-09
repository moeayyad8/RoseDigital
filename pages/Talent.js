import React from 'react'
import SimpleMenu from '../components/SimpleMenu'
import ActorSearch from '../components/ActorSearch'
import ActorsCard from '../components/ActorsCard'
import SelectCard from '../components/SelectCard'


function Talent() {
  
    return (
    <div>
    <div className="grid grid-cols-5 justify-between">
   <div className="bg-gray-800"><SimpleMenu/></div>
   
   <div className="col-span-4">
   <h1 className="font-bold text-3xl px-6 py-6">Talent Database </h1>
   <SelectCard title="Choose your Talent*" desc="Pick talent that youve worked with before, or find new talent." option1="Browse Actors" optiondesc1="Pick new talent, or talent you've worked with before" option2="Browse Agencies" optiondesc2="Search for talent by agency"/>
   <ActorSearch/>
   <h1 className='font-semibold text-xl p-3 '>User Name's Talent Roster</h1>
   <div className='grid grid-flow-col grid-flow-row'>
   <ActorsCard/>
   <ActorsCard/>
   <ActorsCard/>
   
   

   </div>
   <ActorsCard/><ActorsCard/><ActorsCard/>
   </div>
 
    </div>
    </div>
  )
}

export default Talent