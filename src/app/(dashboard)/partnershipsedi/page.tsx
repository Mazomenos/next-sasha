"use client";

import { MdOutlineFileUpload } from "react-icons/md";
import EDIPartnershipTable from "@/components/EDIPartnershipTable";

export default function PartnershipTable() {
    return (
        <div className="bg-white overflow-hidden mx-auto w-5/6 h-5/6 mt-10 border border-gray-300 rounded-lg shadow-lg ">
            <div className="flex justify-end mt-8 mr-4">
                <button className="bg-black text-white px-4 py-2 flex items-center rounded-lg ">
                    Download PO Test <MdOutlineFileUpload className="ml-2" />
                </button>
            </div>
            <hr className="flex-grow border-gray-300 ml-12 mr-12 mt-8" />
            <EDIPartnershipTable />
        </div>
    )
}
