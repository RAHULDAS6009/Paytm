export const Select = ({
  title,
  options,
  onSelect,
}: {
  title: string;
  options: { key: string; value: string }[];
  onSelect: (value: string) => void;
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <h1 className="font-medium">{title}</h1>
      <select
        className="w-full outline-none border rounded-md p-2 text-sm text-gray-400"
        onChange={(e) => {
          onSelect(e.target.value);
        }}
      >
        {options.map((option, index) => {
          return (
            <option  key={index} value={option.key}>
              {option.value}
            </option>
          );
        })}
      </select>
      
    </div>
  );
};
