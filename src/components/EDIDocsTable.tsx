import Image from "next/image"; // Importa la etiqueta Image de Next.js

export default function EDIdocsTable() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="relative overflow-x-auto w-full shadow-md sm:rounded-lg pl-xl">
        <table className="w-full text-center text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-black uppercase bg-gray-200 dark:bg-gray-200 dark:text-black">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                EDI Transactions
              </th>
              <th scope="col" className="px-6 py-3">
                EDI Codes
              </th>
              <th scope="col" className="px-6 py-3">
                Mandatory
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 dark:bg-gray-300">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap dark:text-black"
              >
                1
              </th>
              <td className="px-6 py-4 dark:text-black">Purchase Order</td>
              <td className="px-6 py-4 dark:text-black">850</td>
              <td className="px-6 py-4 dark:text-black">Yes</td>
              <td className="px-6 py-4 dark:text-black flex justify-center items-center">
                <Image src="/elipsis.png" alt="Icono" width={15} height={15} />
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap dark:text-black"
              >
                2
              </th>
              <td className="px-6 py-4 dark:text-black">Change Request</td>
              <td className="px-6 py-4 dark:text-black">860</td>
              <td className="px-6 py-4 dark:text-black">No</td>
              <td className="px-6 py-4 dark:text-black flex justify-center items-center">
                <Image src="/elipsis.png" alt="Icono" width={15} height={15} />
              </td>
            </tr>
            <tr className="bg-gray-100 dark:bg-gray-300">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap dark:text-black"
              >
                3
              </th>
              <td className="px-6 py-4 dark:text-black">Acknowledgement</td>
              <td className="px-6 py-4 dark:text-black">855</td>
              <td className="px-6 py-4 dark:text-black">No</td>
              <td className="px-6 py-4 dark:text-black flex justify-center items-center">
                <Image src="/elipsis.png" alt="Icono" width={15} height={15} />
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap dark:text-black"
              >
                4
              </th>
              <td className="px-6 py-4 dark:text-black">Invoice</td>
              <td className="px-6 py-4 dark:text-black">810</td>
              <td className="px-6 py-4 dark:text-black">Yes</td>
              <td className="px-6 py-4 dark:text-black flex justify-center items-center">
                <Image src="/elipsis.png" alt="Icono" width={15} height={15} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
