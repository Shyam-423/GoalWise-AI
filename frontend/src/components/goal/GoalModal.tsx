import { useState } from "react";

export default function GoalModal({
  open,
  onClose,
  onSave,
}: any) {

  const [title, setTitle] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [priority, setPriority] = useState("MEDIUM");

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

      <div className="bg-[#121826] p-6 rounded-xl w-[420px]">

        <h2 className="text-2xl font-bold mb-5">
          Add Goal
        </h2>

        <input
          className="w-full mb-4 p-3 rounded bg-[#1f2937]"
          placeholder="Goal Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <input
          className="w-full mb-4 p-3 rounded bg-[#1f2937]"
          placeholder="Target Amount"
          value={targetAmount}
          onChange={(e)=>setTargetAmount(e.target.value)}
        />

        <select
          className="w-full mb-5 p-3 rounded bg-[#1f2937]"
          value={priority}
          onChange={(e)=>setPriority(e.target.value)}
        >
          <option>LOW</option>
          <option>MEDIUM</option>
          <option>HIGH</option>
        </select>

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="bg-gray-600 px-5 py-2 rounded"
          >
            Cancel
          </button>

          <button
            onClick={()=>{
              onSave({
                title,
                targetAmount:Number(targetAmount),
                priority,
              });
            }}
            className="bg-emerald-500 px-5 py-2 rounded"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}