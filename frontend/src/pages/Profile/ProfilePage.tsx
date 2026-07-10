import { useEffect, useState } from "react";

import {
  getProfile,
  updateProfile,
} from "../../api/profile.api";

export default function ProfilePage() {

  const [profile, setProfile] = useState<any>({
    salaryType: "FIXED",
    monthlySalary: "",
    monthlyBudget: "",
    monthlySavingsTarget: "",
    salaryCreditDay: 1,
    currency: "INR",
  });

  async function loadProfile() {
    try {
      const res = await getProfile();

      if (res.profile) {
        setProfile(res.profile);
      }

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadProfile();
  }, []);

  async function handleSave() {

    await updateProfile(profile);

    alert("Profile Updated Successfully");

    loadProfile();

  }

  return (

    <div className="text-white">

      <h1 className="text-4xl font-bold mb-8">
        Profile
      </h1>

      <div className="bg-[#151c2b] rounded-xl p-8 max-w-3xl">

        {/* Salary Type */}

        <label className="block mb-2">
          Salary Type
        </label>

        <select
          className="w-full mb-5 bg-[#1d2638] p-3 rounded"
          value={profile.salaryType}
          onChange={(e)=>
            setProfile({
              ...profile,
              salaryType:e.target.value
            })
          }
        >
          <option value="FIXED">Fixed</option>
          <option value="VARIABLE">Variable</option>
        </select>

        {/* Salary */}

        <label className="block mb-2">
          Monthly Salary
        </label>

        <input
          className="w-full mb-5 bg-[#1d2638] p-3 rounded"
          value={profile.monthlySalary}
          onChange={(e)=>
            setProfile({
              ...profile,
              monthlySalary:Number(e.target.value)
            })
          }
        />

        {/* Budget */}

        <label className="block mb-2">
          Monthly Budget
        </label>

        <input
          className="w-full mb-5 bg-[#1d2638] p-3 rounded"
          value={profile.monthlyBudget}
          onChange={(e)=>
            setProfile({
              ...profile,
              monthlyBudget:Number(e.target.value)
            })
          }
        />

        {/* Savings */}

        <label className="block mb-2">
          Monthly Savings Target
        </label>

        <input
          className="w-full mb-5 bg-[#1d2638] p-3 rounded"
          value={profile.monthlySavingsTarget}
          onChange={(e)=>
            setProfile({
              ...profile,
              monthlySavingsTarget:Number(e.target.value)
            })
          }
        />

        {/* Salary Credit Day */}

        <label className="block mb-2">
          Salary Credit Day
        </label>

        <input
          type="number"
          className="w-full mb-5 bg-[#1d2638] p-3 rounded"
          value={profile.salaryCreditDay}
          onChange={(e)=>
            setProfile({
              ...profile,
              salaryCreditDay:Number(e.target.value)
            })
          }
        />

        {/* Currency */}

        <label className="block mb-2">
          Currency
        </label>

        <input
          className="w-full mb-8 bg-[#1d2638] p-3 rounded"
          value={profile.currency}
          onChange={(e)=>
            setProfile({
              ...profile,
              currency:e.target.value
            })
          }
        />

        <button
          onClick={handleSave}
          className="bg-emerald-500 px-6 py-3 rounded-lg font-semibold"
        >
          Save Changes
        </button>

      </div>

    </div>

  );

}