// components/DynamicLoginPage.tsx
import React from "react";
import Image from "next/image";
import { base, baseSepolia } from "thirdweb/chains";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import Link from "next/link";
import { client } from "@/config/client";
import { detailsButton } from "@/config/details";
import { tokeks } from "@/config/tokeks";

import SignInLayout from "./SignInLayout";
import ConnectEmbeds from "./ConnectEmbeds";
import { ErrorBoundary } from "./ErrorBoundary";

interface DynamicLoginPageProps {
  ContentComponent: React.FC;
}

const DynamicLoginPage: React.FC<DynamicLoginPageProps> = ({
  ContentComponent,
}) => {
  const account = useActiveAccount();

  if (account) {
    return (
      <div className="flex flex-col gap-4 px-0 md:px-20 m-4 items-center">
        <div className="w-1/2">
          <Image
            src="/ngelaras-login-04.png"
            alt="NGELARAS PROJECT"
            width={1018}
            height={494}
            className="z-0 object-contain w-full"
            priority
          />
        </div>
        <div id="connected">
          <ConnectButton
            client={client}
            chains={[base, baseSepolia]}
            accountAbstraction={{
              factoryAddress: "0x186b1740d24bc028D220838796441441dc444f9A",
              chain: base,
              sponsorGas: true,
            }}
            supportedTokens={tokeks}
            detailsButton={detailsButton}
            detailsModal={{
              assetTabs: ["token", "nft"],
            }}
            supportedNFTs={{
              [base.id]: [
                // "0x9d58705B0Db073A29D176a947E58C8DbF923669D", // NGELARAS PROJECT
              ],
              [baseSepolia.id]: [
                "0x9d58705B0Db073A29D176a947E58C8DbF923669D", // NGELARAS PROJECT
              ],
            }}
          />
        </div>
        <div className="w-full">
          <ContentComponent />
        </div>
        <div className="w-full items-end">
          <Link
            href="https://www.nftindonesia.xyz"
            target="_blank"
            title="NFT INDONESIA Decentrally Independence.">
            <Image
              src="/ngelaras-login-06.png"
              alt="NGELARAS PROJECT is Deployed by NFT INDONESIA."
              width={1080}
              height={116}
              className="z-0 object-contain w-full"
              priority
            />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="p-2">
        <SignInLayout>
          <ConnectEmbeds />
        </SignInLayout>
      </div>
    </ErrorBoundary>
  );
};

export default DynamicLoginPage;
