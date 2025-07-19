import { HelpCircle } from 'lucide-react';
import React from 'react'
import SettingSection from './SettingSection';

const ConnectedAccounts = () => {
  const [connectedAccounts, setConnectedAccounts] = useState([
		{
			id: 1,
			name: "Google",
			connected: true,
			icon: "/google.png",
		},
		{
			id: 2,
			name: "Facebook",
			connected: false,
			icon: "/facebook.svg",
		},
		{
			id: 3,
			name: "Twitter",
			connected: true,
			icon: "/x.png",
		},
	]);
  
  return (
    <SettingSection icon={HelpCircle} title={"Connected Accounts"}>
      {ConnectedAccounts.map((account)=>(
        <div key={account.id}>

        </div>
      ))}
    </SettingSection>
  )
}

export default ConnectedAccounts