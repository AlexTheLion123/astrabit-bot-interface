"use client";

import ProgressBar from "../components/ProgressBar";
import { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

const Home: NextPage<any> = () => {
  const { address: connectedAddress } = useAccount();

  const bots = [
    {
      name: "Bot 1",
      strategy: "Trend Following",
      roi: 15.7,
      winRate: 65,
      tradesExecuted: 320,
      description: "A trend-following bot that capitalizes on market momentum.",
      detailsLink: "#",
    },
    {
      name: "Bot 2",
      strategy: "Arbitrage",
      roi: 22.4,
      winRate: 70,
      tradesExecuted: 500,
      description: "An arbitrage bot that exploits price inefficiencies across exchanges.",
      detailsLink: "#",
    },
    {
      name: "Bot 3",
      strategy: "Market Making",
      roi: 10.2,
      winRate: 55,
      tradesExecuted: 780,
      description: "A market-making bot that provides liquidity and earns spreads.",
      detailsLink: "#",
    },
  ];

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
          <div className="flex items-center gap-1 flex-col sm:flex-row">
            <RainbowKitCustomConnectButton />
            <div className="w-full flex flex-col sm:flex-row items-center">
              <Address address={connectedAddress} />
            </div>
          </div>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-4 px-8 py-12">
          <div className="mb-4">Available bots:</div>
          <ul className="gap-4 flex flex-col">
            {bots.map((bot, index) => (
              <li key={index} className="border border-white p-4">
                <h2 className="text-xl font-semibold">{bot.name}</h2>
                <p>Strategy: {bot.strategy}</p>
                <p>ROI: {bot.roi}%</p>
                <p>Win Rate: {bot.winRate}%</p>
                <p>Total Trades: {bot.tradesExecuted}</p>
                <p className="mb-4">{bot.description}</p>

                {/* Visual Representation */}
                <div className="flex gap-4">
                  <div>
                    <span className="font-bold">ROI:</span>
                    <ProgressBar percentage={bot.roi} />
                  </div>
                  <div>
                    <span className="font-bold">Win Rate:</span>
                    <ProgressBar percentage={bot.winRate} />
                  </div>
                </div>

                <a href={bot.detailsLink} className="text-purple-500 underline mt-2">
                  Learn more
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
