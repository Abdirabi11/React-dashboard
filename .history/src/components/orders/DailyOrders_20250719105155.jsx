import {motion} from "framer-motion";
import { CartesianGrid, LineChart, ResponsiveContainer } from "recharts";

const dailyOrdersData = [
	{ date: "07/01", orders: 45 },
	{ date: "07/02", orders: 52 },
	{ date: "07/03", orders: 49 },
	{ date: "07/04", orders: 60 },
	{ date: "07/05", orders: 55 },
	{ date: "07/06", orders: 58 },
	{ date: "07/07", orders: 62 },
];

const DailyOrders = () => {
  return (
    <motion.div>
        <h2 className='text-xl font-semibold text-gray-100 mb-6'>Daily Orders</h2>
        <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
                <LineChart data={dailyOrdersData}>
                    <CartesianGrid strokeDasharray='3 3' stroke='#374151'/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default DailyOrders