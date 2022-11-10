import React from 'react'
import '../App.css'

const LeftNav = () => {
  return (
    <div>
      <div className="leftNavContainer">
        <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
          <div className="flex -space-x-1 overflow-hidden grid place-items-center mt-5">
            <img
              className="inline-block h-16 w-16 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>

          <div className="px-6 py-4">
            <div className="font-bold text-xl">Kurtison Marlek</div>
            <div className="font-semibold text-l mb-2">Senior Marketer</div>
            <p className="text-gray-700 text-base">
              A decade worth of experience in the Marketing industry. Looking forward to making great connections here.
            </p>
          </div>
          <div className="px-6 pt-4 pb-7">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Marketing
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Business
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Health
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Eritrea
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftNav
