import React from "react";
import { RainbowKitCustomConnectButton } from "./scaffold-eth";

/**
 * Site footer
 */
export const Footer = () => {
  return (
    <div className="min-h-0 py-5 px-1 mb-11 lg:mb-0">
      <div>
        <div className="fixed flex justify-end bg-gray-500/70 items-center w-full z-10 p-4 bottom-0 left-0 pointer-events-none">
          <RainbowKitCustomConnectButton />
        </div>
      </div>
      <div className="w-full">
        <ul className="menu menu-horizontal w-full">
          <div className="flex justify-center items-center gap-2 text-sm w-full">built by bigdevenergy</div>
        </ul>
      </div>
    </div>
  );
};
