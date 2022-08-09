import React from 'react'

function Navbar({pageProps, href} ) {
  return (
    <nav aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-1 text-lg text-gray-500">
      <li>
        <a class="block transition-colors hover:text-gray-700" href="/"> Home </a>
      </li>
  
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
      </li>
  
      <li>
        <a class="block transition-colors hover:text-gray-700" href="/collections/shirts"> {href} </a>
      </li>
  
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
      </li>
  
      <li>
        <a class="block transition-colors hover:text-gray-700" href="/products/plain-tee"> {href} </a>
      </li>
    </ol>
  </nav>
  )
}

export default Navbar