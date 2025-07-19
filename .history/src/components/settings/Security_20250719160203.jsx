import { Lock } from 'lucide-react'
import SettingSection from './SettingSection'


const Security = () => {
  return (
    <SettingSection icon={Lock} title={"Security"}>
      <ToggleSwitch
       label={"wo-Factor Authentication"}
      >

      </ToggleSwitch>

    </SettingSection>
  )
}

export default Security