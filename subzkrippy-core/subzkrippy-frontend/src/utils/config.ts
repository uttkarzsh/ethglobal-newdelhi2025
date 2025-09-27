import { http, createConfig } from "wagmi";
import { polygonAmoy } from "wagmi/chains";
import { injected } from "wagmi";

const rpcUrl = "";

export const config = createConfig({
    chains: [polygonAmoy],
    connectors: [
      injected()
    ],
    transports: {
        [polygonAmoy.id]: http(rpcUrl)
    }
})