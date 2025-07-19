import { motion } from "framer-motion"
import { ResponsiveContainer } from "recharts"


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

        </ResponsiveContainer>
    </motion.div>
  )
}

export default SalesByCategoryChart