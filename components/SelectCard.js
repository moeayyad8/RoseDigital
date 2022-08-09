import React, {useState} from 'react'
import Choicecards from "../components/choicecards"

import { firebaseApp, db, auth } from "../firebase.js"
import { collection, addDoc } from 'firebase/firestore'


  function SelectCard({title, desc, option1, optiondesc1, option2, optiondesc2}) {
  
    
    const [ scriptTitle,setScriptTitle ] = useState('')

    const [isInputVisible, setInputVisible] = useState(false);
    const inputToggle = () => {
        setInputVisible(!isInputVisible)
    }
    return (
    <div>
    <article class="p-4 bg-gray-200 border border-gray-700 rounded-xl">
  
  <div class="flex items-center"> 
    <div class="ml-3">
      <h5 class="text-lg font-medium text-black">{title}</h5>
      <div class="flow-root">
        <ul class="flex flex-wrap -m-1">
          <li class="p-1 leading-none">
              {desc}
          </li>
        </ul>
      </div>
    </div>
  </div>


  <ul class="grid grid-cols-2 mt-4 space-x-2">
   
    <button
        onClick={inputToggle}
        class="block h-full p-4 border border-gray-700 rounded-lg hover:border-yellow-600"
      >
      
         
      
        <p class="mt-1 text-xs font-medium text-gray-500">
         {optiondesc1}
        </p>
      </button>

      <button
        href="https://github.com/andrewmcodes/hyperui"
        target="_blank"
        class="block h-full p-4 border border-gray-700 rounded-lg hover:border-yellow-600"
      >
        <h5 class="font-medium text-black">{option2}</h5>

        <p class="mt-1 text-xs font-medium text-gray-500">
        {optiondesc2}
        </p>
      </button>
    
  
 

   
  </ul>
</article>

    </div>
  )
}

export default SelectCard