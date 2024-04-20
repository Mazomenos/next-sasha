export default function Container({children} : {children: React.ReactNode}) {
  return (
    <div className="p-4 flex h-full flex-col w-full">
      <div className="p-4 flex-1 w-full h-full border-2 bg-white dark:bg-gray-800 drop-shadow-lg  rounded-lg border-transparent">
                {children}
      </div>
    </div>
  );
}
