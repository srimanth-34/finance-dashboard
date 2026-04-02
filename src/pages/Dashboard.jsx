import { useStore } from "../store/useStore";
import SummaryCard from "../components/SummaryCard";
import { LineChartComp, PieChartComp } from "../components/Charts";

export default function Dashboard() {
  const { transactions } = useStore();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  const pieData = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];

  return (
    <div className="p-6 space-y-6">

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Balance" value={balance} />
        <SummaryCard title="Income" value={income} />
        <SummaryCard title="Expenses" value={expense} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg neon-border">
    <LineChartComp data={transactions} />
  </div>

<div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg neon-border">
    <PieChartComp data={pieData} />
  </div>
</div>
</div>
  );
}