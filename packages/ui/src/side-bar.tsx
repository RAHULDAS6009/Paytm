"use client";
import { usePathname, useRouter } from "next/navigation";

export function SideBarItem({
  title,
  icon,
  href,
}: {
  title: string;
  href: string;
  icon: React.ReactNode;
}): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname == href;


  return (
    <div
      className="cursor-pointer flex items-center gap-5 font-semibold text-gray-500 p-2 group"
      onClick={() => {
        router.push(href);
      }}
    >
      <div
        className={`${isActive ? "text-purple-600" : "group-hover:text-purple-600"}`}
      >
        {icon}
      </div>
      <div
        className={`${isActive ? "text-purple-600" : "group-hover:text-purple-600"}`}
      >
        {title}
      </div>
    </div>
  );
}
