export default function GoalProgress({
  goals,
}: any) {

  return (

    <div className="bg-[#151c2b] rounded-xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Goal Progress
      </h2>

      {goals.length === 0 ? (

        <p className="text-gray-400">
          No goals created.
        </p>

      ) : (

        <div className="space-y-6">

          {goals.map((goal: any) => {

            const percent =
              goal.targetAmount === 0
                ? 0
                : Math.min(
                    Math.round(
                      (goal.savedAmount /
                        goal.targetAmount) *
                        100
                    ),
                    100
                  );

            return (

              <div key={goal.id}>

                <div className="flex justify-between">

                  <h3 className="font-semibold text-lg">
                    {goal.title}
                  </h3>

                  <span className="text-emerald-400 font-bold">
                    {percent}%
                  </span>

                </div>

                <div className="w-full bg-gray-700 rounded-full h-3 mt-2">

                  <div
                    className="bg-emerald-500 h-3 rounded-full transition-all duration-500"
                    style={{
                      width: `${percent}%`,
                    }}
                  />

                </div>

                <div className="mt-3 flex justify-between text-sm text-gray-400">

                  <span>
                    ₹{goal.savedAmount}
                  </span>

                  <span>
                    ₹{goal.targetAmount}
                  </span>

                </div>

                <div className="mt-1 text-xs text-blue-400">

                  Remaining ₹
                  {goal.targetAmount - goal.savedAmount}

                </div>

              </div>

            );

          })}

        </div>

      )}

    </div>

  );

}