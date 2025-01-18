"use client";

import Image from "next/image";
import { useState } from "react";
import { client } from "@/config/client";
import { baseSepolia } from "thirdweb/chains";
import { getContract, ThirdwebContract } from "thirdweb";
import { getNFT, totalSupply } from "thirdweb/extensions/erc1155";
import {
  ClaimButton,
  MediaRenderer,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";

export default function FeaturedCards() {
  const oioiAccount = useActiveAccount();
  const ngelarasProject = getContract({
    address: "0x9d58705B0Db073A29D176a947E58C8DbF923669D",
    chain: baseSepolia,
    client,
  });

  return (
    <>
      {[
        {
          src: "/ngelaras-project-0001.jpg",
        },
        {
          src: "/ngelaras-project-0002.jpg",
        },
        {
          src: "/ngelaras-project-0003.jpg",
        },
        {
          src: "/ngelaras-project-0004.jpg",
        },
        {
          src: "/ngelaras-project-0005.jpg",
        },
        {
          src: "/ngelaras-project-0006.jpg",
        },
        {
          src: "/ngelaras-project-0007.jpg",
        },
        {
          src: "/ngelaras-project-0008.jpg",
        },
        {
          src: "/ngelaras-project-0009.jpg",
        },
        {
          src: "/ngelaras-project-0010.jpg",
        },
        {
          src: "/ngelaras-project-0011.jpg",
        },
        {
          src: "/ngelaras-project-0012.jpg",
        },
      ].map(({ src }, index) => (
        <button
          key={index}
          type="button"
          className="w-full p-2 rounded-3xl relative items-center">
          {/* Main image */}
          <Image
            src={src}
            width={3840}
            height={2160}
            alt="NGELARAS PROJECT - JAN. 2025"
            className="rounded-3xl w-full"
          />
        </button>
      ))}

      <NFTClaimer
        receiverAddress={oioiAccount?.address}
        dropContract={ngelarasProject}
        tokenId={0n}
      />
    </>
  );
}

type NFTClaimerProps = {
  receiverAddress?: string;
  dropContract: ThirdwebContract;
  tokenId: bigint;
};

const NFTClaimer: React.FC<NFTClaimerProps> = (props: NFTClaimerProps) => {
  const { data: nft, isLoading: isNftLoading } = useReadContract(getNFT, {
    contract: props.dropContract,
    tokenId: props.tokenId,
  });
  const { data: totalMintedNFTs } = useReadContract(totalSupply, {
    contract: props.dropContract,
    id: props.tokenId,
  });
  const [buttonText, setButtonText] = useState("Claim the PDF");

  return (
    <>
      <div className="w-full p-2 rounded-3xl items-center">
        {isNftLoading ? (
          <h2 className="text-center text-xs font-normal">
            <code className="px-1 py-0.5 rounded font-normal">Loading...</code>
          </h2>
        ) : (
          <>
            {props.receiverAddress ? (
              <>
                <div className="grid grid-col p-2">
                  <h2 className="text-center text-xs font-normal">
                    {totalMintedNFTs?.toString() || "0"} copy of{" "}
                    {nft?.metadata.name} preserved on{" "}
                    {props.dropContract.chain.name} blockchain.
                  </h2>

                  <ClaimButton
                    unstyled
                    className="w-full items-start rounded-lg p-2 border-2 border-solid border-zinc-950 text-zinc-950 bg-neutral-200 text-sm leading-4 font-normal uppercase my-1"
                    contractAddress={props.dropContract.address}
                    chain={props.dropContract.chain}
                    client={props.dropContract.client}
                    claimParams={{
                      type: "ERC1155",
                      quantity: 1n,
                      tokenId: props.tokenId,
                    }}
                    onError={(error) => {
                      setButtonText("Failed! Try Again!");
                    }}
                    onTransactionConfirmed={async () => {
                      setButtonText("Thank You! Claim Again!");
                    }}>
                    {buttonText}
                  </ClaimButton>
                </div>
              </>
            ) : null}
          </>
        )}
      </div>
    </>
  );
};
