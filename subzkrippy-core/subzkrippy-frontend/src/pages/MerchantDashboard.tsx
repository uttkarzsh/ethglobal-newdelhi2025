import { useState } from "react"
import { useWriteContract } from "wagmi";
import { abi_submanager } from "../utils/abi";
import { SUBS_CONTRACT } from "../utils/constants";

const MerchantDashboard = () => {
  const [planName, setPlanName] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");

  const {writeContract, isPending} = useWriteContract();
  return (<>
    <form>
      <input placeholder="name" value={planName} onChange={(e)=> setPlanName(e.target.value)}></input>
      <input placeholder="price" value={price} onChange={(e)=> setPrice(e.target.value)}></input>
      <input placeholder="duration" value={duration} onChange={(e)=> setDuration((e.target.value))}></input>
    </form>
    <button onClick={()=>{
      writeContract({
        abi: abi_submanager,
        address: SUBS_CONTRACT,
        functionName: 'createPlan',
        args: [planName, price, duration]
      })
    }} disabled={isPending}> add plan </button>
    </>
  )
}

export default MerchantDashboard