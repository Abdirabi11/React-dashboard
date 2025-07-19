import {motion} from "framer-motion";

const dailyOrdersData = [
	{ date: "07/01", orders: 45 },
	{ date: "07/02", orders: 52 },
	{ date: "07/03", orders: 49 },
	{ date: "07/04", orders: 60 },
	{ date: "07/05", orders: 55 },
	{ date: "07/06", orders: 58 },
	{ date: "07/07", orders: 62 },
];

const DailyOrders = () => {
  return (
    <motion.div>
        <h2 className='text-xl font-semibold text-gray-100 mb-4'>Daily Orders</h2>
    </motion.div>
  )
}

export default DailyOrders