"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { SessionContextProvider } from "@supabase/auth-helpers-react"
import { useState } from "react"

interface SupabaseProviderProps {
  children: React.ReactNode
}

const SupabaseProvider = ({ children }: SupabaseProviderProps) => {
  const [supabaseClient] = useState(() =>
    createClientComponentClient()
  )

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient as any}
    >
      {children}
    </SessionContextProvider>
  )
}

export default SupabaseProvider
