import { useState, useEffect, useRef } from "react";
import { chatAI } from "../../api/ai.api";

export default function ReviewPage() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);

  const bottomRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "Can I buy a gaming laptop this month?",
    "How much can I save this month?",
    "Where am I spending too much?",
    "Can I order food today?",
    "Should I invest ₹5000?",
  ];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function askAI(customQuestion?: string) {
    const text = (customQuestion ?? question).trim();

    if (!text || loading) return;

    const userMessage = {
      role: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setQuestion("");

    setLoading(true);

    try {
      const res = await chatAI(text);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: res.answer,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Sorry, something went wrong. Please try again.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#090d17] text-white">

      <h1 className="text-4xl font-bold mb-2">
        🤖 GoalWise AI Advisor
      </h1>

      <p className="text-gray-400 mb-8">
        Ask anything about your salary, expenses, goals or savings.
      </p>

      <div className="bg-[#151c2b] rounded-2xl p-6 h-[650px] flex flex-col shadow-xl">

        <div className="flex-1 overflow-y-auto pr-2 space-y-5">

          {messages.length === 0 && (

            <div className="flex flex-col items-center justify-center h-full">

              <h2 className="text-3xl font-bold mb-3">
                👋 Hello!
              </h2>

              <p className="text-gray-400 text-center">
                I'm your personal finance assistant.
                <br />
                Try asking one of these:
              </p>

              <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-3xl">

                {suggestions.map((item, index) => (

                  <button
                    key={index}
                    onClick={() => askAI(item)}
                    className="bg-[#232b3d] hover:bg-emerald-500 transition-all duration-200 rounded-full px-5 py-3"
                  >
                    {item}
                  </button>

                ))}

              </div>

            </div>

          )}

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`flex ${
                msg.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-[75%] rounded-2xl px-5 py-4 whitespace-pre-wrap leading-7 shadow-md ${
                  msg.role === "user"
                    ? "bg-emerald-500 text-white"
                    : "bg-[#232b3d]"
                }`}
              >

                <div className="text-xs opacity-70 mb-2">

                  {msg.role === "user"
                    ? "You"
                    : "GoalWise AI"}

                </div>

                {msg.text}

              </div>

            </div>

          ))}

          {loading && (

            <div className="flex justify-start">

              <div className="bg-[#232b3d] rounded-2xl px-5 py-4 shadow-md">

                <div className="text-xs opacity-70 mb-2">
                  GoalWise AI
                </div>

                <div className="animate-pulse">
                  🤖 Thinking...
                </div>

              </div>

            </div>

          )}

          <div ref={bottomRef}></div>

        </div>

        <div className="mt-6 flex gap-3">

          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                askAI();
              }
            }}
            placeholder="Ask anything about your finances..."
            className="flex-1 bg-[#232b3d] rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <button
            disabled={loading}
            onClick={() => askAI()}
            className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-600 transition px-8 rounded-xl font-bold"
          >
            {loading ? "Thinking..." : "Ask AI"}
          </button>

        </div>

      </div>

    </div>
  );
}