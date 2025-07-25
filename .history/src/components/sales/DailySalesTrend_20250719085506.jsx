import { motion } from 'framer-motion'
import { BarChart, CartesianGrid, PieChart, ResponsiveContainer } from 'recharts';


const dailySalesData = [
	{ name: "Mon", sales: 1000 },
	{ name: "Tue", sales: 1200 },
	{ name: "Wed", sales: 900 },
	{ name: "Thu", sales: 1100 },
	{ name: "Fri", sales: 1300 },
	{ name: "Sat", sales: 1600 },
	{ name: "Sun", sales: 1400 },
];

const DailySalesTrend = () => {
  return (
    <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
    >
        <h2 className='text-xl font-semibold text-gray-100 mb-4'>Daily Sales Trend</h2>
        <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
                <BarChart data={dailySalesData}>
                    <CartesianGrid strokeDasharray='3 9' stroke='#374151'/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default DailySalesTrend