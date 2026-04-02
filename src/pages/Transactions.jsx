import { useStore } from "../store/useStore";
import { useState } from "react";
import TransactionTable from "../components/TransactionTable";

export default function Transactions() {
  const { role, addTransaction } = useStore();

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  const handleSubmit = () => {
    if (!form.date || !form.amount || !form.category) {
      alert("Please fill all fields");
      return;
    }

    addTransaction({
      id: Date.now(),
      ...form,
      amount: Number(form.amount),
    });

    // reset form
    setForm({
      date: "",
      amount: "",
      category: "",
      type: "expense",
    });
  };

  return (
    <div className="p-4">
<h2 className="text-xl font-semibold tracking-wide text-black dark:text-white">
  Transactions
</h2>
      {/* ✅ Only Admin can see form */}
      {role === "admin" && (
        <div className="bg-white p-4 rounded shadow mb-4 space-y-2">

          <input 
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
  className="border p-2 mb-2 w-full rounded-lg shadow-sm dark:bg-gray-700 dark:text-white"
          />

          <input
            type="number"
            placeholder="Amount"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
  className="border p-2 mb-2 w-full rounded-lg shadow-sm dark:bg-gray-700 dark:text-white"
          />

          <input
            placeholder="Category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
  className="border p-2 mb-2 w-full rounded-lg shadow-sm dark:bg-gray-700 dark:text-white"
          />

          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
  className="border p-2 mb-2 rounded-lg dark:bg-gray-700 dark:text-white"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <button
            onClick={handleSubmit}
className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition"          >
            Add Transaction
          </button>
        </div>
      )}

      <TransactionTable />
    </div>
  );
}