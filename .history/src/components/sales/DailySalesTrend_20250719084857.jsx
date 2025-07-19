import { motion } from 'framer-motion'
import { ResponsiveContainer } from 'recharts';


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
    <motion.div>
        <h2 className='text-xl font-semibold text-gray-100 mb-4'>Daily Sales Trend</h2>
        <div>
            <ResponsiveContainer>

            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default DailySalesTrend