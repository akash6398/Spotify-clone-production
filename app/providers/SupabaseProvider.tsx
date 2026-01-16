"use client"

import { SessionContextProvider } from "@supabase/auth-helpers-react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useState } from "react"
import type { Database } from "@/types"

const SupabaseProvider = ({ children }: { children: React.ReactNode }) => {
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>()
  )

  return (
    <SessionContextProvider supabaseClient={supabaseClient as any}>
      {children}
    </SessionContextProvider>
  )
}

export default SupabaseProvider
