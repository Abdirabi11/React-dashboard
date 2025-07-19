import React from 'react'

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
    <div>ConnectedAccounts</div>
  )
}

export default ConnectedAccounts