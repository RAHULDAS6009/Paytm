import { useState } from "react";

let arr = ["hello", "world"];

export const AutoComplete = () => {
  const [input, setInput] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full">
      <input
        onChange={(e) => {
          setVisible(true);
          setInput(e.target.value);
        }}
        className="outline-none p-2 w-full border rounded-md"
        type=""
      />
      {visible ? (
        <>
          {arr.map((ele: string) => {
            return (
              <div className="pl-4 py-1 my-2 bg-gray-200 rounded-md w-full border">
                {ele}
              </div>
            );
          })}
        </>
      ) : null}
      ;
    </div>
  );
};
