"use client";
import { AppBar } from "@repo/ui/appBar";
import { signIn, signOut, useSession } from "next-auth/react";
// import { redirect } from "next/navigation";

import React from "react";

const AppBarClient = () => {
  const session = useSession();
  // useEffect(() => {
  //   if (session.data !== undefined) {
  //     redirect("/dashboard");
  //   } else {
  //     redirect("/api/auth/signin");
  //   }
  // }, []);
  return (
    <div>
      <AppBar
        user={session.data?.user}
        onSignIn={async () => {
          await signIn();
        }}
        onSignOut={async () => {
          await signOut();
        }}
      />
    </div>
  );
};

export default AppBarClient;
