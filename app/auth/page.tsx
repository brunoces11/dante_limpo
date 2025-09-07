'use client'

import { useAuthContext } from '@/components/auth/AuthProvider'
import LoginForm from '@/components/auth/LoginForm'
import { Button } from '@/components/ui/button'

export default function AuthPage() {
  const { user, signOut, loading } = useAuthContext()

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Carregando...</div>
  }

  if (user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
        <h1 className="text-2xl font-bold">Bem-vindo!</h1>
        <p>Email: {user.email}</p>
        <Button onClick={signOut}>Sair</Button>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <LoginForm />
    </div>
  )
}