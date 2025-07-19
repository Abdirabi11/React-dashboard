import React from 'react'

const ToggleSwitch = ({label, isOn, onToggle}) => {

  return (
    <div className='flex items-center justify-between py-3'>
        <span className='text-gray-300'> {label}</span>
    </div>
  )
}

export default ToggleSwitch