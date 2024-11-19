import React from "react";
import {
  AddMoney,
  Balance,
  OnRampTranscation,
} from "../../../components/index";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";

async function getBalance() {
  const session = await getServerSession(authOptions);
  const balance = await prisma.balance.findFirst({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return {
    amount: balance?.amount || 0,
    locked: balance?.locked || 0,
  };
}

async function getOnRampTransactions() {
  const session = await getServerSession(authOptions);
  const transactions = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return transactions.map((t) => ({
    time: t.startTime,
    amount: t.amount,
    status: t.status,
    provider: t.provider,
  }));
}

async function Page(): Promise<JSX.Element> {
  const balance = await getBalance();
  const transactions = await getOnRampTransactions();
  return (
    <>
      <div className="text-4xl font-medium text-purple-600 ">Transfer</div>
      <div className="w-full h-screen  flex p-2 gap-2">
        <div className="w-1/2 border flex flex-col gap-5">
          <AddMoney />
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <Balance amount={balance.amount} locked={balance.locked} />
          <OnRampTranscation transactions={transactions} />
        </div>
      </div>
    </>
  );
}

export default Page;
