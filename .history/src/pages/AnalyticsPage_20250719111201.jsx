import { motion } from "framer-motion";
import OverviewCards from "../components/analytics/OverviewCards";
import RevenueChart from "../components/analytics/RevenueChart";
import Header from "../components/common/Header";


const AnalyticsPage = () => {
	return (
		<div className="flez-1 overflow-auto relative z-10 bg-gray-900">
			<Header title="Analytics" />
			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
			    <OverviewCards />
				<RevenueChart />
				<div className="grid grid-cols-1 lg:grid-cols-2 gab-8 mb-8">
				    <ChannelPerformance />
					<ProductPerformance />
					<UserRetention />
					<CustomerSegmentation />
				</div>
			</main>
		</div>
	);
};
export default AnalyticsPage;
