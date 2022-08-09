import React from 'react'
import Image from 'next/image'
import {SearchIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
    GlobeAltIcon,
} from '@heroicons/react/solid'
function AppHeader() {
  return (
    <div><header className='sticky top-0 z-25 grid grid-cols-2 bg-gray-900 shadow-md p-5 md:p-4'>
     
        {/* left */}
        <div className='relative flex items-center h-7 cursor-pointer my-auto'>
           
            <Image src="https://tinyimg.io/i/2jkwyII.png"
             layout ="fill"
             objectFit="contain"
             objectPosition="left"/>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4 justify-end text-gray-500">
            <p className="hidden md:inline cursor-pointer ">Try Free</p>
            <GlobeAltIcon className="h-6 cursor-pointer"/>

            <div className="flex items-center space-x-2 border-2 p-2 rounded-full ">
            <MenuIcon className="h-6"/>
            <UserCircleIcon className="h-6"/>    
            </div>
        </div>
    
    </header></div>
  )
}

export default AppHeader