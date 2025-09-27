import { useState, useEffect } from "react";
import { useAccount, useWriteContract } from "wagmi";
import { abi_fundmanager } from "../utils/abi";
import { FUNDS_CONTRACT } from "../utils/constants";
import { generateProof } from "../utils/generateProof";

export default function SubscriptionButton() {
  const { address, isConnected } = useAccount();
  // State for form inputs
  const [formData, setFormData] = useState({
    planId: "",
    amount: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData({
      planId: params.get("planId") || "",
      amount: params.get("amount") || "",
    });
  }, []);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Wagmi contract write hook
  const { writeContract } = useWriteContract();

  if (!isConnected) {
    return <p>Please connect your wallet</p>;
  }
  const handleClick = async () => {
  try {

    writeContract({
     address: FUNDS_CONTRACT,
     abi: abi_fundmanager,
     functionName: "addFunds",
     args: [formData.planId, formData.amount],
   });

    console.log("Contract call completed");
  } catch (err) {
    console.error("Error:", err);
  }
};

  return (
    <form>
      <input
        name="planId"
        value={formData.planId}
        onChange={handleChange}
        placeholder="planId"
      />
      <input
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="amount"
      />
      <button
        onClick={handleClick}
      >
        Subscribe
      </button>
    </form>
  );
}
