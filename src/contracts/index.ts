import { Abi, GetContractReturnType, getContract } from "viem";
import {
  useContractEvent,
  useContractRead,
  usePublicClient,
  useWalletClient,
} from "wagmi";
import client from "../client";
import { useEffect, useState } from "react";

import ens from "./ens";

const getContracts = () => ({
  ens: hookedContract(viemContract(ens)),
});

// partition
function hookedContract<T extends GetContractReturnType>(contract: T) {
  function useRead<P extends Readonly<string>>(
    config: Parameters<typeof useContractRead<T["abi"], P>>[0] & {
      functionName: P;
    }
  ) {
    return useContractRead<T["abi"], P>({
      abi: contract.abi,
      address: contract.address,
      ...config,
    });
  }

  function useEvent<P extends Readonly<string>>(
    config: Parameters<typeof useContractEvent<T["abi"], P>>[0] & {
      eventName: P;
    }
  ) {
    return useContractEvent<T["abi"], P>({
      abi: contract.abi,
      address: contract.address,
      ...config,
    });
  }

  return { ...contract, useRead, useEvent };
}

function viemContract<T extends Abi, P extends `0x${string}`>(
  contractData: Readonly<{
    abi: T;
    address: P;
  }>
): GetContractReturnType<T, typeof client, typeof client, P> {
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();

  const [contract, setContract] = useState(
    getContract({
      abi: contractData.abi,
      address: contractData.address,
      walletClient: walletClient || publicClient,
      publicClient,
    })
  );

  useEffect(() => {
    console.log("updating contract ", contract.address);
    setContract(
      getContract({
        abi: contractData.abi,
        address: contractData.address,
        walletClient: walletClient || publicClient,
        publicClient,
      })
    );
  }, [walletClient, publicClient]);

  return contract;
}

export default getContracts;

export type ContractType = ReturnType<typeof getContracts>[keyof ReturnType<
  typeof getContracts
>];
