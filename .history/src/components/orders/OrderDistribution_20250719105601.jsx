import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const orderStatusData = [
	{ name: "Pending", value: 30 },
	{ name: "Processing", value: 45 },
	{ name: "Shipped", value: 60 },
	{ name: "Delivered", value: 120 },
];
const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FED766", "#2AB7CA"];


const OrderDistribution = () => {

  return (
    <motion.div>
        <h2 className='text-xl font-semibold text-gray-100 mb-4'>Order Status Distribution</h2>
        <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie>
                        {orderStatusData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "rgba(31, 41, 55, 0.8)",
                            borderColor: "#4B5563",
                        }}
                        itemStyle={{ color: "#E5E7EB" }}
                    />
					<Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default OrderDistribution