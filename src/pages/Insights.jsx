import { useStore } from "../store/useStore";

export default function Insights() {
  const { transactions } = useStore();

  const expenses = transactions.filter((t) => t.type === "expense");

  const categoryMap = {};
  expenses.forEach((t) => {
    categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
  });

  const highestCategory =
    Object.keys(categoryMap).length > 0
      ? Object.keys(categoryMap).reduce((a, b) =>
          categoryMap[a] > categoryMap[b] ? a : b
        )
      : "N/A";

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = expenses.reduce((a, b) => a + b.amount, 0);
  const savings = income - expense;

  const thisMonth = transactions.filter((t) =>
    t.date.startsWith("2026-04")
  );
  const lastMonth = transactions.filter((t) =>
    t.date.startsWith("2026-03")
  );

  const thisTotal = thisMonth.reduce((a, b) => a + b.amount, 0);
  const lastTotal = lastMonth.reduce((a, b) => a + b.amount, 0);

  return (
<div className="p-4 bg-white dark:bg-gray-800 dark:text-white shadow rounded-xl mt-4 border-l-4 border-indigo-500 neon-border">
<h2 className="text-xl font-semibold tracking-wide">
  Insights
</h2>
      <p>📌 Highest Spending Category: <b>{highestCategory}</b></p>
<p className="text-lg font-semibold tracking-tight">
  💰 Total Savings: ₹{savings}
</p>     
<p className="text-gray-500 dark:text-gray-300">
  📊 Total Transactions: {transactions.length}
</p>
<p className="text-gray-500 dark:text-gray-300">
  📅 This Month: ₹{thisTotal}
</p>
      <p>📅 Last Month: ₹{lastTotal}</p>
    </div>
  );
}