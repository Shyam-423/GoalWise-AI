import { useEffect, useState } from "react";
import {
  getExpenses,
  deleteExpense,
} from "../../api/expense.api";

import ExpenseModal from "../../components/expense/ExpenseModal";


import {
  
  createExpense,
  updateExpense,
  
} from "../../api/expense.api";


export default function ExpensePage() {
  const [expenses, setExpenses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const [editing, setEditing] = useState<any>(null);

  async function loadExpenses() {
    try {
      const res = await getExpenses();
      setExpenses(res.expenses);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this expense?")) return;

    await deleteExpense(id);
    loadExpenses();
  }
  async function handleSave(data: any) {

    console.log("Saving:", data);
  if (editing) {
    await updateExpense(editing.id, data);
  } else {
    await createExpense(data);
  }

  setOpen(false);
  setEditing(null);

  loadExpenses();
}


  useEffect(() => {
    loadExpenses();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#090d17] text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    
    <div className="min-h-screen bg-[#090d17] text-white p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Expenses
        </h1>

        <button
        onClick={() => {
            setEditing(null);
            setOpen(true);
        }}
        className="bg-emerald-500 px-5 py-2 rounded-lg font-semibold"
        >
        + Add Expense
        </button>

      </div>

      <div className="space-y-5">

        {expenses.map((expense) => (

          <div
            key={expense.id}
            className="bg-[#151c2b] rounded-xl p-6 flex justify-between items-center"
          >

            <div>

              <h2 className="text-xl font-semibold">
                {expense.title}
              </h2>

              <p className="text-gray-400">
                {expense.category}
              </p>

              <p className="text-sm text-gray-500">
                {new Date(expense.expenseDate).toLocaleDateString()}
              </p>

            </div>

            <div className="text-right">

              <p className="text-2xl font-bold text-emerald-400">
                ₹{expense.amount}
              </p>

              <div className="mt-3 flex gap-3 justify-end">

                <button
                    onClick={() => {
                        setEditing(expense);
                        setOpen(true);
                    }}
                    className="bg-blue-500 px-4 py-2 rounded"
                    >
                    Edit
                    </button>

                <button
                  onClick={() => handleDelete(expense.id)}
                  className="bg-red-500 px-4 py-2 rounded"
                >
                  Delete
                </button>

              </div>

            </div>

          </div>

        ))}

       

      </div>
       <ExpenseModal
            open={open}
            expense={editing}
            onClose={() => setOpen(false)}
            onSave={handleSave}
            />
    </div>
  
  );
}