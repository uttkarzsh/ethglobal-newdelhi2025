import { useConnect} from "wagmi";

const Connect = () => {
    const {connect, connectors} = useConnect();
  return (
    <div>
		{connectors.map((connector)=> (
			<button key={connector.uid} onClick={()=>connect({connector})}>
				Connect with {connector.name} 
			</button>
		))}
	</div>
  )
}

export default Connect