import { useState } from "react";
import { useWriteContract } from "wagmi";
import { abi_submanager } from "../utils/abi";
import { SUBS_CONTRACT } from "../utils/constants";

const MerchantDashboard = () => {
  const [planName, setPlanName] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const { writeContract, isPending } = useWriteContract();

  return (
    <div className="max-w-lg mx-auto bg-gray-900 bg-opacity-60 p-8 rounded-2xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center">Create New Plan</h2>
      <form className="flex flex-col gap-4">
        <input className="p-3 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-400" placeholder="Plan Name" value={planName} onChange={(e) => setPlanName(e.target.value)} />
        <input className="p-3 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-400" placeholder="Price (FLOW)" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input className="p-3 rounded-lg bg-gray-800 border border-gray-700 placeholder-gray-400" placeholder="Duration (days)" value={duration} onChange={(e) => setDuration(e.target.value)} />
        <button
          type="button"
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform p-3 rounded-lg font-bold shadow-lg disabled:opacity-50"
          onClick={() => writeContract({ abi: abi_submanager, address: SUBS_CONTRACT, functionName: "createPlan", args: [planName, price, duration] })}
          disabled={isPending}
        >
          {isPending ? "Creating..." : "Add Plan"}
        </button>
      </form>
    </div>
  );
};

export default MerchantDashboard;