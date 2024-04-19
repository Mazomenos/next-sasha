import EDIdocsTable from "@/src/components/edidocstable";

export default function Providers() {
  return (
    <div>
      <div className="flex-col justify-center items-end w-1/5"></div>
      <main className="flex min-h-screen flex-col justify-center items-end w-4/5 pr-4 ml-auto">
        <button
          type="button"
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 float-right dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
        >
          Add Document +
        </button>
        <EDIdocsTable />
      </main>
    </div>
  );
}
