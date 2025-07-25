import React from 'react'

const ToggleSwitch = ({label, isOn, onToggle}) => {

  return (
    <div className='flex items-center justify-between py-3'>
        <span className='text-gray-300'> {label}</span>
        <button 
         className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors
         focus:outline-none ${isOn ? 'bg-inidigi-600' : 'bg-gray-600'}
         `}
         onClick={onToggle}
        >

        </button>
    </div>
  )
}

export default ToggleSwitch