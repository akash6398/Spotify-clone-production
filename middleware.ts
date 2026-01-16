import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'

export const config = {
  runtime: 'nodejs', // Important!
}

export async function middleware(req: NextRequest) {
  // Create Supabase client using environment variables automatically
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Example: get the current session
  const { data: { session } } = await supabase.auth.getSession()

  console.log('Current session:', session)

  return res
}
