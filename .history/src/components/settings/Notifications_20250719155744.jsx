import { useState } from 'react'
import { Bell } from "lucide-react";
import SettingSection from './SettingSection'
import ToggleSwitch from './ToggleSwitch';

const Notifications = () => {
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    sms: true
  })


  return (
    <SettingSection icon={Bell} title={"Notifications"}>
      <ToggleSwitch
       label={"Push Notifications"}
      />
      <ToggleSwitch
       label={"Email Notifications"}
      />
      <ToggleSwitch/>
      <ToggleSwitch/>
    </SettingSection>
  )
}

export default Notifications