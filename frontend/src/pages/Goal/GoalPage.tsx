import { useEffect, useState } from "react";

import GoalModal from "../../components/goal/GoalModal";

import {
  getGoals,
  createGoal,
  deleteGoal,
} from "../../api/goal.api";



export default function GoalPage() {

  const [goals,setGoals]=useState<any[]>([]);
  const [open,setOpen]=useState(false);

  async function loadGoals(){

    const res=await getGoals();

    setGoals(res.goals);

  }

  useEffect(()=>{
    loadGoals();
  },[]);

  async function handleSave(data:any){

    await createGoal(data);

    setOpen(false);

    loadGoals();

  }

  async function handleDelete(id:string){

    await deleteGoal(id);

    loadGoals();

  }

  return(

    <div>

      <div className="flex justify-between mb-8">

        <h1 className="text-4xl font-bold">
          Goals
        </h1>

        <button
          onClick={()=>setOpen(true)}
          className="bg-emerald-500 px-5 py-2 rounded"
        >
          + Add Goal
        </button>

      </div>

      <div className="space-y-5">

        {goals.map(goal=>(

          <div
            key={goal.id}
            className="bg-[#121826] rounded-xl p-6 flex justify-between"
          >

            <div>

              <h2 className="text-2xl font-bold">
                {goal.title}
              </h2>

              <p>
                ₹{goal.savedAmount} / ₹{goal.targetAmount}
              </p>

              <p>
                {goal.priority}
              </p>

            </div>

            <button
              onClick={()=>handleDelete(goal.id)}
              className="bg-red-500 px-4 py-2 rounded"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

      <GoalModal
        open={open}
        onClose={()=>setOpen(false)}
        onSave={handleSave}
      />

    </div>

  );

}