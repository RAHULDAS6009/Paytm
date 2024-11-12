import { Card } from "@repo/ui/card";
import React from "react";

export const OnRampTranscation = () => {
  const date=new Date();
  return (
    <Card title="Recent Transactions">
      <div className="w-full flex items-center justify-between border-y py-2 font-semibold">
        <div className="flex flex-col">
          {" "}
          Received INR <span className="text-sm text-gray-400">{date.toUTCString().substring(0,16)}</span>
        </div>{" "}
        <span>+ Rs 200</span>
      </div>
    </Card>
  );
};
