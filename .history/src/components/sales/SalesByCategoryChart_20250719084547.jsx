import { motion } from "framer-motion"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"


const salesByCategory = [
	{ name: "Electronics", value: 400 },
	{ name: "Clothing", value: 300 },
	{ name: "Home & Garden", value: 200 },
	{ name: "Books", value: 100 },
	{ name: "Others", value: 150 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];

const SalesByCategoryChart = () => {

  return (
    <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
    >
        <h2 className='text-xl font-semibold text-gray-100 mb-4'>Sales by Category</h2>
        <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                     data={salesByCategory}
                     cx="50%"
                     cy="50%"
                     outerRadius={80}
                     fill='#8884d8'
                    >
                        {salesByCategory.map((entry, index) => (
                            <Cell key={`sales-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default SalesByCategoryChart