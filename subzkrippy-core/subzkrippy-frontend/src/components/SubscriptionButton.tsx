import { useAccount, useWriteContract } from "wagmi";
import { FUNDS_CONTRACT } from "../utils/constants";
import { abi_fundmanager } from "../utils/abi";

interface Props {
  planId: string;
  amount: string;
}

export default function SubscriptionButton({ planId, amount }: Props) {
  const { isConnected } = useAccount();
  const { writeContract } = useWriteContract();

  if (!isConnected) return <p className="text-yellow-400 font-bold">Please connect your wallet</p>;

  return (
    <button
      onClick={() =>
        writeContract({
          address: FUNDS_CONTRACT,
          abi: abi_fundmanager,
          functionName: "addFunds",
          args: [planId, amount],
        })
      }
      className="bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition-transform p-3 rounded-xl font-bold shadow-lg"
    >
      Subscribe
    </button>
  );
}