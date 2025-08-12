"use client"

import * as React from "react"

import { useAuth } from '@clerk/nextjs'

import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { ConvexReactClient } from "convex/react"

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error('Missing NEXT_PUBLIC_CONVEX_URL in your .env file')
}

export function Providers({ children }: { children: React.ReactNode }) {

  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "");

  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  )
}
