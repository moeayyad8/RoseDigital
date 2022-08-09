import React from 'react'

function FooterCard ({title,desc}) {
  return (
    
    <div className="container rounded-md bg-gray-200 hover:bg-yellow-400 cursor-pointer ">
    <h1 className="px-3 font-semibold">{title}</h1>
    <p className="px-3">{desc}</p>
    </div>    
  
  )
}

export default FooterCard