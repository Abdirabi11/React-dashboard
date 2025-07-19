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
       isOn={notifications.push}
      />
      <ToggleSwitch
       label={"Email Notifications"}
      />
      <ToggleSwitch
       label={"SMS Notifications"}
      />
    </SettingSection>
  )
}

export default Notifications