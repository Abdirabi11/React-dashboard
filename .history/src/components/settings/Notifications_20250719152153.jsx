import React, { useState } from 'react'

const Notifications = () => {
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    sms: true
  })
  return (
    <div></div>
  )
}

export default Notifications