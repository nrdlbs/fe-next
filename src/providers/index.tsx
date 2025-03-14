'use client'

import { ReactNode } from 'react'
import { QueryProvider } from './queryProvider'
import { CounterStoreProvider } from './counterProvider'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryProvider>
      <CounterStoreProvider>{children}</CounterStoreProvider>
    </QueryProvider>
  )
}
