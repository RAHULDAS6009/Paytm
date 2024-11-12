"use client";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export function SideBarItem({
  title,
  icon,
  href,
}: {
  title: string;
  href: string;
  icon: React.ReactNode;
}): JSX.Element {
  // const [styleText, setStyleText] = useState(href);
  const router = useRouter();

  return (
    <div
      className="cursor-pointer text-black flex items-center gap-5 group font-senibold text-gray-500
     font-semibold text-gray-500"
      onClick={() => {
        console.log(href);

        router.push(href);
        // setStyleText(href);
      }}
    >
      <div
        className={`${false ? "text-purple-600" : "group-hover:text-purple-600"}`}
      >
        {icon}
      </div>
      <div
        className={`${false ? "text-purple-600" : "group-hover:text-purple-600"}`}
      >
        {title}
      </div>
    </div>
  );
}
