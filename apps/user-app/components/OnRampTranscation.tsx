import { Card } from "@repo/ui/card";
import React, { ReactNode } from "react";

export const OnRampTranscation = ({
  transactions,
}: {
  transactions: {
    time: Date;
    amount: number;
    status: "Success" | "Failure" | "Processing";
    provider: string;
  }[];
}) => {
  if (!transactions.length) {
    <Card title="Recent Transactions">
      <div className="text-center pb-8 pt-8">No Recent Transactions</div>
    </Card>;
  }
  return (
    <Card title="Recent Transactions">
      {transactions.map((transaction, index) => {
        return (
          <div
            key={index}
            className="w-full flex items-center justify-between border-y py-2 font-semibold"
          >
            <div className="flex flex-col">
              {" "}
              Received INR{" "}
              <span className="text-sm text-gray-400">
                {transaction.time.toDateString()}
              </span>
            </div>{" "}
            <span>{transaction.amount / 100}</span>
          </div>
        );
      })}
    </Card>
  );
};
