export const Center = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className="bg-red-100 flex justify-center items-center">
    //   {children}
    // </div>
    <div className="flex justify-center flex-col h-full">
    <div className="flex justify-center">
        {children}
    </div>
</div>
  );
};
