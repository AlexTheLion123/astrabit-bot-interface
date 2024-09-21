"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 w-full">
          <h1 className="text-left">
            <span className="block text-4xl font-bold">Astra Analytics</span>
          </h1>
          <p>
            UI system showcasing the top trading bots for Astrabit, allowing users to select bots to trade the BioFi
            token within the ecosystem.
          </p>
          <div className="flex items-start space-x-2 flex-col sm:flex-row">
            <RainbowKitCustomConnectButton />
            <Address address={connectedAddress} />
          </div>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-4 px-8 py-12">
          <div className="mb-4">Available bots:</div>
          <ul className="gap-4 flex flex-col">
            <li className="border border-white flex justify-center py-4 px-6">Bot 1</li>
            <li className="border border-white flex justify-center py-4 px-6">Bot 2</li>
            <li className="border border-white flex justify-center py-4 px-6">Bot 3</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
