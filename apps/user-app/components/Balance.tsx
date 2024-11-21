"use client";
import { Card } from "@repo/ui/card";
import React from "react";

export const Balance = ({
  amount,
  locked,
}: {
  amount: number;
  locked: number;
}) => {

  return (
    <Card title="Balance">
      <div className="flex text-sm text-gray-400 flex-col gap-2 justify-between font-semibold ">
      <div className="w-full flex justify-between border-b-2 py-1">
  <div>Unlocked Balance </div>
  <div className="text-black font-semibold">{amount / 100}</div>
</div>

        <div className="w-full flex justify-between border-b-2 py-1">
          <span>Total Locked Balance</span> <span className="text-black font-semibold">{locked / 100}</span>
        </div>
        <div className="w-full flex justify-between border-b-2  py-1">
          <span>Total Balance</span> <span className="text-black font-semibold">{(amount + locked) / 100}</span>
        </div>
      </div>
    </Card>
  );
};
