export default function AIInsights({
  review,
}: any) {

  const suggestions = review?.suggestions ?? [];

  return (

    <div className="bg-[#151c2b] rounded-xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        🤖 AI Insights
      </h2>

      <div className="space-y-4">

        {suggestions.length === 0 ? (

          <p className="text-gray-400">
            Generate your first AI Review.
          </p>

        ) : (

          suggestions.map((item: string, index: number) => (

            <div
              key={index}
              className="bg-[#1d2434] rounded-lg p-4 border-l-4 border-emerald-500"
            >

              <p className="text-gray-200">
                {item}
              </p>

            </div>

          ))

        )}

      </div>

    </div>

  );

}