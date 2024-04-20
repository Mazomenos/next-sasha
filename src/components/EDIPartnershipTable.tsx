import { MdOutlineFileUpload } from "react-icons/md";

export default function EDIPartnershipTable() {
    return (
        <div className="overflow-x-auto mx-auto max-w-7xl mt-6 border border-gray-500 rounded-lg shadow-lg">
            <div className="divide-y">
                <div className="bg-white h-20 flex items-center">
                    <div className="flex-1 whitespace-nowrap font-medium text-gray-900 dark:text-white px-4">
                        EDI 850 Purchase Order
                    </div>
                    <div className="flex-1">Mandatory</div>
                    <div className="flex-1"> <MdOutlineFileUpload size={24} /> </div>
                    <div className="mr-5">
                        <button className="bg-blue-500 text-white py-2 items-center rounded-lg hover:bg-white hover:text-blue-500 hover:border-blue-500 border hover:border-solid w-24">
                            Validate
                        </button>
                    </div>
                </div>

                <div className="bg-white h-20 flex items-center">
                    <div className="flex-1 whitespace-nowrap font-medium text-gray-900 dark:text-white px-4">
                        EDI 860 Purchase Order Change Request
                    </div>
                    <div className="flex-1">Optional</div>
                    <div className="flex-1"> <MdOutlineFileUpload size={24} /> </div>
                    <div className="mr-5">
                        <button className="bg-emerald-500 text-white py-2 items-center rounded-lg hover:bg-white hover:text-emerald-500 hover:border-emerald-500 border hover:border-solid w-24">
                            Complete
                        </button>
                    </div>
                </div>

                <div className="bg-white h-20 flex items-center">
                    <div className="flex-1 whitespace-nowrap font-medium text-gray-900 dark:text-white px-4">
                        EDI 855 Purchase Order Acknowledgment
                    </div>
                    <div className="flex-1">Mandatory</div>
                    <div className="flex-1"> <MdOutlineFileUpload size={24} /> </div>
                    <div className="mr-5">
                        <button className="bg-blue-500 text-white py-2 items-center rounded-lg hover:bg-white hover:text-blue-500 hover:border-blue-500 border hover:border-solid w-24">
                            Validate
                        </button>
                    </div>
                </div>

                <div className="bg-white h-20 flex items-center">
                    <div className="flex-1 whitespace-nowrap font-medium text-gray-900 dark:text-white px-4">
                        EDI 856 Ship Notice/Manifest
                    </div>
                    <div className="flex-1">Mandatory</div>
                    <div className="flex-1"> <MdOutlineFileUpload size={24} /> </div>
                    <div className="mr-5">
                        <button className="bg-red-500 text-white py-2 items-center rounded-lg hover:bg-white hover:text-red-500 hover:border-red-500 border hover:border-solid w-24">
                            Failed
                        </button>
                    </div>
                </div>

                <div className="bg-white h-20 flex items-center">
                    <div className="flex-1 whitespace-nowrap font-medium text-gray-900 dark:text-white px-4">
                        EDI 820 Payment Order/Remittance Advice
                    </div>
                    <div className="flex-1">Optional</div>
                    <div className="flex-1"> <MdOutlineFileUpload size={24} /> </div>
                    <div className="mr-5">
                        <button className="bg-blue-500 text-white py-2 items-center rounded-lg hover:bg-white hover:text-blue-500 hover:border-blue-500 border hover:border-solid w-24">
                            Validate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
