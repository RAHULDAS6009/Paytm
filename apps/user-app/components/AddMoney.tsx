"use client";
import React, { useState } from "react";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/text-input";
import { Select } from "@repo/ui/select";
import { Button } from "@repo/ui/button";
import { createOnRampTransaction } from "../app/lib/actions/createOnRampTransaction";
import { redirect } from "next/navigation";

const SUPPORTED_BANKS = [
  { name: "HDFC Bank", redirectUrl: "http://localhost:5000/hdfcwebhook" },
  { name: "Axis Bank", redirectUrl: "http://localhost:5000/hdfcwebhook" },
];

export const AddMoney = () => {
  const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
  const [amount, setAmount] = useState("");
  const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");
  return (
    <Card title="Add Money ">
      <div className="w-full  rounded-md flex flex-col gap-10">
        <TextInput
          title="Amount"
          placeholder="Enter amount"
          onChange={(amount) => {
            setAmount(amount);
          }}
        />
        <Select
          title="Select Bank"
          onSelect={(value) => {
            setRedirectUrl(
              SUPPORTED_BANKS.find((x) => x.name === value)?.redirectUrl || ""
            );
            setProvider(
              SUPPORTED_BANKS.find((x) => x.name === value)?.name || ""
            );
          }}
          options={SUPPORTED_BANKS.map((x) => {
            return { key: x.name, value: x.name };
          })}
        />
        <div className="w-1/6 mx-auto">
          <Button
            onClick={async() => {
              // window.location.href=redirectUrl||""
              console.log(Number(amount), provider);
              await createOnRampTransaction(Number(amount), provider);
              redirect("/transfer")
            }}
          >
            Add Money
          </Button>
        </div>
      </div>
    </Card>
  );
};
