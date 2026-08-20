'use client'

import { createContext, useContext, TransitionStartFunction } from "react"

interface BrowserContextType {
  isPending: boolean;
  startTransition: TransitionStartFunction;
}

const BrowserContext = createContext<BrowserContextType | null>(null)

export function BrowserProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: BrowserContextType;
}) {
  return (
    <BrowserContext.Provider value={value}>{children}</BrowserContext.Provider>
  );
}


export function useBrowserContext(){
  const context = useContext(BrowserContext)
  if (!context) {
    throw new Error("useBrowserContext must be used within a BrowserProvider");
  }
  return context
}