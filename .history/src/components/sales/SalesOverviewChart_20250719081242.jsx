import React from 'react'

const monthlySalesData = [
	{ month: "Jan", sales: 4000 },
	{ month: "Feb", sales: 3000 },
	{ month: "Mar", sales: 5000 },
	{ month: "Apr", sales: 4500 },
	{ month: "May", sales: 6000 },
	{ month: "Jun", sales: 5500 },
	{ month: "Jul", sales: 7000 },
];

const SalesOverviewChart = () => {
    const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");
  return (
    <div>SalesOverviewChart</div>
  )
}

export default SalesOverviewChart