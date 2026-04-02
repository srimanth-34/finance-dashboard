export default function SummaryCard({ title, value }) {
  return (
<div className="p-4 rounded-xl shadow-lg neon-border bg-gradient-to-r from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 dark:text-white hover:scale-105 transition">      <h2 className="text-gray-500 dark:text-gray-300">{title}</h2>
     <p className="text-2xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
  ₹{value}
</p>
    </div>
  );
}