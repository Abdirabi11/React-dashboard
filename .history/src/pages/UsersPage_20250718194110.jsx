import { motion } from "framer-motion";
import Header from "../components/common/Header";

const userStats = {
	totalUsers: 152845,
	newUsersToday: 243,
	activeUsers: 98520,
	churnRate: "2.4%",
};

const UsersPage = () => {
	return (
		<div className="flex-1 overflow-auto relative z-10">
			<Header title='Users'/>
			<main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
				<motion.div
				 className=""
				>

				</motion.div>
			</main>
		</div>
	);
};
export default UsersPage;
