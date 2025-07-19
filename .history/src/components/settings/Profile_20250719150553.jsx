import { User } from 'lucide-react'
import React from 'react'
import SettingSection from './SettingSection'

const Profile = () => {
  return (
    <SettingSection icon={User} title={"Profile"}>
      <div>
        <img />
      </div>
    </SettingSection>
  )
}

export default Profile