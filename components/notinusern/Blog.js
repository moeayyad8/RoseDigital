import React from 'react'

function Blog() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
      <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
        <div>
          <p className="mb-2 text-xs font-semibold tracking-wide uppercase">
            New History
          </p>
          <h5 className="max-w-md mb-6 text-3xl font-extrabold leading-none sm:text-4xl">
            The quick, brown fox jumps over a lazy dog
          </h5>
          <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
        </div>
        <div className="flex items-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Get started
          </button>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2">
        <div>
          <p className="mb-2 text-xs font-semibold tracking-wide uppercase">
            New History
          </p>
          <h5 className="max-w-md mb-6 text-3xl font-extrabold leading-none sm:text-4xl">
            The first mate and his Skipper too will do
          </h5>
          <p className="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
            Disrupt inspire and think tank, social entrepreneur but
            preliminary thinking think tank compelling.
          </p>
        </div>
        <div className="flex items-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Get started
          </button>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
    
    <section class="bg-white dark:bg-gray-900">
        <div class="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
            <h2 class="text-3xl font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                Join us and get the update from anywhere
            </h2>
            
            <div class="mt-8 lg:mt-0">
                <div class="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
                    <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email Address"/>
                    
                    <button class="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-700 rounded-md focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Get Started
                    </button>
                </div>

                <p class="mt-3 text-sm text-gray-500 dark:text-gray-300">Attention! Offer expires in 30 days. Make sure not to miss this opportunity</p>
            </div>
        </div>
    </section>
  </div>

  
  )
}

export default Blog