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

      </ToggleSwitch>

    </SettingSection>
  )
}

export default Security