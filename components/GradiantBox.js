import React from 'react'

function GradiantBox({title,desc}) {
  return (
<div class="p-1 shadow-xl bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 rounded-2xl">
    <a class="block p-6 bg-white sm:p-8 rounded-xl" href="">
    <div class="sm:pr-8">
      <h5 class="text-xl font-bold text-gray-900">{title}</h5>

      <p class="mt-2 text-sm text-gray-500">
      {desc}
      </p>
    </div>
  </a>
</div>
  )
}

export default GradiantBox