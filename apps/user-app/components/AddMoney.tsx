"use client";
import React, { useState } from "react";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/text-input";
import { Select } from "@repo/ui/select";
import { Button } from "@repo/ui/button";

const SUPPORTED_BANKS = [
  { name: "HDFC Bank", redirectUrl: "https://netbanking.hdfcbank.com" },
  { name: "Axis Bank", redirectUrl: "https://netbanking.axisbank.com" },
];

export const AddMoney = () => {
  const [redirectUrl, setRedirectUrl] = useState(
    SUPPORTED_BANKS[0]?.redirectUrl
  );
  return (
    <Card title="Add Money ">
      <div className="w-full  rounded-md flex flex-col gap-4">
        <TextInput
          title="Amount"
          placeholder="Enter amount"
          onChange={() => {}}
        />
        <Select
          title="Select Bank"
          onSelect={(value) => {
            setRedirectUrl(
              SUPPORTED_BANKS.find((x) => x.name === value)?.redirectUrl || ""
            );
          }}
          options={SUPPORTED_BANKS.map((x) => {
            return { key: x.name, value: x.name };
          })}
        />
        <Button
          onClick={() => {
            window.location.href = redirectUrl || "";
          }}
        >
          Add Money
        </Button>
      </div>
    </Card>
  );
};
