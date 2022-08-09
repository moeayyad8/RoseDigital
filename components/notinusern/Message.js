import {
UserIcon,
} from '@heroicons/react/solid'

import React from 'react'
import MessageRow from './MessageRow'



function Message() {
  return (
    <div className='px-5'>
       
    

        <div className='p-3 shadow-md'>
            
             <h1 className='text-2xl font-bold p-2 '>Messages</h1>
             <div className='shadow-md rounded-full bg-yellow-500 text-xl text-white font-semibold text-center '>
            <h1 className=''> X Unread Messages </h1>
        </div>
            {/*This is a test area */}
            <MessageRow Icon={UserIcon} title="Actor Name" alert="on"/>
            <MessageRow Icon={UserIcon} title="Actor Name"/>
            <MessageRow Icon={UserIcon} title="Actor Name"/>
            <MessageRow Icon={UserIcon} title="Actor Name"/>
            <MessageRow Icon={UserIcon} title="Actor Name"/>
            <MessageRow Icon={UserIcon} title="Actor Name"/>
         
            <div className="flex flex-col md:flex-row flex-1">
            <aside className="bg-fuchsia-100 w-full md:w-60"></aside>
            <main className="flex-1">11</main>
            </div>
          

        </div>
  
    </div>
  )
}

export default Message