import { http, createConfig } from "wagmi";
import { flowTestnet } from "wagmi/chains";


const rpcUrl = "";

export const config = createConfig({
    chains: [flowTestnet],
    connectors: [
    ],
    transports: {
        [flowTestnet.id]: http(rpcUrl)
    }
})