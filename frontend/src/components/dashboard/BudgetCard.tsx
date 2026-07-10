export default function BudgetCard({
  budget,
  expense,
}: any) {

  const percentage =
    budget === 0
      ? 0
      : Math.min(
          Math.round((expense / budget) * 100),
          100
        );

  const remaining = budget - expense;

  return (

    <div className="bg-[#151c2b] rounded-xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Monthly Budget
      </h2>

      <div className="flex justify-between mb-2">

        <span>Spent</span>

        <span>
          ₹{expense}
        </span>

      </div>

      <div className="w-full bg-gray-700 rounded-full h-4">

        <div
          className="bg-emerald-500 h-4 rounded-full"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <div className="mt-5 flex justify-between">

        <div>

          <p className="text-gray-400">
            Budget
          </p>

          <h2 className="text-xl font-bold">
            ₹{budget}
          </h2>

        </div>

        <div>

          <p className="text-gray-400">
            Remaining
          </p>

          <h2 className="text-xl font-bold text-blue-400">
            ₹{remaining}
          </h2>

        </div>

      </div>

      <p className="mt-4 text-sm text-gray-400">
        {percentage}% used
      </p>

    </div>

  );

}