"use client";
import { AppBar } from "@repo/ui/appBar";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Page(): JSX.Element {
  const session = useSession();
  return (
    <div className="text-5xl">
      Hello world
      <AppBar
        user={session.data?.user || undefined}
        onSignIn={signIn}
        onSignOut={signOut}
      />
    </div>
  );
}
