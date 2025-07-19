import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
// import DailyOrders from "../components/orders/DailyOrders";
// import OrderDistribution from "../components/orders/OrderDistribution";
// import OrdersTable from "../components/orders/OrdersTable";

const orderStats = {
	totalOrders: "1,234",
	pendingOrders: "56",
	completedOrders: "1,178",
	totalRevenue: "$98,765",
};

const OrdersPage = () => {
	return (
		<div className="flex-1 relative z-10 overflow-auto">
			<Header title={"Orders"}/>
			<main className="max-w-7xl mx-auto">
				<motion.div
				 className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
				 initial={{opacity:0, y:20}}
				 animate={{ opacity: 1, y: 0 }}
				 transition={{ duration: 1 }}
				>
					<StatCard name='Total Orders' icon={ShoppingBag} value={orderStats.totalOrders} color='#6366F1' />
				</motion.div>
			</main>
		</div>
	);
};
export default OrdersPage;
