// components/SignInLayout.tsx
import React from "react";
import Image from "next/image";
import art from "../../public/ngelaras-login-02.jpg";
import powered from "../../public/ngelaras-login-06.png";
import Link from "next/link";

const SignInLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="w-full lg:grid lg:grid-cols-2">
    <div className="flex items-center justify-center">
      <div className="w-full flex flex-col items-center">
        <div>
          <h1 className="flex text-left text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal tracking-tighter justify-start align-middle px-[4vh] md:px-[7vh]">
            REVAMPING. REACTIVATING.
          </h1>
          <h2 className="flex text-left text-xs md:text-sm lg:text-base xl:text-lg font-medium tracking-tighter justify-start align-middle px-[4vh] md:px-[7vh]">
            Register now so you can then fill it up with all that you need and
            desire.
          </h2>
        </div>
        {children}
        <div>
          <Link
            href="https://www.nftindonesia.xyz"
            target="_blank"
            title="NFT INDONESIA Decentrally Independence.">
            <Image
              src={powered}
              alt="NGELARAS PROJECT is Deployed by NFT INDONESIA."
              width={474}
              height={474}
              className="z-0 object-contain w-full"
              priority
            />
          </Link>
        </div>
      </div>
    </div>
    <div className="relative h-screen hidden lg:block">
      <Image
        src={art}
        alt="NGELARAS PROJECT"
        width={474}
        height={474}
        className="absolute inset-0 w-full h-full object-contain"
        priority
      />
    </div>
  </div>
);

export default SignInLayout;
