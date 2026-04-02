import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  PieChart, Pie, Cell
} from "recharts";

export function LineChartComp({ data }) {
  return (
    <LineChart width={400} height={250} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="amount" stroke="#4f46e5" />
    </LineChart>
  );
}

export function PieChartComp({ data }) {
  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <PieChart width={400} height={250}>
      <Pie data={data} dataKey="value" outerRadius={80}>
        {data.map((_, i) => (
          <Cell key={i} fill={COLORS[i % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}