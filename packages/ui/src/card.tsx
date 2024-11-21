export function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}): JSX.Element {
  return <div className="b-4  bg-white p-5 flex flex-col gap-5 rounded-lg">
    <h1 className="text-xl border-b pb-2 font-semibold">{title}</h1>
    <div>{children}</div>
  </div>;
}
