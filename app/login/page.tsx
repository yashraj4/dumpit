'use client'

import { useAuth } from '@/contexts/AuthContext'
import { Auth } from '@/components/Auth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function LoginPage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // If user is already authenticated, redirect to dashboard
    if (!loading && user) {
      router.push('/dashboard')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // If user is authenticated, don't render anything (effect will redirect)
  if (user) {
    return null
  }

  // Show login component for unauthenticated users
  return (
    <div className="min-h-screen w-full">
      <Auth />
    </div>
  )
}