'use client'

import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold'>Dashboard</h1>
      <Button onClick={() => router.push('/')}>Back to Home</Button>
    </div>
  )
}
