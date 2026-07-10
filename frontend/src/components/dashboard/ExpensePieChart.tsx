import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#22c55e",
  "#3b82f6",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
  "#ec4899",
];

export default function ExpensePieChart({
  expenses,
}: any) {

  const grouped: any = {};

  expenses.forEach((expense: any) => {

    if (!grouped[expense.category]) {

      grouped[expense.category] = 0;

    }

    grouped[expense.category] += expense.amount;

  });

  const data = Object.keys(grouped).map((key) => ({
    name: key,
    value: grouped[key],
  }));

  return (

    <div className="bg-[#151c2b] rounded-xl p-6 h-[360px]">

      <h2 className="text-2xl font-bold mb-5">
        Expense Distribution
      </h2>

      <ResponsiveContainer width="100%" height="90%">

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={110}
            label
          >

            {data.map((_: any, index: number) => (

              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />

            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );

}