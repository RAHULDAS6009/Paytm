import { Card } from "@repo/ui/card";
import React from "react";

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
    return (
      <Card title="Recent Transactions">
        <div className="text-center pb-8 pt-8 text-gray-400 font-semibold">
          No Recent Transactions
        </div>
      </Card>
    );
  }

  function txnStatusColor(status: string) {
    switch (status) {
      case "Processing":
        return "text-yellow-500";
      case "Success":
        return "text-green-500";
      default:
        return "text-red-500";
    }
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
                {transaction.time.toDateString()}{" "}
                {transaction.time.toTimeString()}
                <div className={txnStatusColor(transaction.status)}>
                  {transaction.status}
                </div>
              </span>
            </div>{" "}
            <span className={"text-black"}>
              {"+"}
              {transaction.amount / 100}
            </span>
          </div>
        );
      })}
    </Card>
  );
};
