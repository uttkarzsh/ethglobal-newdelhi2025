// subzkrippy-frontend/Subscribe.tsx
import { useAccount } from "wagmi";
import Connect from "./Connect"
import { useState } from "react";
import { wrapFetchWithPayment } from "x402-fetch";
import { parseUnits } from "viem";

const FUNDS_API = "http://localhost:3000/api/funds-deposit"; // backend endpoint

export default function SubscriptionButton() {
  const { address: userWalletAddress ,isConnected } = useAccount();
  const [status, setStatus] = useState("Idle");

  if(!isConnected){
    return <Connect />
  }

  const handleSubscribe = async () => {
    if (!userWalletAddress) {
      setStatus("Connect your wallet first!");
      return;
    }

    setStatus("Processing payment...");

    try {
      const fetchWithPay = wrapFetchWithPayment(fetch, userWalletAddress as any);

      const amount = parseUnits("1", 6); 

      const response = await fetchWithPay(FUNDS_API, {
        method: "POST",
        body: JSON.stringify({
          merchantId: "foxo",
          amount: amount.toString(),
          userWalletAddress,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      setStatus(`Payment successful! Proof: ${data.proof}`);
      window.location.href = `http://localhost:5173/foximage`;
    } catch (err) {
      console.error(err);
      setStatus("Payment failed or rejected by wallet.");
    }
  };

  return (
    <>
    <p>{userWalletAddress}</p>
    <button onClick={handleSubscribe}>
      {status === "Idle" ? "Subscribe" : status}
    </button>
    </>
  );
}