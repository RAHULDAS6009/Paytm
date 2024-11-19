"use client";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/text-input";
import React, { useState } from "react";
import db from "@repo/db/client";
import { useSession } from "next-auth/react";

export const P2pForm = () => {
  const [amount, setAmount] = useState();
  const [number, setNumber] = useState();
  const [message, setMessage] = useState("hello world");
  async function onClick() {
    const session = useSession();
    console.log("hello world");
    const trans = await db.$transaction(async (txn) => {
      const sender = await txn.balance.update({
        data: {
          amount: {
            decrement: amount,
          },
        },
        where: {
          userId: Number(session.data?.user),
        },
      });

      if (sender.amount < 0) {
        setMessage("You donot have enough balance");
      }

      const reciever = txn.user.findFirst({
        where: {
          number: number,
        },
      });

      txn.balance.update({
        data: {
          amount: {
            increment: amount,
          },
        },
        where: {
          userId: Number(reciever),
        },
      });
      setMessage("successful Transaction");
    });
    console.log(trans);
  }
  return (
    <Card title="P2p transactions">
      <div className="flex flex-col gap-5">
        <TextInput
          title="Number"
          placeholder="Enter Phone number"
          onChange={() => {}}
        />
        <TextInput
          title="Amount"
          placeholder="Enter Amount(in ₹...)"
          onChange={() => {}}
        />
        <div className="w-1/6 mx-auto">
          <Button onClick={onClick}>Send</Button>
        </div>
        <span>{message}</span>
        {/* <AutoComplete/> */}
      </div>
    </Card>
  );
};
