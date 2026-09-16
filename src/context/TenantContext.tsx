"use client";

import { createContext, ReactNode } from 'react';
import type { Tenant } from '@/types/tenant';

interface TenantContextType {
  tenant: Tenant | null;
}

export const TenantContext = createContext<TenantContextType>({ tenant: null });

export function TenantProvider({ children, tenant }: { children: ReactNode; tenant: Tenant | null }) {
  return (
    <TenantContext.Provider value={{ tenant }}>
      {children}
    </TenantContext.Provider>
  );
}
