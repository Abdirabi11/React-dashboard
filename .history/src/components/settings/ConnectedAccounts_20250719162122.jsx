import { HelpCircle, IceCream, Plus } from 'lucide-react';
import React, { useState } from 'react'
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

  const handleConnect=(id)=>{
    setConnectedAccounts(connectedAccounts.map((acc)=>{
		if(acc.id === account.id){
			return {
				...acc,
				connected: !acc.connected
			} 
		}
		return acc;
	}))
  }
  
  return (
    <SettingSection icon={HelpCircle} title={"Connected Accounts"}>
      {ConnectedAccounts.map((account)=>(
        <div key={account.id} className='flex items-center justify-between py-3'>
          <div className='flex gap-1'>
						<img src={account.icon} alt='Social img' className='size-6 object-cover rounded-full mr-2' />
						<span className='text-gray-300'>{account.name}</span>
					</div>
          <button 
           className={`px-3 py-1 rounded ${account.connected ? 'bg-green-600 hover:bg-green-700'
            : "bg-gray-600 hover:bg-gray-700"} transition duration-200`}
           onClick={}
          >
            {account.connected ? "Connected" : "Connect"}
          </button>
        </div>
      ))}
      <button className='mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200'>
				<Plus size={18} className='mr-2' /> Add Account
			</button>
    </SettingSection>
  )
}

export default ConnectedAccounts