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
			<main>
				<motion.div>
				
				</motion.div>
			</main>
		</div>
	);
};
export default SalesPage;
