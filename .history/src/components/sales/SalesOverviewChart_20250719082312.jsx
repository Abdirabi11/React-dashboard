import { motion } from 'framer-motion';
import React, { useState } from 'react'

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
    <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
    >
        <div className='flex items-center justify-between mb-6'>
            <h2 className='text-xl font-semibold text-gray-100'>Sales Overview</h2>
            <select>
            <option>This Week</option>
					<option>This Month</option>
					<option>This Quarter</option>
					<option>This Year</option>
            </select>
        </div>
    </motion.div>
  )
}

export default SalesOverviewChart