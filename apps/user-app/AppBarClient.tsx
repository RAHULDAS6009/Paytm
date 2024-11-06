"use client";
import { AppBar } from "@repo/ui/appBar";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const AppBarClient = () => {
  const session = useSession();
  const router = useRouter();
  return (
    <div>
      <AppBar
        user={session.data?.user}
        onSignIn={signIn}
        onSignOut={async () => {
          await signOut();
          router.push("api/auth/signin");
        }}
      ></AppBar>
    </div>
  );
};

export default AppBarClient;
