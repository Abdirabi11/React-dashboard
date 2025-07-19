import { useState } from 'react'
import { Bell } from "lucide-react";
import SettingSection from './SettingSection'

const Notifications = () => {
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    sms: true
  })


  return (
    <SettingSection icon={Bell} title={"Notifications"}>

    </SettingSection>
  )
}

export default Notifications