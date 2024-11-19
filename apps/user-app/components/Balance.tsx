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
          <span>Unlocked Balance</span> <span>{amount / 100}</span>
          {/* we are storing the money in paise */}
        </div>
        <div className="w-full flex justify-between border-b-2 py-1">
          <span>Total Locked Balance</span> <span>{locked / 100}</span>
        </div>
        <div className="w-full flex justify-between border-b-2  py-1">
          <span>Total Balance</span> <span>{(amount + locked) / 100}</span>
        </div>
      </div>
    </Card>
  );
};
