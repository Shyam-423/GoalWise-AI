import { useState } from "react";

export default function ProfileSetupModal({
  open,
  onSave,
}: any) {

  const [form, setForm] = useState({
    salaryType: "FIXED",
    monthlySalary: "",
    monthlyBudget: "",
    monthlySavingsTarget: "",
    salaryCreditDay: "1",
    currency: "INR",
  });

  if (!open) return null;

  function handleChange(e: any) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-[#151c2b] rounded-xl p-8 w-[500px]">

        <h2 className="text-3xl font-bold mb-6">
          Complete Your Profile
        </h2>

        <div className="space-y-4">

          <select
            name="salaryType"
            value={form.salaryType}
            onChange={handleChange}
            className="w-full rounded bg-[#232d3f] p-3"
          >
            <option value="FIXED">Fixed Salary</option>
            <option value="VARIABLE">Variable Salary</option>
          </select>

          <input
            name="monthlySalary"
            placeholder="Monthly Salary"
            value={form.monthlySalary}
            onChange={handleChange}
            className="w-full rounded bg-[#232d3f] p-3"
          />

          <input
            name="monthlyBudget"
            placeholder="Monthly Budget"
            value={form.monthlyBudget}
            onChange={handleChange}
            className="w-full rounded bg-[#232d3f] p-3"
          />

          <input
            name="monthlySavingsTarget"
            placeholder="Savings Target"
            value={form.monthlySavingsTarget}
            onChange={handleChange}
            className="w-full rounded bg-[#232d3f] p-3"
          />

          <input
            name="salaryCreditDay"
            placeholder="Salary Credit Day"
            value={form.salaryCreditDay}
            onChange={handleChange}
            className="w-full rounded bg-[#232d3f] p-3"
          />

          <button
            onClick={() => onSave(form)}
            className="w-full bg-emerald-500 rounded p-3 font-bold"
          >
            Save & Continue
          </button>

        </div>

      </div>

    </div>
  );
}