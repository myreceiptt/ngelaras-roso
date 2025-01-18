// components/ConnectEmbeds.tsx
import React from "react";
import { base } from "thirdweb/chains";
import { ConnectEmbed } from "thirdweb/react";
import { client } from "@/config/client";
import { dompets } from "@/config/dompets";

const ConnectEmbeds: React.FC = () => {
  const embedStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "474px",
  };

  return (
    <div>
      <div className="w-full h-auto justify-center items-center py-4">
        <ConnectEmbed
          client={client}
          chain={base}
          modalSize="compact"
          appMetadata={{
            name: "Login to NGELARASROSO.ID",
            url: "https://www.ngelarasroso.id/",
            description: "Login to NGELARASROSO.ID and join NGELARAS PROJECT.",
            logoUrl: "https://www.ngelarasroso.id/ngelaras-login-04.png",
          }}
          wallets={dompets}
          accountAbstraction={{
            factoryAddress: "0x186b1740d24bc028D220838796441441dc444f9A",
            chain: base,
            sponsorGas: true,
          }}
          privacyPolicyUrl="/privacy"
          termsOfServiceUrl="/terms"
          showThirdwebBranding={false}
          style={embedStyle}
        />
      </div>
    </div>
  );
};

export default ConnectEmbeds;
