import React from "react";
import {
  AddMoney,
  Balance,
  OnRampTranscation,
} from "../../../components/index";

function Page(): JSX.Element {
  return (
    <div className="w-full h-screen  flex p-2 gap-2">
      <div className="w-1/2 border flex flex-col gap-5">
        <span className="text-4xl font-medium text-purple-600 ">Transfer</span>
        <AddMoney />
      </div>
      <div className="w-1/2 flex flex-col gap-2">
        <Balance />
        <OnRampTranscation />
      </div>
    </div>
  );
}

export default Page;
