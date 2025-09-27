import { useConnect, useDisconnect, useAccount } from "wagmi";

const Connect = () => {
  const { connect, connectors } = useConnect();
  const { address, isConnected } = useAccount();
  const {disconnect} = useDisconnect();
  if(!isConnected){
  return (
    <div className="flex gap-2">
      {connectors.map((connector) => (
        <button
          key={connector.id}
          onClick={() => connect({ connector })}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform px-4 py-2 rounded-lg font-bold shadow-lg"
        >
          {connector.name}
        </button>
      ))}
    </div>
  );}
  return(<>Connected to: {address} <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform px-4 py-2 rounded-lg font-bold shadow-lg" onClick={disconnect}> Disconnect</button>
  </>)
};

export default Connect;