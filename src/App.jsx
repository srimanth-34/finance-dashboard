import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions.jsx";
import Insights from "./pages/Insights";
import { useStore } from "./store/useStore";
import { transactions } from "./data/mockData";
import DarkModeToggle from "./components/DarkModeToggle";

export default function App() {
  const setTransactions = useStore((s) => s.setTransactions);

  useEffect(() => {
    setTransactions(transactions);
  }, []);

  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      
      {/* ✅ Navbar added */}
      <Navbar />

      {/* ✅ Content wrapper (important for spacing) */}
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        <Dashboard />
        <Transactions />
        <Insights />
      </div>

      {/* ✅ Floating dark mode */}
      <DarkModeToggle />
    </div>
  );
}