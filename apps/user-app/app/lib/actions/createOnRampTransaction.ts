"use server"
import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import axios from "axios";

export async function createOnRampTransaction(
  amount: number,
  provider: string
) {
  const session = await getServerSession(authOptions);
  const token = (Math.random() * 10).toString();
  console.log("hellos",amount,provider)
  const txn=await prisma.onRampTransaction.create({
    data: {
      token,
      userId: Number(session?.user?.id),
      amount,
      provider,
      startTime: new Date(),
      status: "Processing",
    },
  });
  return {
    message:"Done"
  }
}
