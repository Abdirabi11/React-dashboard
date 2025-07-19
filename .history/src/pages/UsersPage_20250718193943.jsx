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
			<Header/>
		</div>
	);
};
export default UsersPage;
