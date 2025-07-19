import { User } from 'lucide-react'
import React from 'react'
import SettingSection from './SettingSection'

const Profile = () => {
  return (
    <SettingSection icon={User} title={"Profile"}>
      <div className='flex flex-col sm:flex-row items-center mb-6'>
        <img 
         src='https://randomuser.me/api/portraits/men/3.jpg'
         alt='Profile'
         className='rounded-full w-20 h-20 object-cover mr-4'
        />
      </div>
    </SettingSection>
  )
}

export default Profile