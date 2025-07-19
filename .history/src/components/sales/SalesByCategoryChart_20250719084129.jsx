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
        <ResponsiveContainer>

        </ResponsiveContainer>
    </motion.div>
  )
}

export default SalesByCategoryChart