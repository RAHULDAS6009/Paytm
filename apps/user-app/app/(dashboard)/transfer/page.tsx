import React from "react";
import {
  AddMoney,
  Balance,
  OnRampTranscation,
} from "../../../components/index";

function Page(): JSX.Element {
  return (
    <div className="w-full h-screen  flex ">
      <div className="w-1/2 border">
        <span className="text-4xl font-medium text-purple-600">Transfer</span>
        <AddMoney />
      </div>
      <div className="w-1/2 flex-col">
        <OnRampTranscation />
        <Balance />
      </div>
    </div>
  );
}

export default Page;
