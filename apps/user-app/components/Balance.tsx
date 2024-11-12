import { Card } from "@repo/ui/card";
import React from "react";

export const Balance = () => {
  return (
    <Card title="Balance">
      <div className="flex flex-col gap-5 justify-between font-semibold ">
        <div className="w-full flex justify-between border-y py-2">
          <span>Unlocked Balance</span> <span>200 INR</span>
        </div>
        <div className="w-full flex justify-between border-y py-2">
          <span>Total Locked Balance</span> <span>0 INR</span>
        </div>
        <div className="w-full flex justify-between border-y-2  py-2">
          <span>Total Balance</span> <span>0 INR</span>
        </div>
      </div>
    </Card>
  );
};
