//config/tokeks.ts
import { base, baseSepolia } from "thirdweb/chains";

export const tokeks = {
  [base.id]: [
    {
      address: "0xba0032620d88D9b16752CbDE75593c080C3d38de",
      name: "OiOi",
      symbol: "OiOi",
      icon: "/erc20-icons/oioi.png",
    },
    {
      address: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
      name: "USD Coin",
      symbol: "USDC",
      icon: "/erc20-icons/usdc.png",
    },
  ],
  [baseSepolia.id]: [
    {
      address: "0xcB2208E9Fb77591D3A0688C4459d976b1f16Ab53",
      name: "OiOi",
      symbol: "OiOi",
      icon: "/erc20-icons/oioi.png",
    },
    {
      address: "0x5dEaC602762362FE5f135FA5904351916053cF70",
      name: "USD Coin",
      symbol: "USDC",
      icon: "/erc20-icons/usdc.png",
    },
  ],
};
