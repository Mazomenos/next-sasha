import { Table } from "flowbite-react";
import { MdOutlineFileUpload } from "react-icons/md";
export default function EDIPartnershipTable() {
    return (

        <div className="overflow-x-auto mx-auto max-w-6xl mt-6 border border-gray-500 rounded-lg shadow-lg" >
            <Table hoverable>
                <Table.Body className="divide-y my-4">

                    <Table.Row className="bg-white h-20 my-4">

                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            EDI 850 Purchase Order
                        </Table.Cell >
                        <Table.Cell className="col-span-2">Mandatory</Table.Cell>
                        <Table.Cell> <MdOutlineFileUpload size={24} /> </Table.Cell>
                        <Table.Cell>
                            <button className="bg-blue-500 text-white px-4 py-2 items-center rounded-lg hover:bg-white hover:text-blue-500 hover:border-blue-500 border hover:border-solid w-24">
                                Validate
                            </button>
                        </Table.Cell>

                    </Table.Row>

                    <Table.Row className="bg-white h-20">

                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            EDI 860 Purchase Order Change Request
                        </Table.Cell>
                        <Table.Cell>Optional</Table.Cell>
                        <Table.Cell> <MdOutlineFileUpload size={24} /> </Table.Cell>
                        <Table.Cell>
                            <button className="bg-emerald-500 text-white px-4 py-2 items-center rounded-lg hover:bg-white hover:text-emerald-500 hover:border-emerald-500 border hover:border-solid w-24">
                                Complete
                            </button>
                        </Table.Cell>

                    </Table.Row>

                    <Table.Row className="bg-white h-20">

                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            EDI 855 Purchase Order Acknowledgment
                        </Table.Cell>
                        <Table.Cell>Mandatory</Table.Cell>
                        <Table.Cell> <MdOutlineFileUpload size={24} /> </Table.Cell>
                        <Table.Cell>
                            <button className="bg-blue-500 text-white px-4 py-2 items-center rounded-lg hover:bg-white hover:text-blue-500 hover:border-blue-500 border hover:border-solid w-24">
                                Validate
                            </button>
                        </Table.Cell>

                    </Table.Row>

                    <Table.Row className="bg-white h-20">

                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            EDI 856 Ship Notice/Manifest
                        </Table.Cell>
                        <Table.Cell>Mandatory</Table.Cell>
                        <Table.Cell> <MdOutlineFileUpload size={24} /> </Table.Cell>
                        <Table.Cell>
                            <button className="bg-red-500 text-white px-4 py-2 items-center rounded-lg hover:bg-white hover:text-red-500 hover:border-red-500 border hover:border-solid w-24">
                                Failed
                            </button>
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row className="bg-white h-20">

                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            EDI 820 Payment Order/Remittance Advice
                        </Table.Cell>
                        <Table.Cell>Optional</Table.Cell>
                        <Table.Cell> <MdOutlineFileUpload size={24} /> </Table.Cell>
                        <Table.Cell>
                            <button className="bg-blue-500 text-white px-4 py-2 items-center rounded-lg hover:bg-white hover:text-blue-500 hover:border-blue-500 border hover:border-solid w-24">
                                Validate
                            </button>
                        </Table.Cell>

                    </Table.Row>

                </Table.Body>
            </Table>
        </div>
    );
}