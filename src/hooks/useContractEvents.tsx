import { ActiveChain } from "@/lib/constant";
import { useMemo, useState } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";

export function useContractEvents(contractAddr: string) {
  // Define state variables using useState hook
  const [Block, setBlock] = useState(36953024);
  const [Events, setEvents] = useState<any>([]);

  // Use useMemo and async IIFE to perform asynchronous operations
  useMemo(() => {
    (async () => {
      try {
        // Create a provider instance
        const provider = new ethers.providers.JsonRpcProvider(
          "https://matic-mumbai.chainstacklabs.com"
        );

        // Get the current block number
        const BlockNumber = await provider.getBlockNumber();
        if (Block + 10000 < BlockNumber) return;

        // Create a ThirdwebSDK instance
        const sdk = new ThirdwebSDK(ActiveChain);

        // Get the contract using the provided address
        const contract = await sdk.getContract(contractAddr);

        // Define the event filters
        const filters = {
          fromBlock: Block,
          toBlock: Block + 10000,
        };

        // Fetch events using the contract's events.getAllEvents method
        const events = await contract.events.getAllEvents(filters);

        // Update the state variables
        setBlock(Block + 10000);
        setEvents([...Events, events]);
      } catch (error) {
        console.log("file: useContractEvents.tsx:22  error:", error);
      }
    })();
  }, [contractAddr]);

  return {
    Events, // Include Events in the return object
  };
}
