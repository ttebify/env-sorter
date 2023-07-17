"use client";

import React from "react";
import { AppProvider } from "@env/contexts/AppContext";
import { SaasProvider } from "@saas-ui/react";
import Link from "next/link";
import { CacheProvider } from "@chakra-ui/next-js";

type Props = { children: React.ReactNode };

function Providers({ children }: Props) {
  return (
    <CacheProvider>
      <SaasProvider linkComponent={Link}>
        <AppProvider>{children}</AppProvider>
      </SaasProvider>
    </CacheProvider>
  );
}

export default Providers;
