"use client"

import { useMutation, useQuery, Authenticated, Unauthenticated } from "convex/react"

import { SignInButton, UserButton } from "@clerk/nextjs";

import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const users = useQuery(api.users.getMany)
  const addUser = useMutation(api.users.addUser);

  return (
    <>
      <Authenticated> 
        <div className="flex items-center justify-center min-h-svh">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">apps/web</h1>
            <UserButton />
            <Button onClick={() => addUser()}>Add User</Button>
            <pre>{JSON.stringify(users, null, 2)}</pre>
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <div className="flex items-center justify-center min-h-svh">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Please log in</h1>
            <SignInButton>Sign In</SignInButton>
          </div>
        </div>
      </Unauthenticated>
    </>
  )
}
