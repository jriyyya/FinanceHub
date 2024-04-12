import { configureChains, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, sepolia],
  [publicProvider()]
);

const wagmiConfig = createConfig({
  autoConnect: true,
  logger: { warn: (msg) => console.warn(msg) },
  connectors: [
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      options: {
        projectId: "756f8ad5a4c44ce4fbd9897445a10187",
        qrModalOptions: { themeMode: "dark" },
        metadata: {
          name: "Mars App Starter",
          description: "Test kit of mars app",
          icons: ["/favicon.ico"],
          url: window.location.hostname,
        },
      },
      chains: [mainnet, sepolia],
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

export default wagmiConfig;
export { publicClient, webSocketPublicClient };
