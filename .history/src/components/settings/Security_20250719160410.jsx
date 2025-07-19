import { Lock } from 'lucide-react'
import { useState } from 'react'
import SettingSection from './SettingSection'
import ToggleSwitch from './ToggleSwitch'


const Security = () => {
  const [twoFactor, setTwoFactor]=useState(false)
  return (
    <SettingSection icon={Lock} title={"Security"}>
      <ToggleSwitch
       label={"two-Factor Authentication"}
       onToggle={() => setTwoFactor(!twoFactor)}
      >
        <div className='mt-4'>
				<button
					className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded 
        transition duration-200
        '
				>
					Change Password
				</button>
			</div>
      </ToggleSwitch>

    </SettingSection>
  )
}

export default Security