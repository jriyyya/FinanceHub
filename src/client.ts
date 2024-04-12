import { createWalletClient, custom, publicActions } from "viem";
import { sepolia } from "viem/chains";

const client = createWalletClient({
  chain: sepolia,
  transport: custom((window as any).ethereum),
}).extend(publicActions);

export default client;
