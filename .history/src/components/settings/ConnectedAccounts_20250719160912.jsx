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
        <div key={account.id} className='flex items-center justify-between py-3'>
          <div className='flex gap-1'>
						<img src={account.icon} alt='Social img' className='size-6 object-cover rounded-full mr-2' />
						<span className='text-gray-300'>{account.name}</span>
					</div>
        </div>
      ))}
    </SettingSection>
  )
}

export default ConnectedAccounts