"use client";

import { ActiveChain, clientId } from "@/lib/constant";
import { ThirdwebProvider } from "@thirdweb-dev/react";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function Provider({ children }: RootLayoutProps) {
  return (
    <ThirdwebProvider  activeChain={ActiveChain} clientId={clientId}>
      {children}
    </ThirdwebProvider>
  );
}
