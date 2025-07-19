import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const UsersTable = () => {
  const userData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer", status: "Inactive" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Customer", status: "Active" },
    { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Moderator", status: "Active" },
  ];

  const [searchTerm, setSearchTerm] = React.useState('')
  const [filteredUsers, setFilteredUsers] = React.useState(userData)


  return (
    <motion.div
     className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
    >
      
    </motion.div>
  )
}

export default UsersTable
