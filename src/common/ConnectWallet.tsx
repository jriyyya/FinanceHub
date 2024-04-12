import React from "react";
import { useConnect } from "wagmi";

export default function ConnectWallet() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  return (
    <div className="m-10">
      <div className="flex flex-col gap-y-2">
        {connectors.map((connector) => (
          <button
            className="bg-teal-300 w-[30vh] text-black rounded disabled:opacity-50"
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            {connector.name}
            {!connector.ready && " (unsupported)"}
            {isLoading &&
              connector.id === pendingConnector?.id &&
              " (connecting)"}
          </button>
        ))}

        {error && <div>{error.message}</div>}
      </div>
    </div>
  );
}
