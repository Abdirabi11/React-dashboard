import { motion } from "framer-motion";
import { DollarSign, Users, ShoppingBag, Eye, ArrowDownRight, ArrowUpRight } from "lucide-react";

const overviewData = [
	{ name: "Revenue", value: "$1,234,567", change: 12.5, icon: DollarSign },
	{ name: "Users", value: "45,678", change: 8.3, icon: Users },
	{ name: "Orders", value: "9,876", change: -3.2, icon: ShoppingBag },
	{ name: "Page Views", value: "1,234,567", change: 15.7, icon: Eye },
];


const OverviewCards = () => {
  return ( 
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      {overviewData.map((item, index)=> (
        
      ))}
    </div>
  )
}

export default OverviewCards