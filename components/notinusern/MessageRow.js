import React from 'react'
import {
User,
} from '@heroicons/react/solid'

function MessageRow({src, Icon, title, alert}) {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
        {src && (
            <Image
            className="rounded-full"
            src={src}
            width={30}
            height={30}
            layout="fixed"
            />
        )}
    {Icon && <Icon className="h-8 w-8 text-gray-500"/>}
    <p className="hidden sm:inline-flex font-medium">{title}</p>
    <section className='align-right p-4 rounded-full bg-yellow-300'>{alert}</section>
    </div>
  )
}

export default MessageRow
