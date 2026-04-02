import { useStore } from "../store/useStore";
import { useState } from "react";

export default function TransactionTable() {
  const { transactions, deleteTransaction, role } = useStore();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "amount") return b.amount - a.amount;
    if (sort === "date") return new Date(b.date) - new Date(a.date);
    return 0;
  });

  return (
<div className="overflow-x-auto Inebg-white dark:bg-gray-800 dark:text-white p-4 rounded-xl shadow-lg neon-border">
      {/* Search */}
      <input
        placeholder="Search category..."
        className="border p-2 mb-2 w-full rounded-lg shadow-sm dark:bg-gray-700 dark:text-white"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Sort */}
      <select
        className="border p-2 mb-2 rounded-lg dark:bg-gray-700 dark:text-white"
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort</option>
        <option value="amount">Amount</option>
        <option value="date">Date</option>
      </select>

      {/* Table */}
<table className="w-full table-auto bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-lg overflow-hidden">
    <thead className="bg-indigo-500 dark:bg-gray-700 text-white">
  <tr>
    <th className="px-4 py-2 text-center">Date</th>
    <th className="px-4 py-2 text-center">Amount</th>
    <th className="px-4 py-2 text-center">Category</th>
    <th className="px-4 py-2 text-center w-32">Type</th>
    {role === "admin" && (
      <th className="px-4 py-2 text-center w-32">Action</th>
    )}
  </tr>
</thead>

<tbody>
  {sorted.map((t) => (
    <tr
      key={t.id}
      className="hover:bg-gray-100 dark:hover:bg-gray-700 transition"
    >
      <td className="px-4 py-2 text-center">{t.date}</td>
      <td className="px-4 py-2 text-center">{t.amount}</td>
      <td className="px-4 py-2 text-center">{t.category}</td>
      <td className="px-4 py-2 text-center">{t.type}</td>

      {role === "admin" && (
        <td className="px-4 py-2 text-center">
          <button
            onClick={() => {
              if (window.confirm("Are you sure?")) {
                deleteTransaction(t.id);
              }
            }}
            className="bg-gradient-to-r from-red-400 to-red-600 text-white px-3 py-1 rounded-lg shadow hover:scale-105 transition"
          >
            Delete
          </button>
        </td>
      )}
    </tr>
  ))}
</tbody>

      </table>

      {/* Empty State */}
      {transactions.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-300 mt-4">
  No transactions available
</p>
      )}
    </div>
  );
}