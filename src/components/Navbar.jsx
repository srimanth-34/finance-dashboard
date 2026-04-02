import { useStore } from "../store/useStore";

export default function Navbar() {
  const { role, setRole } = useStore();

  return (
    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-gray-800 dark:to-gray-900 text-white shadow-lg">
 <h1 className="text-2xl font-semibold tracking-wide">
  💰 Finance Dashboard
</h1>

  <select
    value={role}
    onChange={(e) => setRole(e.target.value)}
    className="text-black p-2 rounded-lg shadow"
  >
    <option value="viewer">Viewer</option>
    <option value="admin">Admin</option>
  </select>
</div>
  );
}