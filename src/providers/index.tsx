'use client'

import { ReactNode } from 'react'
import { QueryProvider } from './queryProvider'
import { CounterStoreProvider } from './counterProvider'
import mixpanel from 'mixpanel-browser'

interface ProvidersProps {
  children: ReactNode
}

if (process.env.NODE_ENV === 'production') {
  mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || '', {
    track_pageview: true,
    persistence: 'localStorage',
    debug: false,
  })
}

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryProvider>
      <CounterStoreProvider>{children}</CounterStoreProvider>
    </QueryProvider>
  )
}
