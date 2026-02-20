"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { createContext, ReactNode, useContext, useMemo } from "react";

const ConvexReadyContext = createContext(false);
export const useConvexReady = () => useContext(ConvexReadyContext);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  const client = useMemo(() => {
    try {
      const url = process.env.NEXT_PUBLIC_CONVEX_URL;
      if (!url) return null;
      return new ConvexReactClient(url);
    } catch {
      return null;
    }
  }, []);

  if (!client) {
    return (
      <ConvexReadyContext.Provider value={false}>
        {children}
      </ConvexReadyContext.Provider>
    );
  }

  return (
    <ConvexReadyContext.Provider value={true}>
      <ConvexProvider client={client}>{children}</ConvexProvider>
    </ConvexReadyContext.Provider>
  );
}
