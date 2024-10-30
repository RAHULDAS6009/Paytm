"use client";
import { AppBar } from "@repo/ui/appBar";
import { Demo } from "@repo/ui/demo";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Page(): JSX.Element {
  const session = useSession();
  return (
    <div className="">
      <AppBar
        user={session.data?.user || undefined}
        onSignIn={signIn}
        onSignOut={signOut}
      />
      <Demo/>
    </div>
  );
}
