import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export async function createOnRampTransaction(
  amount: number,
  provider: string
) {
  const session = await getServerSession(authOptions);
  const token = (Math.random() * 10).toString();
  await prisma.onRampTransaction.create({
    data: {
      token,
      userId: session?.user?.id,
      amount,
      provider,
      startTime: new Date(),
      status: "Processing",
    },
  });
}
