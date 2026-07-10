import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  expense?: any;
};

export default function ExpenseModal({
  open,
  onClose,
  onSave,
  expense,
}: Props) {

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  const [customCategory, setCustomCategory] = useState("");

  useEffect(() => {

    if (expense) {

      setTitle(expense.title);
      setCategory(expense.category);
      setAmount(expense.amount);

      setExpenseDate(
        expense.expenseDate.slice(0,10)
      );

    } else {

      setTitle("");
      setCategory("");
      setAmount("");
      setExpenseDate("");

    }

  }, [expense]);

  if (!open) return null;

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-[#121826] rounded-xl p-8 w-[420px]">

        <h2 className="text-2xl font-bold mb-6 text-white">

          {expense ? "Edit Expense" : "Add Expense"}

        </h2>

        <input

          className="w-full mb-4 p-3 rounded bg-[#1f2937] text-white"

          placeholder="Title"

          value={title}

          onChange={(e)=>setTitle(e.target.value)}

        />

        <select
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          className="w-full mb-4 p-3 rounded bg-[#1f2937] text-white"
      >
          <option value="">Select Category</option>
          <option value="FOOD">Food</option>
          <option value="TRANSPORT">Transport</option>
          <option value="SHOPPING">Shopping</option>
          <option value="BILLS">Bills</option>
          <option value="HEALTH">Health</option>
          <option value="EDUCATION">Education</option>
          <option value="ENTERTAINMENT">Entertainment</option>
          <option value="TRAVEL">Travel</option>
          <option value="SUBSCRIPTION">Subscription</option>
          <option value="INVESTMENT">Investment</option>
          <option value="OTHER">Other</option>
      </select>

          {category === "OTHER" && (

    <input
        placeholder="Enter custom category"
        value={customCategory}
        onChange={(e)=>setCustomCategory(e.target.value)}
        className="w-full mb-4 p-3 rounded bg-[#1f2937] text-white"
    />

    )}

        <input

          type="number"

          className="w-full mb-4 p-3 rounded bg-[#1f2937] text-white"

          placeholder="Amount"

          value={amount}

          onChange={(e)=>setAmount(e.target.value)}

        />

        <input

          type="date"

          className="w-full mb-6 p-3 rounded bg-[#1f2937] text-white"

          value={expenseDate}

          onChange={(e)=>setExpenseDate(e.target.value)}

        />

        <div className="flex justify-end gap-3">

          <button

          onClick={onClose}

          className="px-5 py-2 bg-gray-600 rounded">

            Cancel

          </button>

          <button

          onClick={()=>{

            onSave({
                title,
                category,
                customCategory,
                amount:Number(amount),
                expenseDate:new Date(expenseDate).toISOString(),
            });

         }}

          className="px-5 py-2 bg-emerald-500 rounded">

            Save

          </button>

        </div>

      </div>

    </div>

  );

}