import { motion } from "framer-motion";
import Header from "../components/common/Header";

const salesStats = {
	totalRevenue: "$1,234,567",
	averageOrderValue: "$78.90",
	conversionRate: "3.45%",
	salesGrowth: "12.3%",
};

const SalesPage = () => {
	return (
		<div className="flex-1 overflow-auto relative z-10">
			<Header title='Sales Dashboard' />
			<main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
				<motion.div
				 className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
				 initial={{ opacity: 0, y: 20 }}
				 animate={{ opacity: 1, y: 0 }}
				 transition={{ duration: 1 }}
				>
				
				</motion.div>
			</main>
		</div>
	);
};
export default SalesPage;
