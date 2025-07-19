import { User } from 'lucide-react'
import React from 'react'
import SettingSection from './SettingSection'

const Profile = () => {
  return (
    <SettingSection icon={User} title={"Profile"}>
      <div className='flex flex-col sm:flex-row items-center mb-6'>
        <img />
      </div>
    </SettingSection>
  )
}

export default Profile