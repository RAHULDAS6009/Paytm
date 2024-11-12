export const TextInput = ({
  title,
  onChange,
  placeholder
}: {
  title: string;
  placeholder:string;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="w-full flex flex-col gap-2 ">
      <h1 className="font-medium">{title}</h1>
      <input className="w-full outline-none p-2 border rounded-md text-sm " type="text" id="first_name" placeholder={placeholder} onChange={(e)=>onChange(e.target.value)} />
    </div>
  );
};
