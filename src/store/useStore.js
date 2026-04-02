import { create } from "zustand";

const saved = JSON.parse(localStorage.getItem("transactions")) || [];

export const useStore = create((set) => ({
  role: "viewer",
  transactions: saved,

  setRole: (role) => set({ role }),

  setTransactions: (data) => {
    localStorage.setItem("transactions", JSON.stringify(data));
    set({ transactions: data });
  },

  addTransaction: (txn) =>
    set((state) => {
      const updated = [...state.transactions, txn];
      localStorage.setItem("transactions", JSON.stringify(updated));
      return { transactions: updated };
    }),

  deleteTransaction: (id) =>
    set((state) => {
      const updated = state.transactions.filter((t) => t.id !== id);
      localStorage.setItem("transactions", JSON.stringify(updated));
      return { transactions: updated };
    }),
}));